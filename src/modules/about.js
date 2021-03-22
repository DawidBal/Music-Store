export default function aboutPage() {
    const pageContent = `
                    <h2 class="c-phrase--big c-phrase--red">About us</h2>
    `;
    const content = document.querySelector('.js-main');
    content.innerHTML = pageContent;
}