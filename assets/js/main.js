function selectNav() {
  const page = document.body.dataset.page;
  const links = document.querySelectorAll('.nav-links a');
  links.forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}

function setupFAQ() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      const p = item.querySelector('p');
      const isOpen = p.style.display === 'block';
      document.querySelectorAll('.faq-item p').forEach((el) => (el.style.display = 'none'));
      p.style.display = isOpen ? 'none' : 'block';
    });
  });
}

function setupROI() {
  const hoursInput = document.querySelector('#roi-hours');
  const rateInput = document.querySelector('#roi-rate');
  const result = document.querySelector('#roi-result');
  if (!hoursInput || !rateInput || !result) return;
  const compute = () => {
    const hours = Number(hoursInput.value) || 0;
    const rate = Number(rateInput.value) || 0;
    const saved = Math.max(0, hours * 0.65 * rate * 52);
    result.textContent = saved.toLocaleString('fa-IR') + ' تومان در سال';
  };
  hoursInput.addEventListener('input', compute);
  rateInput.addEventListener('input', compute);
  compute();
}

function setupPortfolioFilters() {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      cards.forEach((card) => {
        card.style.display = cat === 'all' || card.dataset.category === cat ? 'block' : 'none';
      });
    });
  });
}

function setupChatWidget() {
  const toggle = document.querySelector('.chat-toggle');
  const panel = document.querySelector('.chat-panel');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', () => {
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
}

function init() {
  selectNav();
  setupFAQ();
  setupROI();
  setupPortfolioFilters();
  setupChatWidget();
}

document.addEventListener('DOMContentLoaded', init);
