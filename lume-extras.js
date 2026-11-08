/* Lume — melhorias progressivas, sem alterar a lógica original do carrinho. */
(() => {
  'use strict';
  const key = 'lume-tema-v1';
  const allowed = ['light', 'dark', 'auto'];
  const getPreference = () => {
    try { const saved = localStorage.getItem(key); return allowed.includes(saved) ? saved : 'light'; }
    catch { return 'light'; }
  };
  const setPreference = (choice) => {
    const selected = allowed.includes(choice) ? choice : 'light';
    try { localStorage.setItem(key, selected); } catch {}
    applyTheme(selected);
  };
  const applyTheme = (choice) => {
    const isDark = choice === 'dark' || (choice === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
      button.title = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';
      button.textContent = isDark ? '☀' : '☾';
    });
    document.querySelectorAll('[data-theme-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === choice));
    });
  };

  function setup() {
    const header = document.querySelector('.header-actions');
    if (header && !header.querySelector('[data-theme-toggle]')) {
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'theme-toggle';
      toggle.dataset.themeToggle = '';
      header.insertBefore(toggle, header.firstChild);
      toggle.addEventListener('click', () => setPreference(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
    }

    if (location.pathname.endsWith('/configuracoes.html')) {
      const host = document.querySelector('.account-details') || document.querySelector('main');
      if (host && !document.querySelector('.lume-theme-settings')) {
        const section = document.createElement('section');
        section.className = 'lume-theme-settings';
        section.setAttribute('aria-labelledby', 'lume-tema-titulo');
        section.innerHTML = '<h2 id="lume-tema-titulo">Aparência do Lume</h2><p>Escolha como prefere ler e navegar pelo site.</p><div class="lume-theme-options" role="group" aria-label="Tema do site"><button type="button" data-theme-choice="light">Claro</button><button type="button" data-theme-choice="dark">Escuro</button><button type="button" data-theme-choice="auto">Automático</button></div>';
        host.insertBefore(section, host.firstChild);
        section.addEventListener('click', event => {
          const selected = event.target.closest('[data-theme-choice]');
          if (selected) setPreference(selected.dataset.themeChoice);
        });
      }
    }
    applyTheme(getPreference());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
  if (window.matchMedia) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    if (media.addEventListener) media.addEventListener('change', () => applyTheme(getPreference()));
  }
})();
