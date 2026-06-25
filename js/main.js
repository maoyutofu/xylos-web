/* ── Language Detection ── */
function getLang() {
  const path = window.location.pathname;
  if (/(?:^|\/)zh(?:$|\/)/.test(path)) return 'zh';
  return 'en';
}

const LANG = getLang();

// Set html lang attribute
document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : 'en';

/* ── Render All Content ── */
function $(selector, parent) {
  return (parent || document).querySelector(selector);
}

function $$(selector, parent) {
  return Array.from((parent || document).querySelectorAll(selector));
}

const t = I18N[LANG];

/* ── Nav ── */
// Update language switch active state
$$('.lang-switch button').forEach(btn => {
  if (btn.dataset.lang === LANG) {
    btn.classList.add('active');
    btn.setAttribute('aria-current', 'true');
  } else {
    btn.classList.remove('active');
    btn.removeAttribute('aria-current');
  }
});

// Language switch click handler
$$('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => {
    const newLang = btn.dataset.lang;
    if (newLang === LANG) return;
    const newPath = window.location.pathname.replace(/(^|\/)zh(?=$|\/)/, '$1' + newLang).replace(/(^|\/)en(?=$|\/)/, '$1' + newLang);
    window.location.href = newPath;
  });
});

// Render nav links
$('#nav-docs').textContent = t.nav_docs;
$('#nav-docs').href = t.nav_docs_url;
$('#nav-download').textContent = t.nav_download;
$('#nav-download').href = t.nav_download_url;
$('#nav-contact').textContent = t.nav_contact;
$('#nav-contact').href = t.nav_contact_url;

/* ── Hero ── */
$('#hero-badge').textContent = LANG === 'zh' ? '开源 & 免费' : 'Open Source & Free';
$('#hero-title').innerHTML = t.hero_title.replace(
  'Xylos',
  '<span>Xylos</span>'
);
$('#hero-subtitle').textContent = t.hero_subtitle;
$('#hero-cta-download').textContent = t.hero_cta_download;
$('#hero-cta-github').textContent = t.hero_cta_github;

/* ── Features ── */
$('#features-heading').textContent = t.features_heading;
$('#features-subtitle').textContent = t.features_subtitle;

const featuresGrid = $('#features-grid');
t.features.forEach((f, i) => {
  const card = document.createElement('div');
  card.className = 'feature-card reveal';
  card.innerHTML = `
    <div class="feature-icon">${f.icon}</div>
    <h3>${f.title}</h3>
    <p>${f.desc}</p>
  `;
  featuresGrid.appendChild(card);
});

/* ── Auth Methods ── */
$('#auth-heading').textContent = t.auth_heading;
$('#auth-subtitle').textContent = t.auth_subtitle;

const authGrid = $('#auth-grid');
t.auth_methods.forEach((m, i) => {
  const card = document.createElement('div');
  card.className = 'auth-card reveal';
  card.innerHTML = `
    <div class="auth-card-header">
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
    </div>
    <div class="auth-card-scenario">${m.scenario}</div>
  `;
  authGrid.appendChild(card);
});

/* ── Screenshots ── */
$('#screenshots-heading').textContent = t.screenshots_heading;
$('#screenshots-subtitle').textContent = t.screenshots_subtitle;
$('#scr-desk-heading').textContent = t.scr_desk_heading;
$('#scr-mobi-heading').textContent = t.scr_mobi_heading;
$('#scr-label-list').textContent = t.scr_list;
$('#scr-label-grid').textContent = t.scr_grid;
$('#scr-label-server').textContent = t.scr_server;
$('#scr-m-label-list').textContent = t.scr_list;
$('#scr-m-label-grid').textContent = t.scr_grid;
$('#scr-m-label-server').textContent = t.scr_server;

/* ── Footer ── */
$('#footer-copyright').textContent = t.footer_copyright;

/* ── Scroll Reveal (Intersection Observer) ── */
function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.1 + 's';
    observer.observe(el);
  });
}

// Delay reveal init to ensure DOM is fully rendered
setTimeout(initReveal, 100);

/* ── Smooth nav scroll offset ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) + 16;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});
