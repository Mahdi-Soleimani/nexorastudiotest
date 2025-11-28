function setActiveLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
}

function setupROI(formSelector, resultSelector) {
  const form = document.querySelector(formSelector);
  const result = document.querySelector(resultSelector);
  if (!form || !result) return;

  form.addEventListener('input', () => {
    const currentCost = Number(form.querySelector('[name="currentCost"]').value || 0);
    const teamSize = Number(form.querySelector('[name="teamSize"]').value || 0);
    const automationPercent = Number(form.querySelector('[name="automationPercent"]').value || 0);
    const saved = Math.max(0, Math.round(currentCost * (automationPercent / 100) + teamSize * 150));
    const paybackWeeks = saved > 0 ? Math.max(2, Math.round((currentCost * 0.4) / (saved / 4))) : 0;
    result.textContent = saved ? `صرفه‌جویی تخمینی ماهانه: ${saved.toLocaleString('fa-IR')} دلار | بازگشت سرمایه: ${paybackWeeks} هفته` : 'اعداد را وارد کنید تا ROI را ببینید';
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-category]');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      projects.forEach(card => {
        card.style.display = category === 'all' || card.dataset.category === category ? 'grid' : 'none';
      });
    });
  });
}

function setupChatbot() {
  const toggle = document.querySelector('.chat-toggle');
  const windowEl = document.querySelector('.chat-window');
  if (!toggle || !windowEl) return;

  toggle.addEventListener('click', () => {
    windowEl.style.display = windowEl.style.display === 'flex' ? 'none' : 'flex';
  });

  const buttons = windowEl.querySelectorAll('[data-recommend]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const industry = btn.dataset.recommend;
      const messageList = windowEl.querySelector('.messages');
      const response = document.createElement('div');
      response.className = 'message';
      response.innerHTML = `<div class="meta">نمایش نمونه مرتبط با ${industry}</div><div>پیشنهاد: ایجنت پاسخگو + اتوماسیون ${industry} + داشبورد KPI.</div>`;
      messageList.appendChild(response);
    });
  });
}

function setupNewsletter() {
  const form = document.querySelector('#newsletter-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelector('button').textContent = 'عضو شدید!';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setActiveLink();
  setupROI('#roi-form', '#roi-result');
  setupROI('#roi-form-compact', '#roi-result-compact');
  setupFilters();
  setupChatbot();
  setupNewsletter();
});
