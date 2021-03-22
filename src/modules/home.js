export default function homePage() {
  const pageContent = 
    `
        <div class="c-wrapper c-home">
            <span class="c-phrase--big c-phrase--red">Welcome</span>
            <span class="c-phrase">to <span class="c-phrase--red">Soundin</span> the biggest</span>
            <span class="c-phrase"> music store on the web</span>
        </div>
    `;

  const content = document.querySelector('.js-main');
  content.innerHTML = pageContent;
}
