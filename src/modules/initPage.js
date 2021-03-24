export default function initialPagePrint() {
    const content = document.querySelector('.js-content');
     content.innerHTML = `
        <header class="c-header l-flex l-jc-sa">
            <h1 class="c-title">Soundin</h1>
            <nav class="c-nav l-flex l-ai-center">
                <ul class="c-menu l-flex">
                    <button class="c-menu__item c-menu__item--active js-home">Home</button>
                    <button class="c-menu__item js-store">Store</button>
                    <button class="c-menu__item js-contact">Contact</button>
                </ul>
            </nav>
        </header>
        <main class="c-main js-main"></main>
        <footer class="c-footer">
            <p class="c-footer__copyright">Made with ❤️ by <a href="https://github.com/DawidBal" target="_blank" class="c-footer__link">Dave</a></p>
        </footer>
`;
}