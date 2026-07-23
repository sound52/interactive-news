(() => {
  const data = window.STORY_DATA;
  if (!data) throw new Error("STORY_DATA가 없습니다.");

  const $ = (s, p = document) => p.querySelector(s);
  const el = (tag, cls, html = "") => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    node.innerHTML = html;
    return node;
  };

  document.documentElement.style.setProperty("--accent", data.theme?.accent || "#d93b2b");
  document.documentElement.style.setProperty("--bg", data.theme?.background || "#f5f3ee");

  $("#heroEyebrow").textContent = data.hero.eyebrow;
  $("#heroTitle").textContent = data.hero.title;
  $("#heroDeck").textContent = data.hero.deck;
  $("#heroMeta").textContent = data.hero.meta;
  $(".hero-media").style.setProperty("--hero-image", `url('${data.hero.image}')`);

  const metrics = $("#metrics");
  data.metrics.forEach((m) => {
    const item = el("div", "metric reveal");
    item.innerHTML = `<strong data-count="${m.value}" data-decimals="${m.decimals || 0}" data-suffix="${m.suffix || ""}">0${m.suffix || ""}</strong><span>${m.label}</span>`;
    metrics.appendChild(item);
  });

  const nav = $("#nav");
  const story = $("#story");

  data.sections.forEach((s) => {
    const a = el("a", "", s.nav || s.title || s.id);
    a.href = `#${s.id}`;
    nav.appendChild(a);

    if (s.type === "photo") {
      const section = el("section", "photo-break");
      section.id = s.id;
      section.style.backgroundImage = `url('${s.image}')`;
      section.innerHTML = `<div class="photo-caption reveal"><h3>${s.title}</h3><p>${s.text || ""}</p></div>`;
      story.appendChild(section);
      return;
    }

    const section = el("section", "story-section");
    section.id = s.id;
    const inner = el("div", "section-inner");
    inner.innerHTML = `
      <div class="section-head reveal">
        <div class="section-no">${s.number || ""}</div>
        <div><h2>${s.title}</h2><p class="section-lead">${s.lead || ""}</p></div>
      </div>`;

    if (s.type === "bars") inner.appendChild(renderBars(s));
    if (s.type === "ranking") inner.appendChild(renderRanking(s));
    if (s.type === "cards") inner.appendChild(renderCards(s));

    section.appendChild(inner);
    story.appendChild(section);
  });

  function renderBody(body = []) {
    const wrap = el("div", "body-copy");
    body.forEach((p) => wrap.appendChild(el("p", "", p)));
    return wrap;
  }

  function renderBars(s) {
    const grid = el("div", "text-grid reveal");
    grid.appendChild(renderBody(s.body));
    const card = el("div", "chart-card");
    card.innerHTML = `<h3 class="chart-title">${s.chartTitle || ""}</h3>`;
    s.chart.forEach((d) => {
      const row = el("div", "bar-row");
      row.innerHTML = `<div class="bar-label"><span>${d.label}</span><strong>${d.value}%</strong></div><div class="bar-track"><div class="bar-fill" data-width="${d.value}%"></div></div>`;
      card.appendChild(row);
    });
    if (s.note) card.appendChild(el("p", "", s.note));
    grid.appendChild(card);
    return grid;
  }

  function renderRanking(s) {
    const grid = el("div", "text-grid reveal");
    if (s.body?.length) {
      const left = renderBody(s.body);
      if (s.quote) left.appendChild(el("blockquote", "quote", `${s.quote.text}<cite>${s.quote.source}</cite>`));
      grid.appendChild(left);
    }
    const card = el("div", "list-card rank-list");
    s.ranking.forEach((d, i) => {
      card.appendChild(el("div", "rank-item", `<div class="rank-no">${String(i + 1).padStart(2, "0")}</div><div><strong>${d.label}</strong><div>${d.detail || ""}</div></div><div class="rank-value">${d.percentage || ""}</div>`));
    });
    grid.appendChild(card);
    return grid;
  }

  function renderCards(s) {
    const grid = el("div", "card-grid reveal");
    s.cards.forEach((d) => grid.appendChild(el("article", "info-card", `<span class="tag">${d.tag || ""}</span><h3>${d.title}</h3><p>${d.text}</p>`)));
    return grid;
  }

  $("#closingEyebrow").textContent = data.closing.eyebrow;
  $("#closingTitle").textContent = data.closing.title;
  $("#closingText").textContent = data.closing.text;
  data.closing.links.forEach((link) => {
    const a = el("a", "", link.label);
    a.href = link.url;
    if (/^https?:/.test(link.url)) { a.target = "_blank"; a.rel = "noopener"; }
    $("#closingLinks").appendChild(a);
  });
  $("#footerText").textContent = data.footer;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.querySelectorAll?.(".bar-fill").forEach((bar) => bar.style.width = bar.dataset.width);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .15 });
  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      animateCount(node);
      countObserver.unobserve(node);
    });
  }, { threshold: .5 });
  document.querySelectorAll("[data-count]").forEach((node) => countObserver.observe(node));

  function animateCount(node) {
    const end = Number(node.dataset.count);
    const decimals = Number(node.dataset.decimals || 0);
    const suffix = node.dataset.suffix || "";
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = (end * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });
  document.querySelectorAll("[id].story-section, .photo-break[id]").forEach((section) => sectionObserver.observe(section));

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    $("#progressBar").style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  }, { passive: true });

  const menuBtn = $("#menuBtn");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
})();
