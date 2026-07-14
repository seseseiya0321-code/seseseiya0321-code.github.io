const menuButton = document.querySelector('.menu-button');
const globalNav = document.querySelector('.global-nav');
if (menuButton && globalNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  globalNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      globalNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}
document.querySelectorAll('.line-qr-img').forEach((image) => {
  image.addEventListener('error', () => {
    image.closest('.qr-frame')?.classList.add('is-missing');
  });
});
