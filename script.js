// Ano dinâmico no footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu mobile acessível (BEM)
const btn = document.querySelector('.site-header__toggle');
const nav = document.querySelector('.primary-nav');

btn?.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('primary-nav--open');
});

// Estilo mínimo para abrir/fechar a nav no mobile via modificador BEM
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 639px){
    .primary-nav{display:none}
    .primary-nav.primary-nav--open{ display:block; position:absolute; left:0; right:0; top:64px; background:#0f1016; border-top:1px solid #20212a; }
    .primary-nav__list{ display:flex; flex-direction:column; padding: .8rem; }
    .primary-nav__link{ width:100% }
  }
`;
document.head.appendChild(style);