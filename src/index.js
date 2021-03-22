import renderInitialPage from './modules/initPage.js';
import renderHomePage from './modules/home.js';
import rederAboutPage from './modules/about.js';
import rederStorePage from './modules/store.js';


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
    rederStorePage();
};

function printAboutPage() {
    content.innerHTML = ``;
    toggleActivePage(this);
    rederAboutPage();
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
const aboutBtn = document.querySelector('.js-about');

homeBtn.addEventListener('click', printHomePage);
storeBtn.addEventListener('click', printStorePage);
aboutBtn.addEventListener('click', printAboutPage);