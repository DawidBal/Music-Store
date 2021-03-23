export default function aboutPage() {
    const pageContent = `
    <div class="c-wrapper">
        <h2 class="c-phrase--big c-phrase--red">Contact</h2>
        <p class="c-phrase">Get in touch with us</p>
        </div>
    `;
    const content = document.querySelector('.js-main');
    content.innerHTML = pageContent;
}