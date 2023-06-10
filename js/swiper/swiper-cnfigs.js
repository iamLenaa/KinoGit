// slider configs
function sliderConfigs() {
    let swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        speed: 700,
        coverflowEffect: {
            rotate: 7,
            stretch: -10,
            depth: 30,
            modifier: 6,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-unique',
            prevEl: '.swiper-button-prev-unique'
        }
    })
}