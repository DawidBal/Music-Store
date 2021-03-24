export default function aboutPage() {
    const pageContent = `
    <div class="c-wrapper fadeInAnim l-flex">
        <div class="c-page-title">
            <h2 class="c-phrase--big c-phrase--red">Contact</h2>
            <p class="c-phrase">Get in touch with us</p>
        </div>
        <div class="c-contact l-flex">
            <div class="c-contact__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6433538.698068277!2d-0.7217114336302766!3d-76.46260046668044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAntarktyka!5e0!3m2!1spl!2spl!4v1616605833468!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="c-contact__info">
                <div class="c-contact__location l-flex l-ai-bline"> 
                    <span class="c-icon fas fa-map-marker-alt"></span>
                    <p>Antarctica</p>
                </div>
                <div class="c-contact__phone l-flex l-ai-bline"> 
                    <span class="c-icon fas fa-phone-alt"></span>
                    <p>+672-111-111-1111</p>
                </div>
                <div class="c-contact__mail l-flex l-ai-bline"> 
                    <span class="c-icon far fa-envelope"></span>
                    <p>contact@soundin.com</p>
                </div>
            </div>

        </div>
    </div>
    `;
    const content = document.querySelector('.js-main');
    content.innerHTML = pageContent;
}