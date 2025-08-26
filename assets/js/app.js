const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('right-[-100%]');
    mobileMenu.classList.add('right-0');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('right-0');
    mobileMenu.classList.add('right-[-100%]');
});


const advancedMenu = document.querySelector('.advanced-menu');
const toggleAdvancedMenu = document.querySelector('.toggle-advanced-menu');

toggleAdvancedMenu.addEventListener('click', () => {
    advancedMenu.classList.toggle('hidden');
});