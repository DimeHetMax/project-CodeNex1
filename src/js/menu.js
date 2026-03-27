const openMenuBtn = document.querySelector('.header-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const menu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll(
  '.mobile-menu .menu-nav-link, .mobile-menu .menu-order-link'
);
const handleOpenMenuBtn = () => {
  menu.classList.add('is-open');
  openMenuBtn.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
};
const handleCloseMenuBtn = () => {
  menu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};
openMenuBtn.addEventListener('click', handleOpenMenuBtn);
closeMenuBtn.addEventListener('click', handleCloseMenuBtn);

menuLinks.forEach(link => {
  link.addEventListener('click', handleCloseMenuBtn);
});
