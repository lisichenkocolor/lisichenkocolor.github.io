# Creates lightweight web copies of every .jpg in the "images" folder.
# Web copy: longest side up to 1920 px, JPEG quality 82. Saved to a "web"
# subfolder next to the original file. Originals are NEVER modified.
#
# Run this after adding new 4K frames, then make sure projects.js points
# to the web copy in "src" and keeps the 4K path in "original".
#
# How to run: double-click make-web-versions.bat

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root    = Join-Path $PSScriptRoot 'images'
$maxW    = 1920   # max width of a web copy in px
$quality = 82     # JPEG quality of a web copy
$minKB   = 500    # files already lighter than this are used as-is

$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }
if (-not $enc) { throw 'JPEG encoder not found' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)

$files = Get-ChildItem -Path $root -Recurse -File |
  Where-Object { $_.Extension -match '^\.jpe?g$' -and $_.FullName -notmatch '\\web\\' }

$created = 0; $unchanged = 0; $alreadyLight = 0; $before = 0L; $after = 0L

foreach ($f in $files) {
  $outDir  = Join-Path $f.Directory.FullName 'web'
  $outPath = Join-Path $outDir $f.Name

  # Already light enough: the site can use this file directly, no copy needed.
  if ($f.Length -lt $minKB * 1KB) { $alreadyLight++; continue }

  # Web copy exists and is up to date.
  if ((Test-Path -LiteralPath $outPath) -and (Get-Item -LiteralPath $outPath).LastWriteTime -ge $f.LastWriteTime) {
    $unchanged++; $before += $f.Length; $after += (Get-Item -LiteralPath $outPath).Length; continue
  }

  $img = [System.Drawing.Image]::FromFile($f.FullName)
  try {
    if ($img.Width -gt $maxW) {
      $nw = $maxW
      $nh = [int][math]::Round($img.Height * $maxW / $img.Width)
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
      if (-not (Test-Path -LiteralPath $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }
      $bmp.Save($outPath, $enc, $ep)
    } finally { $bmp.Dispose() }

    $outLen = (Get-Item -LiteralPath $outPath).Length
    $before += $f.Length; $after += $outLen; $created++
    Write-Host ("OK  {0}  {1} KB -> {2} KB" -f $f.FullName.Substring($root.Length + 1), [math]::Round($f.Length / 1KB), [math]::Round($outLen / 1KB))
  } finally { $img.Dispose() }
}

Write-Host ''
Write-Host ("Web copies created: {0}" -f $created)
Write-Host ("Web copies already up to date: {0}" -f $unchanged)
Write-Host ("Files already light (under {0} KB): {1}" -f $minKB, $alreadyLight)
if ($before -gt 0) {
  Write-Host ("Weight of processed files: {0} MB -> {1} MB" -f [math]::Round($before / 1MB, 1), [math]::Round($after / 1MB, 1))
}
Write-Host 'Original 4K files were not modified.'
