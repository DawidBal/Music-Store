export default function homePage() {
  const pageContent = 
    `
    <div class="c-wrapper fadeInAnim l-flex">
      <div class="c-page-title">
          <p class="c-phrase--big c-phrase--red">Welcome</p>
          <p class="c-phrase">to <span class="c-phrase--red">Soundin</span> the smallest</p>
          <p class="c-phrase">music store on the web</p>
      </div>
        <div class="c-highlight l-grid">
        <div class="c-highlight__item l-flex">
          <img src="/images/vinyl.jpg" alt="" class="c-highlight__img">
          <div class="c-highlight__text">
              <p class="c-highlight__title">Vinyl & CDs</p>
              <p class="c-highlight__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto doloremque, ipsa unde eaque exercitationem.</p>
          </div>
      </div>
      <div class="c-highlight__item l-flex">
          <img src="/images/guitar.jpg" alt="" class="c-highlight__img">
          <div class="c-highlight__text">
              <p class="c-highlight__title">Online Lessons</p>
              <p class="c-highlight__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum voluptatum tempore ullam exercitationem omnis delectus dignissimos soluta doloribus animi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto doloremque, ipsa unde eaque exercitationem.</p>
          </div>
      </div>
      <div class="c-highlight__item l-flex">
          <img src="/images/piano.jpg" alt="" class="c-highlight__img">
          <div class="c-highlight__text">
              <p class="c-highlight__title">Instruments</p>
              <p class="c-highlight__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum voluptatum tempore ullam exercitationem omnis delectus dignissimos soluta doloribus animi!</p>
          </div>
      </div>
      </div>
      </div>
    `;

  const content = document.querySelector('.js-main');
  content.innerHTML = pageContent;
}
