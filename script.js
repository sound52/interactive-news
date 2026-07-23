(() => {
  const data = window.STORY;
  if (!data) return;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (v = "") => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  document.title = data.meta.title;
  $('meta[name="description"]').setAttribute('content', data.meta.description);
  $('meta[property="og:title"]').setAttribute('content', data.meta.title);
  $('meta[property="og:description"]').setAttribute('content', data.meta.description);
  $('meta[property="og:image"]').setAttribute('content', data.meta.image);
  $('#brandText').textContent = data.meta.brand;

  $('#heroKicker').textContent = data.hero.kicker;
  $('#heroTitle').textContent = data.hero.title;
  $('#heroDeck').textContent = data.hero.deck;
  $('#heroByline').textContent = data.hero.byline;
  $('#heroMedia').style.backgroundImage = `url("${data.hero.image}")`;
  $('#introLead').textContent = data.intro.lead;
  $('#introBody').innerHTML = data.intro.body.map(p => `<p>${esc(p)}</p>`).join('');

  $('#statGrid').innerHTML = data.stats.map((s, i) => `
    <div class="stat-card reveal">
      <div class="stat-value"><span class="counter" data-value="${Number(s.value)}">0</span><span>${esc(s.suffix)}</span></div>
      <div class="stat-label">${esc(s.label)}</div>
      <div class="stat-note">${esc(s.note || '')}</div>
    </div>`).join('');

  const navItems = [{ id: 'intro', nav: '기사' }, ...data.sections.map(s => ({ id: s.id, nav: s.nav })), { id:'outro', nav:'결론' }];
  $('#storyNav').innerHTML = navItems.map(n => `<a href="#${esc(n.id)}">${esc(n.nav)}</a>`).join('');

  const heading = s => `<div class="section-heading reveal"><p class="section-label">${esc(s.label || '')}</p><h2>${esc(s.title || '')}</h2>${s.description ? `<p>${esc(s.description)}</p>` : ''}</div>`;
  const sections = data.sections.map(s => {
    if (s.type === 'scrolly') {
      const imgs = s.steps.map((x,i)=>`<img src="${esc(x.image)}" alt="${esc(x.title)}" class="${i===0?'active':''}" data-scene="${i}">`).join('');
      const steps = s.steps.map((x,i)=>`<div class="scrolly-step" data-step="${i}"><div class="step-card"><span class="step-no">0${i+1}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div></div>`).join('');
      return `<section class="story-section scrolly" id="${esc(s.id)}"><div class="scrolly-visual">${imgs}</div><div class="scrolly-steps">${heading(s)}${steps}</div></section>`;
    }
    if (s.type === 'split') {
      return `<section class="story-section split-section" id="${esc(s.id)}"><div class="split-copy"><div class="split-copy-inner reveal"><p class="section-label">${esc(s.label)}</p><h2>${esc(s.title)}</h2>${s.body.map(p=>`<p>${esc(p)}</p>`).join('')}</div></div><div class="split-media" style="background-image:url('${esc(s.image)}')"></div></section>`;
    }
    if (s.type === 'bars') {
      return `<section class="story-section standard-section" id="${esc(s.id)}">${heading(s)}<div class="bar-chart">${s.items.map(x=>`<div class="bar-item reveal"><div class="bar-label">${esc(x.label)}</div><div class="bar-track"><div class="bar-fill" data-width="${Math.min(100, Number(x.value)/Number(s.max)*100)}"></div></div><div class="bar-value">${esc(x.value)}${esc(s.unit)}</div></div>`).join('')}</div></section>`;
    }
    if (s.type === 'cards') {
      return `<section class="story-section standard-section" id="${esc(s.id)}">${heading(s)}<div class="card-grid">${s.items.map(x=>`<article class="story-card reveal"><div class="icon">${esc(x.icon)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div></section>`;
    }
    if (s.type === 'timeline') {
      return `<section class="story-section standard-section" id="${esc(s.id)}">${heading(s)}<div class="timeline">${s.items.map(x=>`<div class="timeline-item reveal"><div class="timeline-date">${esc(x.date)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join('')}</div></section>`;
    }
    if (s.type === 'fullbleed') {
      return `<section class="story-section fullbleed" id="${esc(s.id)}" style="background-image:url('${esc(s.image)}')"><div class="fullbleed-copy reveal"><blockquote>${esc(s.quote)}</blockquote><cite>${esc(s.cite)}</cite></div></section>`;
    }
    if (s.type === 'gallery') {
      const imgs = [...s.images, ...s.images].map((src,i)=>`<img src="${esc(src)}" alt="현장 사진 ${i%s.images.length+1}">`).join('');
      return `<section class="story-section standard-section" id="${esc(s.id)}">${heading(s)}<div class="gallery-strip"><div class="gallery-track">${imgs}</div></div></section>`;
    }
    return '';
  }).join('');
  $('#storySections').innerHTML = sections;

  $('#outroLabel').textContent = data.outro.label;
  $('#outroTitle').textContent = data.outro.title;
  $('#outroBody').innerHTML = data.outro.body.map(p=>`<p>${esc(p)}</p>`).join('');
  $('#relatedLinks').innerHTML = data.outro.links.map(l=>`<a href="${esc(l.url)}">${esc(l.label)}</a>`).join('');
  $('#footerText').textContent = data.footer;

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      e.target.querySelectorAll?.('.bar-fill').forEach(b => b.style.width = `${b.dataset.width}%`);
      if (e.target.classList.contains('bar-item')) $('.bar-fill', e.target).style.width = `${$('.bar-fill', e.target).dataset.width}%`;
      revealObserver.unobserve(e.target);
    });
  }, { threshold: .16 });
  $$('.reveal, .bar-item').forEach(el => revealObserver.observe(el));

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = Number(el.dataset.value), start = performance.now(), duration = 1100;
      const tick = now => { const p = Math.min(1,(now-start)/duration); el.textContent = (target*p).toFixed(Number.isInteger(target)?0:1); if(p<1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick); counterObserver.unobserve(el);
    });
  }, { threshold: .6 });
  $$('.counter').forEach(el => counterObserver.observe(el));

  $$('.scrolly').forEach(scrolly => {
    const images = $$('[data-scene]', scrolly);
    const steps = $$('[data-step]', scrolly);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(!e.isIntersecting) return; const i = Number(e.target.dataset.step); images.forEach((im,j)=>im.classList.toggle('active', i===j)); });
    }, { rootMargin:'-35% 0px -45% 0px', threshold:0 });
    steps.forEach(s => obs.observe(s));
  });

  const header = $('#siteHeader');
  const progress = $('#progressBar');
  const navLinks = $$('#storyNav a');
  const sectionsForNav = navItems.map(n => document.getElementById(n.id)).filter(Boolean);
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? scrollY/max*100 : 0}%`;
    header.classList.toggle('is-solid', scrollY > innerHeight * .7);
    let current = sectionsForNav[0]?.id;
    sectionsForNav.forEach(s => { if (s.getBoundingClientRect().top <= 130) current = s.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  };
  addEventListener('scroll', onScroll, { passive:true }); onScroll();

  const navToggle = $('#navToggle');
  navToggle.addEventListener('click', () => { const open = $('#storyNav').classList.toggle('open'); navToggle.setAttribute('aria-expanded', String(open)); });
  navLinks.forEach(a => a.addEventListener('click', () => { $('#storyNav').classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); }));
})();
