export default function storePage() {
    const pageContent = `
        <h2 class="c-phrase--big c-phrase--red">Store</h2>
    `;
    const content = document.querySelector('.js-main');
    content.innerHTML = pageContent;
}