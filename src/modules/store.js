export default function storePage() {
    const pageContent = `
    <div class="c-wrapper fadeInAnim l-flex">
        <div class="c-page-title">
            <h2 class="c-phrase--big c-phrase--red">Store</h2>
            <p class="c-phrase">Choose what you need</p>
        </div>
        <div class="c-store l-flex">
            <div class="c-products l-grid">
                <div class="c-product">
                    <img src="" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Ebiwone A56</h3>
                        <p class="c-product__desc">Acoustic Guitar</p>
                        <p class="c-product__price">$67.99</p>
                        <p class="c-product_availability c-product_availability--available">Available</p>
                    </div>
                </div>
                 <div class="c-product">
                    <img src="" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Soundin - Greatest hits</h3>
                        <p class="c-product__desc">Greatest hits of the least known band in the world</p>
                        <p class="c-product__price">$19.99</p>
                        <p class="c-product_availability c-product_availability--unavailable">Unavailable</p>
                    </div>
                </div>
                 <div class="c-product">
                    <img src="" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Lesson with Mike</h3>
                        <p class="c-product__desc">Online lesson with our guitar teacher - Mike</p>
                        <p class="c-product__price">$9.99/hr</p>
                        <p class="c-product_availability c-product_availability--available">Available</p>
                    </div>
                </div>
                 <div class="c-product">
                    <img src="" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Roulant GA-0X</h3>
                        <p class="c-product__desc">Top Selling Electronic Drums</p>
                        <p class="c-product__price">$999.99</p>
                        <p class="c-product_availability c-product_availability--available">Available</p>
                    </div>
                </div>
                 <div class="c-product">
                    <img src="" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">5m Jack 3.5mm cable</h3>
                        <p class="c-product__desc">Casual Jack cable</p>
                        <p class="c-product__price">$2.99</p>
                        <p class="c-product_availability c-product_availability--unavailable">Unavailable</p>
                    </div>
                </div>
                 <div class="c-product">
                    <img src="" alt="" class="c-product__image">
                    <div class="c-product__info">
                        <h3 class="c-product__title">Sharihansen W9000</h3>
                        <p class="c-product__desc">High quality headphones</p>
                        <p class="c-product__price">$69.99</p>
                        <p class="c-product_availability c-product_availability--available">Available</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    const content = document.querySelector('.js-main');
    content.innerHTML = pageContent;
}