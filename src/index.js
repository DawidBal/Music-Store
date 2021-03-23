import renderInitialPage from './modules/initPage.js';
import renderHomePage from './modules/home.js';
import renderContactPage from './modules/contact.js';
import renderStorePage from './modules/store.js';

const pageManager = (() => {

    renderInitialPage();
    renderHomePage();

    function printHomePage() {
        content.innerHTML = ``;
        toggleActivePage(this);
        renderHomePage();
    };

    function printStorePage() {
        content.innerHTML = ``;
        toggleActivePage(this);
        renderStorePage();
    };

    function printContactPage() {
        content.innerHTML = ``;
        toggleActivePage(this);
        renderContactPage();
    };

    const toggleActivePage = (menuItem) => {
        const navButtons = document.querySelectorAll('button');
        navButtons.forEach(button => {
            if(menuItem !== button) {
                button.classList.remove('c-menu__item--active');
            } else {
                button.classList.add('c-menu__item--active');
            }
        })
    }

    const content = document.querySelector('.js-main');
    const homeBtn = document.querySelector('.js-home');
    const storeBtn = document.querySelector('.js-store');
    const contactBtn = document.querySelector('.js-contact');

    homeBtn.addEventListener('click', printHomePage);
    storeBtn.addEventListener('click', printStorePage);
    contactBtn.addEventListener('click', printContactPage);
})();

pageManager();