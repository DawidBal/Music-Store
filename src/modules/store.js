export default function storePage() {
    const pageContent = `
                    <span class="c-phrase--big c-phrase--red">Store</span>
    `;
    const content = document.querySelector('.js-main');
    content.innerHTML = pageContent;
}