(() => {
  'use strict';
  const SOCIAL_ICONS = {
    youtube:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z"/></svg>',
    twitter:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2L18.9 2Zm-2.3 18h1.8L7.5 3.8H5.6L16.6 20Z"/></svg>',
    x:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2L18.9 2Zm-2.3 18h1.8L7.5 3.8H5.6L16.6 20Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2Zm0 1.8c-2.7 0-3 0-4 .1-.8 0-1.2.2-1.5.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.7-.3 1.5-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .8.2 1.2.3 1.5.1.4.3.6.6.9.3.3.5.5.9.6.3.1.7.3 1.5.3 1 .1 1.3.1 4 .1s3 0 4-.1c.8 0 1.2-.2 1.5-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.7.3-1.5.1-1 .1-1.3.1-4s0-3-.1-4c0-.8-.2-1.2-.3-1.5-.1-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.1-.7-.3-1.5-.3-1-.1-1.3-.1-4-.1Zm0 3.1a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2Zm0 1.8a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm5.3-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>',
    telegram:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21.9 4.3 18.7 19c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-.9.5l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.6 13 2 11.5c-1-.3-1-1 .2-1.5l18.3-7c.8-.3 1.6.2 1.4 1.3Z"/></svg>',
    website:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-3a15 15 0 0 0-1-3.5A8 8 0 0 1 18.9 8ZM12 4c.7 1 1.3 2.4 1.6 4h-3.2C10.7 6.4 11.3 5 12 4ZM4.3 14a8 8 0 0 1 0-4h3.3a17 17 0 0 0 0 4H4.3Zm.8 2h3a15 15 0 0 0 1 3.5A8 8 0 0 1 5.1 16Zm3-8h-3a8 8 0 0 1 4-3.5A15 15 0 0 0 8.1 8Zm3.9 12c-.7-1-1.3-2.4-1.6-4h3.2c-.3 1.6-.9 3-1.6 4Zm2-6h-4a15 15 0 0 1 0-4h4a15 15 0 0 1 0 4Zm.9 5.5a15 15 0 0 0 1-3.5h3a8 8 0 0 1-4 3.5Zm1.4-5.5a17 17 0 0 0 0-4h3.3a8 8 0 0 1 0 4h-3.3Z"/></svg>',
      email:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm16.4 2H4.6l7.4 4.9L19.4 7ZM4 8.6V18h16V8.6l-8 5.3-8-5.3Z"/></svg>',
  };
  const qs = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = (s) => /^(javascript|data|vbscript):/i.test(String(s).trim()) ? '#' : String(s || '#');
  // Служебные разделы Instagram: они не имя профиля, поэтому показываем обычную ссылку.
  const IG_RESERVED = new Set(['p', 'reel', 'reels', 'tv', 'stories', 'explore', 'accounts', 'direct']);
  const igMention = (user) => `<a class="text-link text-mention" href="https://www.instagram.com/${encodeURIComponent(user)}/" target="_blank" rel="noopener noreferrer">@${esc(user)}</a>`;
  // Ссылки внутри текста: адрес Instagram превращается в @nickname, остальные адреса — в кликабельный текст.
  const linkify = (text) => {
    const chunks = [];
    const hold = (html) => { chunks.push(html); return '\u0001' + (chunks.length - 1) + '\u0001'; };
    let s = String(text ?? '');
    // 1. Instagram: ссылка на профиль -> @nickname, ссылка на пост/рилс -> обычная ссылка.
    s = s.replace(/https?:\/\/(?:www\.)?instagram\.com\/[^\s]+/gi, (m) => {
      const clean = m.replace(/[.,;:!?)]+$/, '');
      const tail = m.slice(clean.length);
      const user = (clean.match(/^https?:\/\/(?:www\.)?instagram\.com\/([A-Za-z0-9._]+)/i) || [])[1];
      if (!user || IG_RESERVED.has(user.toLowerCase())) {
        return hold(`<a class="text-link" href="${esc(safeUrl(clean))}" target="_blank" rel="noopener noreferrer">${esc(clean)}</a>`) + tail;
      }
      return hold(igMention(user)) + tail;
    });
    // 2. Любые другие адреса.
    s = s.replace(/https?:\/\/[^\s<>"']+/gi, (m) => {
      const clean = m.replace(/[.,;:!?)]+$/, '');
      const tail = m.slice(clean.length);
      return hold(`<a class="text-link" href="${esc(safeUrl(clean))}" target="_blank" rel="noopener noreferrer">${esc(clean)}</a>`) + tail;
    });
    // 3. @nickname без адреса — тоже ссылка на профиль Instagram.
    s = s.replace(/(^|[\s(])@([A-Za-z0-9._]{2,30})/g, (m, pre, user) => pre + hold(igMention(user)));
    s = esc(s);
    return s.replace(/\u0001(\d+)\u0001/g, (_, i) => chunks[Number(i)]);
  };
  const link = (p) => 'project.html?id=' + encodeURIComponent(p.id);
  const frameSrc = (f) => typeof f === 'string' ? f : f.src;
  // Уменьшенная копия для ячеек сетки; может отсутствовать.
  const frameThumb = (f) => typeof f === 'object' && f.thumb ? f.thumb : null;
  // Самая полная версия кадра: оптимизированный 4K, исходный 4K или сам файл.
  const originalSrc = f => safeUrl(typeof f === 'object' ? (f.full || f.original || f.src) : f);

  // —— Очередь фоновых загрузок: два файла параллельно — прогрев идёт вдвое
  // быстрее, но канал не замиляется десятками запросов. Срочные файлы ставятся
  // в начало, а фоновые загрузки прерываются, как только нужен кадр на экране. ——
  const queued = new Set(), queueOrder = [], queueLoaders = new Set();
  let fullPaused = false;
  // Однопиксельный GIF: подмена src на него мгновенно отменяет идущую загрузку.
  const BLANK_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  const absoluteUrl = u => { try { return new URL(u, location.href).href; } catch (_) { return u; } };
  function enqueueOriginal(url, high = false) {
    if (!url || url === '#') return;
    const abs = absoluteUrl(url);
    if (queued.has(abs)) return;
    queued.add(abs);
    if (high) queueOrder.unshift(abs); else queueOrder.push(abs);
    pumpQueue();
  }
  function pumpQueue() {
    if (fullPaused) return;
    while (queueLoaders.size < 2 && queueOrder.length) {
      const abs = queueOrder.shift(), im = new Image();
      queueLoaders.add(im);
      im.onload = im.onerror = () => { queueLoaders.delete(im); setTimeout(pumpQueue, 120); };
      im.src = abs;
    }
  }
  function stopQueue() {
    // Прерывает фоновые загрузки: весь канал нужен кадру на экране.
    // src подменяется на крошечный data-URI — смена адреса отменяет запрос,
    // а сама подмена ошибок в консоли не создаёт.
    if (!queueLoaders.size) return;
    const back = [];
    queueLoaders.forEach(im => { back.push(im.src); im.onload = im.onerror = null; im.src = BLANK_IMAGE; });
    queueLoaders.clear();
    queueOrder.unshift(...back);
  }
  // —— Прогрев сайта в фоне: пока вы на сайте, копии кадров догружаются —
  // любая страница и полный экран открываются мгновенно. Проекты обрабатываются
  // по очереди, кадр за кадром: сначала лёгкие копии галереи, затем полная 4K.
  // Текущий проект прогревается первым (сразу полные версии). На сенсорных
  // экранах прогрев ограничен текущим проектом, чтобы не съедать мобильный
  // трафик; при экономии трафика и на медленных сетях (2G) отключён. ——
  let warmStarted = false;
  function warmAllProjects(currentId) {
    if (warmStarted) return; warmStarted = true;
    const touch = matchMedia('(pointer: coarse)').matches;
    const connection = navigator.connection;
    if (connection && (connection.saveData || /2g/i.test(connection.effectiveType || ''))) return;
    SITE.projects
      .filter(p => !touch || p.id === currentId)
      .forEach(p => {
        const isCurrent = p.id === currentId;
        p.frames.forEach(f => {
          if (isCurrent) {
            // Кадры текущего проекта уже на экране: догружаем только полные 4K.
            enqueueOriginal(originalSrc(f));
          } else {
            const thumb = frameThumb(f);
            if (thumb) enqueueOriginal(thumb);
            enqueueOriginal(frameSrc(f));
            enqueueOriginal(originalSrc(f));
          }
        });
        if (!isCurrent) (p.comparison?.frames || []).forEach(step => { if (step && step.src) enqueueOriginal(step.src); });
      });
    pumpQueue();
  }
  function scheduleWarm(currentId) {
    // Прогрев стартует через 1,2 секунды после загрузки страницы: сначала
    // показывается сама страница, и только потом фоновые загрузки.
    const start = () => setTimeout(() => warmAllProjects(currentId), 1200);
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
  }
  function initLightbox(frames, projectTitle) {
    const viewer = document.createElement('dialog');
    viewer.className = 'lightbox';
    viewer.tabIndex = -1;
    viewer.setAttribute('aria-label', 'Полноэкранный просмотр кадров — ' + projectTitle);
    const arrow = '<svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true"><path d="m15 4-8 8 8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    viewer.innerHTML = `<div class="lightbox-stage" aria-label="Изображение: колесо или двойной щелчок для увеличения, перетаскивание для перемещения"></div><div class="lightbox-zoom" role="group" aria-label="Масштаб изображения"><button class="zoom-out" type="button" aria-label="Уменьшить (−)" title="Уменьшить (−)">−</button><output class="zoom-level" aria-label="Масштаб относительно вписанного кадра" aria-live="polite">1×</output><button class="zoom-in" type="button" aria-label="Увеличить (+)" title="Увеличить (+)">+</button><button class="zoom-fit" type="button" aria-label="Сбросить масштаб (0)" title="Сбросить масштаб (0)"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M4 10a8 8 0 1 1 1.8 7M4 4v6h6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div><p class="lightbox-hint" aria-hidden="true"><span>Используйте колёсико мыши для приближения</span></p><p class="lightbox-message" role="status" hidden></p><button class="lightbox-button lightbox-close" type="button" aria-label="Закрыть просмотр (Esc)"><svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button><button class="lightbox-button lightbox-prev" type="button" aria-label="Предыдущий кадр">${arrow}</button><button class="lightbox-button lightbox-next" type="button" aria-label="Следующий кадр">${arrow}</button><span class="visually-hidden lightbox-announcement" role="status" aria-live="polite"></span>`;
    document.body.append(viewer);
    const stage = viewer.querySelector('.lightbox-stage');
    const message = viewer.querySelector('.lightbox-message');
    const closeButton = viewer.querySelector('.lightbox-close');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let active = 0, requestId = 0, currentImage = null, opener = null;
    let savedOverflow = '', ownedFullscreen = false;
    const zoomIn = viewer.querySelector('.zoom-in');
    const zoomOut = viewer.querySelector('.zoom-out');
    const zoomFit = viewer.querySelector('.zoom-fit');
    const zoomLevel = viewer.querySelector('.zoom-level');
    const hint = viewer.querySelector('.lightbox-hint');
    const previousButton = viewer.querySelector('.lightbox-prev');
    const nextButton = viewer.querySelector('.lightbox-next');
    let hintTimer = null, hintAllowed = false;
    if (matchMedia('(pointer: coarse)').matches) hint.querySelector('span').textContent = 'Разведите два пальца, чтобы приблизить кадр';
    function hideHint(immediate = false) {
      clearTimeout(hintTimer); hintTimer = null; hintAllowed = false;
      hint.classList.toggle('is-instant', immediate);
      hint.classList.remove('is-visible'); hint.setAttribute('aria-hidden', 'true');
    }
    // Фокус показываем только при намеренной навигации клавишей Tab.
    viewer.addEventListener('pointerdown', () => viewer.classList.remove('is-keyboard-navigation'), {capture:true});
    function showHint() {
      if (!hintAllowed || !viewer.open) return;
      hint.classList.remove('is-instant');
      // Отдельное измерение запускает короткий переход даже при повторном открытии.
      void hint.offsetWidth;
      hint.classList.add('is-visible'); hint.setAttribute('aria-hidden', 'false');
      hintTimer = setTimeout(()=>hideHint(), 3000);
    }
    function positionViewerUI(box) {
      const left = Math.max(box.left, box.left+box.width/2-fittedW*scale/2+panX);
      const right = Math.min(box.right, box.left+box.width/2+fittedW*scale/2+panX);
      const top = Math.max(box.top, box.top+box.height/2-fittedH*scale/2+panY);
      previousButton.style.left = Math.max(32,left/2)+'px';
      nextButton.style.right = Math.max(32,(viewer.clientWidth-right)/2)+'px';
      previousButton.style.setProperty('--navigation-width', Math.min(88,Math.max(48,left-16))+'px');
      nextButton.style.setProperty('--navigation-width', Math.min(88,Math.max(48,viewer.clientWidth-right-16))+'px');
      // Используем фактический прямоугольник отрисованного изображения, а не
      // повторяем расчёт: дробные CSS-размеры могут округляться иначе у двух слоёв.
      const imageBox = currentImage.getBoundingClientRect();
      const viewerBox = viewer.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      const pixel = 1 / pixelRatio;
      const visibleLeft = Math.max(box.left, imageBox.left);
      const visibleRight = Math.min(box.right, imageBox.right);
      const visibleTop = Math.max(box.top, imageBox.top);
      // Выходим на один физический пиксель за край: сглаживание границы кадра
      // не оставляет незатемнённую щель при zoom 80–200% и дробном DPI.
      const hintLeft = Math.floor(visibleLeft * pixelRatio) / pixelRatio - pixel;
      const hintRight = Math.ceil(visibleRight * pixelRatio) / pixelRatio + pixel;
      const hintTop = Math.floor(visibleTop * pixelRatio) / pixelRatio - pixel;
      Object.assign(hint.style, {
        left:(hintLeft-viewerBox.left)+'px',
        top:(hintTop-viewerBox.top)+'px',
        width:Math.max(0,hintRight-hintLeft)+'px',
      });
    }
    let scale = 1, panX = 0, panY = 0, fittedW = 0, fittedH = 0;
    let loadingFrame = false, pinch = null, moved = false, lastTap = null;
    const pointers = new Map();
    const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
    function paintZoom() {
      const ready = !!currentImage && !loadingFrame;
      zoomIn.disabled = !ready || scale >= 6;
      zoomOut.disabled = !ready || scale <= 1;
      zoomFit.disabled = !ready;
      zoomLevel.textContent = Number(scale.toFixed(1)) + '×';
      stage.classList.toggle('is-zoomed', ready && scale > 1.001);
      if (!ready) return;
      const box = stage.getBoundingClientRect();
      const fit = Math.min(box.width / currentImage.naturalWidth, box.height / currentImage.naturalHeight);
      fittedW = currentImage.naturalWidth * fit;
      fittedH = currentImage.naturalHeight * fit;
      const maxX = Math.max(0, (fittedW * scale - box.width) / 2);
      const maxY = Math.max(0, (fittedH * scale - box.height) / 2);
      panX = clamp(panX, -maxX, maxX); panY = clamp(panY, -maxY, maxY);
      Object.assign(currentImage.style, {width:fittedW+'px',height:fittedH+'px',transform:`translate(-50%, -50%) translate(${panX}px, ${panY}px) scale(${scale})`});
      positionViewerUI(box);
    }
    function clearGesture() {
      pointers.clear(); pinch = null; lastTap = null;
      stage.classList.remove('is-dragging');
    }
    function resetZoom() {
      scale = 1; panX = 0; panY = 0;
      clearGesture(); paintZoom();
    }
    function zoomTo(value, clientX, clientY) {
      hideHint();
      if (!currentImage || loadingFrame) return;
      currentImage.getAnimations().forEach(a=>a.cancel());
      const next = clamp(value, 1, 6), ratio = next / scale;
      const r = stage.getBoundingClientRect();
      const x = clientX == null ? 0 : clientX - r.left - r.width/2;
      const y = clientY == null ? 0 : clientY - r.top - r.height/2;
      panX = x - (x-panX)*ratio; panY = y - (y-panY)*ratio;
      scale = next; if (scale === 1) panX = panY = 0;
      paintZoom();
    }
    zoomIn.addEventListener('click',()=>zoomTo(scale*1.5));
    zoomOut.addEventListener('click',()=>zoomTo(scale/1.5));
    zoomFit.addEventListener('click',()=>{hideHint();resetZoom();});
    stage.addEventListener('wheel',e=>{
      e.preventDefault(); hideHint(); zoomTo(scale * Math.exp(-e.deltaY * (e.deltaMode===1 ? 0.04 : 0.002)),e.clientX,e.clientY);
    },{passive:false});
    stage.addEventListener('dblclick',e=>{
      e.preventDefault(); zoomTo(scale>1.001 ? 1 : 2,e.clientX,e.clientY);
    });
    function pointerDistance() {
      const [a,b] = [...pointers.values()];
      return {distance:Math.hypot(a.x-b.x,a.y-b.y),x:(a.x+b.x)/2,y:(a.y+b.y)/2};
    }
    stage.addEventListener('pointerdown',e=>{
      if (!currentImage || loadingFrame || (e.pointerType==='mouse' && e.button!==0)) return;
      e.preventDefault(); stage.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(pointers.size===1) moved=false;
      if(pointers.size>=2) {pinch=pointerDistance();moved=true;lastTap=null;}
      if(scale>1) stage.classList.add('is-dragging');
    });
    stage.addEventListener('pointermove',e=>{
      const previous = pointers.get(e.pointerId); if(!previous) return;
      const dx = e.clientX-previous.x, dy = e.clientY-previous.y;
      if(Math.abs(dx)+Math.abs(dy)>2) moved=true;
      pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(pointers.size>=2){
        const next=pointerDistance();
        if(pinch && pinch.distance>0){
          zoomTo(scale*next.distance/pinch.distance,pinch.x,pinch.y);
          panX+=next.x-pinch.x;panY+=next.y-pinch.y;paintZoom();
        }
        pinch=next;
      } else if(scale>1){panX+=dx;panY+=dy;paintZoom();}
    });
    function endPointer(e){
      if(!pointers.has(e.pointerId))return;
      pointers.delete(e.pointerId);pinch=null;
      if(e.type==='pointerup' && e.pointerType==='touch' && !moved && pointers.size===0){
        const now=performance.now();
        if(lastTap && now-lastTap.time<300 && Math.hypot(e.clientX-lastTap.x,e.clientY-lastTap.y)<32){
          zoomTo(scale>1.001 ? 1 : 2,e.clientX,e.clientY);lastTap=null;
        }else lastTap={time:now,x:e.clientX,y:e.clientY};
      }
      if(!pointers.size) stage.classList.remove('is-dragging');
    }
    ['pointerup','pointercancel','lostpointercapture'].forEach(type=>stage.addEventListener(type,endPointer));
    stage.addEventListener('dragstart',e=>e.preventDefault());
    new ResizeObserver(()=>{if(viewer.open)paintZoom();}).observe(stage);
    window.addEventListener('resize', () => {if (viewer.open) paintZoom();});
    window.visualViewport?.addEventListener('resize', () => {if (viewer.open) paintZoom();});
    function watchPixelRatio() {
      const resolution = matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
      resolution.addEventListener('change', () => {
        if (viewer.open) paintZoom();
        watchPixelRatio();
      }, {once:true});
    }
    watchPixelRatio();
    paintZoom();
    // Лёгкая версия для мгновенного показа: только когда у кадра есть более тяжёлый оригинал.
    const quickSrc = f => typeof f === 'object' && (f.full || f.original) ? safeUrl(f.src) : null;

    async function showFrame(index, direction = 0, firstOpen = false) {
      hideHint(firstOpen); hintAllowed = firstOpen;
      loadingFrame = true; resetZoom();
      active = (index + frames.length) % frames.length;
      const token = ++requestId, frame = frames[active], im = new Image();
      im.className = 'lightbox-image';
      im.alt = typeof frame === 'object' && frame.alt ? frame.alt : projectTitle + ' — кадр ' + (active+1);
      // Канал целиком кадру на экране: фоновая загрузка прерывается.
      stopQueue(); fullPaused = true;
      // Сначала мгновенно показывается лёгкая версия кадра, затем в фоне
      // загружается оригинал — без ресайза, перекодирования и фильтров.
      const quick = quickSrc(frame), full = originalSrc(frame);
      im.src = quick || full;
      message.textContent = 'Загрузка кадра…'; message.hidden = false;
      try { await im.decode(); }
      catch (_) {
        if (token !== requestId || !viewer.open) return;
        fullPaused = false; pumpQueue();
        stage.replaceChildren(); currentImage = null; loadingFrame = false; paintZoom();
        message.textContent = 'Не удалось загрузить кадр. Проверьте путь к оригинальному файлу.';
        return;
      }
      if (token !== requestId || !viewer.open) return;
      message.hidden = true;
      const oldImage = currentImage;
      [...stage.children].forEach(e => {if(e !== oldImage) e.remove();});
      if (oldImage) oldImage.getAnimations().forEach(a=>a.cancel());
      stage.append(im); currentImage = im; im.draggable = false; loadingFrame = false; paintZoom();
      showHint();
      const duration = reducedMotion.matches ? 0 : 160;
      if (duration) {
        im.animate([{opacity:0},{opacity:1}],{duration,easing:'ease-out'});
        if (oldImage) {
          const exit = oldImage.animate([{opacity:1},{opacity:0}],{duration,easing:'ease-out'});
          exit.finished.then(()=>oldImage.remove()).catch(()=>{});
        }
      } else if(oldImage) oldImage.remove();
      viewer.querySelector('.lightbox-announcement').textContent = `Кадр ${active+1} из ${frames.length}`;
      if (quick && quick !== full) {
        // Оригинал догружается вне очереди (канал уже освобождён), очередь ждёт.
        const hi = new Image(); hi.src = full;
        const done = () => { fullPaused = false; pumpQueue(); };
        hi.decode().then(() => {
          done();
          if (token !== requestId || !viewer.open || currentImage !== im) return;
          im.src = full; // тот же размер на экране, но полное разрешение кадра
          paintZoom();
        }).catch(done);
      } else {
        fullPaused = false; pumpQueue();
      }
    }
    function closeViewer() {
      if (!viewer.open) return;
      ++requestId; hideHint(true);
      // Браузер возвращает фокус кадру после Esc: не рисуем рамку поверх изображения.
      opener?.classList.add('is-viewer-return');
      viewer.close();
      document.body.style.overflow = savedOverflow;
      stage.replaceChildren(); currentImage = null; loadingFrame = false; resetZoom();
      message.hidden = true;
      const shouldExit = document.fullscreenElement === viewer;
      ownedFullscreen = false;
      if (shouldExit) document.exitFullscreen().catch(()=>{});
      opener?.focus({preventScroll:true});
    }
    function openViewer(index, button) {
      opener = button; savedOverflow = document.body.style.overflow;
      viewer.classList.remove('is-keyboard-navigation');
      viewer.showModal(); document.body.style.overflow = 'hidden';
      // Не фокусируем крестик: клавиши не должны включать его подсветку.
      viewer.focus({preventScroll:true});
      viewer.querySelector('.lightbox-prev').hidden = frames.length < 2;
      viewer.querySelector('.lightbox-next').hidden = frames.length < 2;
      showFrame(index, 0, true);
      // Настоящий полноэкранный режим, если браузер разрешает. Иначе — на всё окно.
      if (viewer.requestFullscreen && document.fullscreenEnabled) {
        viewer.requestFullscreen().then(()=>{
          if (viewer.open) ownedFullscreen = true;
          else if(document.fullscreenElement === viewer) document.exitFullscreen().catch(()=>{});
        }).catch(()=>{});
      }
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Tab') document.querySelectorAll('.still-open.is-viewer-return').forEach(button => button.classList.remove('is-viewer-return'));
    }, {capture:true});
    document.querySelectorAll('.still-open').forEach(button=>button.addEventListener('click',()=>openViewer(Number(button.dataset.frameIndex),button)));
    // Наведение на кадр ставит его оригинал в начало очереди загрузки: к моменту
    // клика файл обычно уже скачан и полный экран открывается мгновенно.
    // Случайный пролет мыши над сеткой загрузок не вызывает.
    let hoverTimer = null, hoverCandidate = null;
    document.querySelectorAll('.still-open').forEach(button=>{
      button.addEventListener('pointerenter',e=>{
        if (e.pointerType !== 'mouse') return;
        const f = frames[Number(button.dataset.frameIndex)];
        if (!f) return;
        hoverCandidate = originalSrc(f);
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(()=>enqueueOriginal(hoverCandidate, true), 150);
      });
      button.addEventListener('pointerleave',()=>clearTimeout(hoverTimer));
    });
    closeButton.addEventListener('click',closeViewer);
    viewer.querySelector('.lightbox-prev').addEventListener('click',()=>showFrame(active-1,-1));
    viewer.querySelector('.lightbox-next').addEventListener('click',()=>showFrame(active+1,1));
    viewer.addEventListener('cancel',e=>{e.preventDefault();closeViewer();});
    document.addEventListener('keydown',e=>{
      if (!viewer.open) return;
      if(e.key==='Tab') {
        viewer.classList.add('is-keyboard-navigation');
        const buttons = [...viewer.querySelectorAll('button')].filter(b=>!b.hidden && !b.disabled);
        const first = buttons[0], last = buttons[buttons.length-1];
        if(e.shiftKey && (document.activeElement===first || document.activeElement===viewer)){e.preventDefault();last.focus();}
        else if(!e.shiftKey && (document.activeElement===last || document.activeElement===viewer)){e.preventDefault();first.focus();}
      }
      else if(e.key==='Escape'){e.preventDefault();closeViewer();}
      else if(e.key==='+' || e.key==='='){e.preventDefault();zoomTo(scale*1.5);}
      else if(e.key==='-' || e.key==='−'){e.preventDefault();zoomTo(scale/1.5);}
      else if(e.key==='0'){e.preventDefault();hideHint();resetZoom();}
      else if(e.key==='ArrowLeft'){e.preventDefault();showFrame(active-1,-1);}
      else if(e.key==='ArrowRight'){e.preventDefault();showFrame(active+1,1);}
    });
    document.addEventListener('fullscreenchange',()=>{
      if (ownedFullscreen && document.fullscreenElement !== viewer) closeViewer();
    });
  }
  function initComparison(project) {
    const labels = ['Log', 'Rec.709', 'Primaries', 'Color & skin Fix', 'Grade', 'Final'];
    const configured = project.comparison?.frames;
    if (project.comparison === false) return;
    const steps = Array.isArray(configured) && configured.length ? configured : labels.map(label => ({label, src:''}));
    const section = document.createElement('section');
    section.className = 'project-section project-comparison';
    section.setAttribute('aria-labelledby', 'comparisonTitle');
    const arrow = '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="m15 4-8 8 8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    section.innerHTML = `<div class="section-heading"><h2 id="comparisonTitle">Сравнение этапов обработки</h2></div><div class="comparison-player" tabindex="0" role="group" aria-label="Сравнение этапов: используйте стрелки влево и вправо"><div class="comparison-stage"><div class="comparison-window"><div class="comparison-picture"></div><p class="comparison-status" role="status"></p></div><button class="comparison-arrow comparison-prev" type="button" aria-label="Предыдущий этап">${arrow}</button><button class="comparison-arrow comparison-next" type="button" aria-label="Следующий этап">${arrow}</button></div><nav class="comparison-path" aria-label="Этапы обработки">${steps.map((step, i) => `${i ? '<span class="comparison-separator" aria-hidden="true"><svg viewBox="0 0 24 16" width="20" height="16" focusable="false"><path d="M2 8h19m-6-5 6 5-6 5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' : ''}<button type="button" data-step="${i}" aria-pressed="${i === 0}">${esc(step.label || labels[i] || 'Этап ' + (i+1))}</button>`).join('')}</nav><span class="visually-hidden comparison-announcement" role="status" aria-live="polite"></span></div>`;
    qs('#projectContent').append(section);
    const player = section.querySelector('.comparison-player');
    const picture = section.querySelector('.comparison-picture');
    const status = section.querySelector('.comparison-status');
    const buttons = [...section.querySelectorAll('[data-step]')];
    const previous = section.querySelector('.comparison-prev');
    const next = section.querySelector('.comparison-next');
    previous.hidden = next.hidden = steps.length < 2;
    let active = 0, request = 0;
    const cache = new Map();
    function load(src) {
      if (!cache.has(src)) {
        const im = new Image();
        im.className = 'comparison-image';
        im.draggable = false;
        im.src = src;
        const promise = im.decode().then(() => im).catch(error => {cache.delete(src); throw error;});
        cache.set(src, promise);
      }
      return cache.get(src);
    }
    async function show(index) {
      active = (index + steps.length) % steps.length;
      const token = ++request, step = steps[active];
      const label = step.label || labels[active] || 'Этап ' + (active+1);
      buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === active)));
      section.querySelector('.comparison-announcement').textContent = `Этап ${active+1} из ${steps.length}: ${label}`;
      const src = String(step.original || step.src || '').trim();
      if (!src || safeUrl(src) === '#') {
        picture.replaceChildren();
        status.textContent = `Кадр «${label}» пока не добавлен`;
        status.hidden = false; player.removeAttribute('aria-busy');
        return;
      }
      // Смена только целого декодированного оригинала: никаких переходов и фильтров.
      picture.replaceChildren();
      player.setAttribute('aria-busy', 'true'); status.textContent = 'Загрузка кадра…'; status.hidden = false;
      try {
        const im = await load(src);
        if (request !== token) return;
        im.alt = project.title + ' — ' + label;
        picture.replaceChildren(im);
        status.hidden = true; player.removeAttribute('aria-busy');
        // Подготовка соседних этапов для мгновенного следующего переключения.
        [active-1, active+1].forEach(i => {
          const neighbor = steps[(i+steps.length)%steps.length];
          const url = String(neighbor.original || neighbor.src || '').trim();
          if (url && safeUrl(url) !== '#') load(url).catch(() => {});
        });
      } catch (_) {
        if (request !== token) return;
        status.textContent = `Не удалось загрузить кадр «${label}»`;
        player.removeAttribute('aria-busy');
      }
    }
    buttons.forEach((button, i) => button.addEventListener('click', () => show(i)));
    previous.addEventListener('click', () => show(active-1));
    next.addEventListener('click', () => show(active+1));
    player.addEventListener('keydown', e => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === 'ArrowLeft') {e.preventDefault(); show(active-1);}
      else if (e.key === 'ArrowRight') {e.preventDefault(); show(active+1);}
      else if (e.key === 'Home') {e.preventDefault(); show(0);}
      else if (e.key === 'End') {e.preventDefault(); show(steps.length-1);}
    });
    show(0);
  }
  document.querySelectorAll('[data-brand]').forEach(e => e.textContent = SITE.name);
  const footName = qs('#footName'); if (footName) footName.textContent = SITE.name;
  const year = qs('#year'); if (year) year.textContent = new Date().getFullYear();
  if (document.body.dataset.page === 'home') {
    qs('#studioName').textContent = SITE.headline;
    // Точный вид исходного эмодзи, независимо от версии системных шрифтов.
    if (SITE.headline.endsWith('🫡')) {
      qs('#studioName').textContent = SITE.headline.slice(0, -2);
      const emoji = document.createElement('img'); emoji.className = 'source-title-emoji';
      emoji.src = 'images/header-emoji.png'; emoji.alt = '🫡';
      qs('#studioName').appendChild(emoji);
    }
    qs('#studioDesc').textContent = SITE.tagline;
    const socialWrap = qs('#socialLinks');
    socialWrap.innerHTML = '';
    (SITE.socials || []).forEach(s => {
      const a = document.createElement('a'); a.className = 'social';
      const href = s.type === 'email' && !/^mailto:/i.test(s.url) ? 'mailto:' + s.url : s.url;
      a.href = safeUrl(href); a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML = (SOCIAL_ICONS[s.type] || SOCIAL_ICONS.website) + '<span>' + esc(s.label) + ' <b>' + esc(s.handle || '') + '</b></span>';
      socialWrap.appendChild(a);
    });
    function renderGrid() {
      const projects = SITE.projects;
      // На телефоне плитка в одну колонку: без загрузки хватает первых двух.
      const eagerLimit = matchMedia('(max-width:700px)').matches ? 2 : 5;
      qs('#grid').innerHTML = projects.map((p,i) => `<a class="frame-link" href="${link(p)}" aria-label="${esc(p.title + (p.subtitle ? ' — ' + p.subtitle : ''))}"><img src="${esc(safeUrl(p.preview))}" alt="${esc(p.title)}: превью" ${i===0 ? 'fetchpriority="high" ' : ''}${i >= eagerLimit ? 'loading="lazy"' : ''}><span class="scrim" aria-hidden="true"></span><span class="frame-copy"><strong>${esc(p.title)}</strong>${p.subtitle ? '<small>'+esc(p.subtitle)+'</small>' : ''}</span></a>`).join('');
      qs('#emptyState').hidden = projects.length !== 0;
    }
    // qs('#demoNote').textContent = SITE.projects.some(p=>p.demo) ? '' : '';
    // qs('#demoNote').hidden = !SITE.projects.some(p=>p.demo);
    renderGrid();
    scheduleWarm(null);
  } else {
    const id = new URLSearchParams(location.search).get('id');
    const p = SITE.projects.find(p=>p.id===id);
    const root = qs('#projectContent');
    if (!p) {
      document.title = 'Проект не найден — ' + SITE.name;
      root.innerHTML = '<h1>Проект не найден</h1><p class="hero-desc">Возможно, ссылка устарела. Вернитесь к списку работ и выберите проект.</p>';
      return;
    }
    document.title = p.title + ' — ' + SITE.name;
    qs('meta[name="description"]').content = p.description;
    const frames = p.frames?.length ? p.frames : [p.preview];
    // 4K первого кадра начинает грузиться сразу, ещё до клика: полный экран
    // открывается с полным разрешением почти мгновенно.
    const firstFull = frames[0] && typeof frames[0] === 'object' ? originalSrc(frames[0]) : null;
    if (firstFull) {
      const pre = document.createElement('link');
      pre.rel = 'preload'; pre.as = 'image'; pre.href = firstFull;
      document.head.appendChild(pre);
    }
    function renderStill(f, i, extraClass = '') {
      const src = safeUrl(frameSrc(f)), thumb = frameThumb(f);
      const alt = esc(typeof f === 'object' && f.alt ? f.alt : p.title + ' — кадр ' + (i+1));
      // Браузер сам выбирает копию под экран: 1280 px для ячеек сетки, 1920 px для большого кадра.
      const sizes = extraClass === 'feature-main' ? '(max-width: 700px) 100vw, 66vw' : '(max-width: 700px) 50vw, 33vw';
      const srcset = thumb ? `${esc(safeUrl(thumb))} 1280w, ${esc(src)} 1920w` : '';
      return `<figure class="still${extraClass ? ' ' + extraClass : ''}"><button class="still-open" type="button" data-frame-index="${i}" aria-label="Открыть кадр ${i+1} в полном размере"><img src="${esc(thumb || src)}"${srcset ? ` srcset="${srcset}" sizes="${sizes}"` : ''} alt="${alt}"${i === 0 ? ' fetchpriority="high"' : ''}${i > 3 ? ' loading="lazy"' : ''}></button>${typeof f === 'object' && f.caption ? `<figcaption>${esc(f.caption)}</figcaption>` : ''}</figure>`;
    }
    function renderFeature() {
      return `<div class="feature-stills feature-count-${Math.min(frames.length, 3)}">${frames.map((f, i) => renderStill(f, i, i === 0 ? 'feature-main' : (i < 3 ? 'feature-side feature-side-' + i : ''))).join('')}</div>`;
    }
    root.innerHTML = `<header class="project-header"><h1>${esc(p.title)}</h1>${p.subtitle ? '<p class="project-subtitle">'+esc(p.subtitle)+'</p>' : ''}</header><section class="project-description" aria-label="Описание проекта"><p>${linkify(p.description)}</p></section><section class="project-section project-frames" aria-label="Галерея кадров">${renderFeature()}</section><section class="project-section" aria-labelledby="videoTitle"><div class="section-heading"><h2 id="videoTitle">Видео проекта</h2>${p.video ? '<span>Фрагмент</span>' : ''}</div><div id="videoContent"></div></section>`;
    initLightbox(frames, p.title);
    initComparison(p);
    scheduleWarm(p.id);
    const v = p.video, holder = qs('#videoContent');
    if (!v) {
      holder.className='video-empty';
      holder.innerHTML = p.demo ? '<p>Здесь будет видеофрагмент проекта.</p><p>Для демонстрационных проектов видео не добавлено. Подключите свой MP4, YouTube или Vimeo в projects.js.</p>' : '<p>Видеофрагмент пока не опубликован.</p>';
      return;
    }
    const start = Math.max(0, Number(v.start)||0), end = Number(v.end)>start ? Number(v.end) : null;
    holder.className='video-wrap';
    if (v.provider === 'file') {
      const player = document.createElement('video'); player.controls=true;player.playsInline=true;player.preload='metadata';player.src=safeUrl(v.src);player.poster=safeUrl(v.poster || p.preview);
      player.setAttribute('aria-label', 'Видеофрагмент — '+p.title); holder.append(player);
      player.addEventListener('loadedmetadata',()=>{if(start < player.duration) player.currentTime=start;});
      player.addEventListener('play',()=>{if(player.currentTime<start || (end && player.currentTime>=end)) player.currentTime=start;});
      player.addEventListener('timeupdate',()=>{if(end && player.currentTime>=end){player.pause();player.currentTime=start;}});
      player.addEventListener('seeking',()=>{if(player.currentTime<start || (end && player.currentTime>end)) player.currentTime=start;});
      player.addEventListener('error',()=>{holder.className='video-empty'; holder.innerHTML='<p>Не удалось загрузить видео. Проверьте файл и путь к нему в projects.js.</p>';});
    } else if (v.provider === 'youtube' || v.provider === 'vimeo') {
      const player = document.createElement('iframe'); player.title='Видео — '+p.title;player.loading='lazy';player.allow='fullscreen; picture-in-picture; encrypted-media';player.allowFullscreen=true;player.referrerPolicy='strict-origin-when-cross-origin';
      player.src = v.provider === 'youtube' ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?start=${Math.floor(start)}${end?'&end='+Math.floor(end):''}&rel=0` : `https://player.vimeo.com/video/${encodeURIComponent(v.id)}#t=${Math.floor(start)}s`;
      holder.append(player);
    } else {holder.className='video-empty';holder.textContent='Неизвестный формат видео. Используйте file, youtube или vimeo.';}
  }
})();
