document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        },
        // Slayt kontrol düğmeleri
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false
    });
});
