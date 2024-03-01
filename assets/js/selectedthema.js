document.addEventListener('DOMContentLoaded', function () {
    var totalSlides = document.querySelectorAll('.swiper-slide').length;

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
        loop: true,
        slidesPerView: 3,
        loopedSlides: totalSlides,
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var section = document.getElementById('section4');
    var button = document.getElementById('previewThema');

    button.style.display = 'none';

    function toggleButton() {
        if (window.scrollY >= section.offsetTop) {
            button.style.display = 'none';
        } else {
            button.style.display = 'block';
        }
    }

    window.addEventListener('scroll', toggleButton);
});


document.addEventListener('DOMContentLoaded', function () {

    var swiperSlides = document.querySelectorAll('.swiper-slide');

    swiperSlides.forEach(function (slide) {
        var image = slide.querySelector('img');

        var selectedDiv = slide.querySelector('.selected');
        selectedDiv.style.display = 'none';

        var selectedSlide = null;

        image.addEventListener('click', function () {
            if (selectedSlide === slide) {
                // Seçili öğe zaten bu öğe ise, seçimi kaldır
                selectedDiv.style.display = 'none';
                selectedSlide = null;
            } else {
                // Başka bir öğe seçiliyse, o öğenin seçimini kaldır ve bu öğeyi seç
                swiperSlides.forEach(function (otherSlide) {
                    otherSlide.querySelector('.selected').style.display = 'none';
                });

                selectedSlide = slide;
                selectedDiv.style.display = 'flex';
            }
        });
    });
});




