# Creates lightweight web copies of every .jpg in the "images" folder.
# Two tiers are made next to each original, inside a "web" subfolder:
#   web/<name>.jpg        - up to 1920 px, quality 82 (big frame, fullscreen preview)
#   web/<name>-thumb.jpg  - up to 1280 px, quality 80 (grid cells, home previews)
# Originals are NEVER modified.
#
# Run this after adding new 4K frames, then make sure projects.js points
# to the web copy in "src", the thumb copy in "thumb" and keeps the 4K
# path in "original".
#
# How to run: double-click make-web-versions.bat

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root   = Join-Path $PSScriptRoot 'images'
$tiers  = @(
  @{ Suffix = '';          MaxW = 1920; Quality = 82 },
  @{ Suffix = '-thumb';    MaxW = 1280; Quality = 80 }
)
$minKB   = 500    # files already lighter than this are used as-is

$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }
if (-not $enc) { throw 'JPEG encoder not found' }

$files = Get-ChildItem -Path $root -Recurse -File |
  Where-Object { $_.Extension -match '^\.jpe?g$' -and $_.FullName -notmatch '\\web\\' }

$created = 0; $unchanged = 0; $alreadyLight = 0; $before = 0L; $after = 0L

foreach ($f in $files) {
  # Already light enough: the site can use this file directly, no copies needed.
  if ($f.Length -lt $minKB * 1KB) { $alreadyLight++; continue }

  $outDir  = Join-Path $f.Directory.FullName 'web'
  $pending = $tiers | Where-Object {
    $p = Join-Path $outDir ($f.BaseName + $_.Suffix + $f.Extension)
    -not (Test-Path -LiteralPath $p) -or (Get-Item -LiteralPath $p).LastWriteTime -lt $f.LastWriteTime
  }
  if (-not $pending) { $unchanged++; continue }

  $img = [System.Drawing.Image]::FromFile($f.FullName)
  try {
    if (-not (Test-Path -LiteralPath $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }
    foreach ($tier in $pending) {
      $outName = $f.BaseName + $tier.Suffix + $f.Extension
      $outPath = Join-Path $outDir $outName

      if ($img.Width -gt $tier.MaxW) {
        $nw = $tier.MaxW
        $nh = [int][math]::Round($img.Height * $tier.MaxW / $img.Width)
      } else {
        $nw = $img.Width; $nh = $img.Height
      }
      $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
      try {
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.DrawImage($img, 0, 0, $nw, $nh)
        $g.Dispose()

        $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$tier.Quality)
        $bmp.Save($outPath, $enc, $ep)
      } finally { $bmp.Dispose() }
    }
  } finally { $img.Dispose() }

  $webFile = Get-Item -LiteralPath (Join-Path $outDir ($f.BaseName + $f.Extension)) -ErrorAction SilentlyContinue
  $thumbFile = Get-Item -LiteralPath (Join-Path $outDir ($f.BaseName + '-thumb' + $f.Extension)) -ErrorAction SilentlyContinue
  $before += $f.Length
  $after += ($webFile, $thumbFile | Where-Object { $_ } | Measure-Object -Property Length -Sum).Sum
  $created++
  Write-Host ("OK  {0}  {1} KB -> {2} KB" -f $f.FullName.Substring($root.Length + 1), [math]::Round($f.Length / 1KB), [math]::Round(($webFile, $thumbFile | Where-Object { $_ } | Measure-Object -Property Length -Sum).Sum / 1KB))
}

Write-Host ''
Write-Host ("Files processed: {0}" -f $created)
Write-Host ("Already up to date: {0}" -f $unchanged)
Write-Host ("Files already light (under {0} KB): {1}" -f $minKB, $alreadyLight)
if ($before -gt 0) {
  Write-Host ("Weight of processed files: {0} MB -> {1} MB" -f [math]::Round($before / 1MB, 1), [math]::Round($after / 1MB, 1))
}
Write-Host 'Original 4K files were not modified.'
