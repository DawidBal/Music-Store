export default function storePage() {
    const pageContent = `
    <div class="c-wrapper fadeInAnim l-flex">
        <div class="c-page-title">
            <h2 class="c-phrase--big c-phrase--red">Store</h2>
            <p class="c-phrase">Choose what you need</p>
        </div>
        <div class="c-store l-grid">
                <div class="c-product l-grid">
                    <img src="https://cdn.pixabay.com/photo/2010/12/13/10/01/guitar-2119_960_720.jpg" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Ebiwone A56</h3>
                        <p class="c-product__desc">Acoustic Guitar</p>
                        <p class="c-product__price">$67.99</p>
                        <p class="c-product__availability c-product__availability--available">Available</p>
                    </div>
                </div>
                 <div class="c-product l-grid">
                    <img src="https://cdn.pixabay.com/photo/2016/09/04/23/31/music-1645561_960_720.jpg" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Soundin - Greatest hits</h3>
                        <p class="c-product__desc">Greatest hits of the least known band in the world</p>
                        <p class="c-product__price">$19.99</p>
                        <p class="c-product__availability c-product__availability--unavailable">Unavailable</p>
                    </div>
                </div>
                 <div class="c-product l-grid">
                    <img src="https://cdn.pixabay.com/photo/2012/02/22/20/09/acoustic-guitar-15598_960_720.jpg" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Lesson with Kate</h3>
                        <p class="c-product__desc">Online lesson with our guitar teacher - Kate</p>
                        <p class="c-product__price">$9.99/hr</p>
                        <p class="c-product__availability c-product__availability--available">Available</p>
                    </div>
                </div>
                 <div class="c-product l-grid">
                    <img src="https://cdn.pixabay.com/photo/2018/01/26/18/17/drums-3109364_960_720.jpg" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Yomaha GA-0X</h3>
                        <p class="c-product__desc">Top Selling Drums</p>
                        <p class="c-product__price">$999.99</p>
                        <p class="c-product__availability c-product__availability--available">Available</p>
                    </div>
                </div>
                 <div class="c-product l-grid">
                    <img src="https://cdn.pixabay.com/photo/2015/03/13/20/42/plug-672231_960_720.jpg" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">5m Jack 3.5mm cable</h3>
                        <p class="c-product__desc">Casual Jack cable</p>
                        <p class="c-product__price">$2.99</p>
                        <p class="c-product__availability c-product__availability--unavailable">Unavailable</p>
                    </div>
                </div>
                 <div class="c-product l-grid">
                    <img src="https://cdn.pixabay.com/photo/2016/03/01/19/09/headphones-1230987_960_720.jpg" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Sharihansen W9000</h3>
                        <p class="c-product__desc">High quality headphones</p>
                        <p class="c-product__price">$69.99</p>
                        <p class="c-product__availability c-product__availability--available">Available</p>
                    </div>
                </div>
            </div>
    </div>
    `;
    const content = document.querySelector('.js-main');
    content.innerHTML = pageContent;
}