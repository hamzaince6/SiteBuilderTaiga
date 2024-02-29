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

document.addEventListener("DOMContentLoaded", function() {
    var section = document.getElementById('section4');
    var button = document.getElementById('previewThema');

    button.style.display = 'none'; // Butonu başlangıçta gizle

    function toggleButton() {
        if (window.scrollY >= section.offsetTop) {
            button.style.display = 'none';
        } else {
            button.style.display = 'block';
        }
    }

    window.addEventListener('scroll', toggleButton);
});
