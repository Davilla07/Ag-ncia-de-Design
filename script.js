// Ano dinâmico no footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu mobile acessível
const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

btn?.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open');
});

// Estilo mínimo para abrir/fechar a nav no mobile via classe .is-open
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 639px){
    .nav{display: none;}
    .nav.is-open{ display: block; position:absolute; left:0; right:0; top:64px; background:#0f1016; border-top:1px solid #20212a; }
    .nav ul{ display:flex; flex-direction:column; padding: .8rem; }
    .nav a{ width:100% }
  }
`;
document.head.appendChild(style);