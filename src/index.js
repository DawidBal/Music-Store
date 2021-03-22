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