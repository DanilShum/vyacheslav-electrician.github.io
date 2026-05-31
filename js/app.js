function scrollToContacts() {
  const el = document.getElementById('contacts');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookieBanner').classList.remove('show');
}

function rejectCookies() {
  localStorage.setItem('cookiesAccepted', 'rejected');
  document.getElementById('cookieBanner').classList.remove('show');
}

function acceptPd() {
  localStorage.setItem('pdConsent', 'true');
  document.getElementById('pdModal').classList.remove('show');
  sessionStorage.setItem('pdShown', 'true');
}

function declinePd() {
  document.getElementById('pdModal').classList.remove('show');
  document.getElementById('pdWarning').classList.add('show');
}

function closePdWarning() {
  document.getElementById('pdWarning').classList.remove('show');
  sessionStorage.setItem('pdShown', 'true');
}

function showCookieBanner() {
  const accepted = localStorage.getItem('cookiesAccepted');
  if (!accepted) {
    document.getElementById('cookieBanner').classList.add('show');
  }
}

function showPdModal() {
  const shown = sessionStorage.getItem('pdShown');
  const consented = localStorage.getItem('pdConsent');
  if (!shown && !consented) {
    document.getElementById('pdModal').classList.add('show');
  }
}

function renderAdvantages() {
  const grid = document.getElementById('advantagesGrid');
  grid.innerHTML = advantages.map(item => `
    <div class="advantage-card">
      <div class="advantage-stat">
        <span class="advantage-stat-number">${item.stat}</span>
        <span class="advantage-stat-label">${item.statLabel}</span>
      </div>
      <h3 class="advantage-title">${item.title}</h3>
      <p class="advantage-description">${item.description}</p>
      <div class="advantage-check">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Гарантируем</span>
      </div>
    </div>
  `).join('');
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map(item => `
    <div class="service-card">
      <div class="service-icon">${icons[item.icon]}</div>
      <h3 class="service-title">${item.title}</h3>
      <p class="service-description">${item.description}</p>
    </div>
  `).join('');
}

function renderTeam() {
  const grid = document.getElementById('teamGrid');
  grid.innerHTML = team.map(member => `
    <div class="team-card">
      <div class="team-photo">
        <img src="${member.image}" alt="${member.name}">
      </div>
      <div class="team-info">
        <h3 class="team-name">${member.name}</h3>
        <span class="team-role">${member.role}</span>
        <p class="team-bio">${member.bio}</p>
      </div>
    </div>
  `).join('');
}

function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = portfolio.map(project => `
    <a href="project.html?id=${project.id}" class="portfolio-card">
      <div class="portfolio-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="portfolio-overlay">
          <span class="portfolio-area">${project.area}</span>
          <span class="portfolio-year">${project.year}</span>
        </div>
      </div>
      <div class="portfolio-info">
        <h3 class="portfolio-title">${project.title}</h3>
        <p class="portfolio-description">${project.description}</p>
      </div>
    </a>
  `).join('');
}

function setCopyright() {
  const year = new Date().getFullYear();
  document.getElementById('copyright').textContent = `© ${year} Иванов Вячеслав Валерьевич. Все права защищены.`;
}

function initMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAdvantages();
  renderServices();
  renderPortfolio();
  setCopyright();
  initMenu();
  showCookieBanner();
  showPdModal();

  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView();
  }
});