/* --------------------------------------------------------------------------- */
/* Remove Preload class from Body on page load */
/* --------------------------------------------------------------------------- */

window.addEventListener('load', ()=> {
   document.querySelector('body').classList.remove('preload');
});

/* --------------------------------------------------------------------------- */
/* Add/Remove Overflow to(or from) Body */
/* --------------------------------------------------------------------------- */

const bodyOverflowHidden = () => {
   document.querySelector('body').classList.add('body__overflow-hidden');
}

const bodyOverflowVisible = () => {
   document.querySelector('body').classList.remove('body__overflow-hidden');
}

/* --------------------------------------------------------------------------- */
/* Mobile Menu */
/* --------------------------------------------------------------------------- */

const btnMenu = document.querySelector('#btn-menu');
const btnOpenMenu = document.querySelector('#btn-open-menu');
const btnCloseMenu = document.querySelector('#btn-close-menu');
const mainNav = document.querySelector('#main-nav-list');

/* Open Menu Function */
const openMenu = () => {
   mainNav.setAttribute('data-mobile-menu-visible', true);
   btnCloseMenu.style.display = 'block';
   btnOpenMenu.style.display = 'none';

   bodyOverflowHidden();
}

/* Close Menu Function */
const closeMenu = () => {
   mainNav.setAttribute('data-mobile-menu-visible', false);
   btnCloseMenu.style.display = 'none';
   btnOpenMenu.style.display = 'block';

   bodyOverflowVisible();
}

btnMenu.addEventListener('click', e => {

   const visibility = mainNav.getAttribute('data-mobile-menu-visible');

   if(visibility === 'false') {

      openMenu();

   } else {

      closeMenu();

   }

});