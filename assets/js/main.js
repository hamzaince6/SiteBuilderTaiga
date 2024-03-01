/////////////////////////////////////////////// Section Button Start ///////////////////////////////////////////////
var currentSection = 1;
var totalSections = 5;

document.getElementById("next").addEventListener("click", function() {
    if (currentSection < totalSections) {
        document.getElementById("section" + currentSection).classList.remove("active");
        currentSection++;
        document.getElementById("section" + currentSection).classList.add("active");
        document.getElementById("prev").disabled = false;

        // Son bölüme ulaşıldığında, Next butonunu gizle
        if (currentSection === totalSections) {
            document.getElementById("next").style.display = "none";
        }
    }
});

document.getElementById("prev").addEventListener("click", function() {
    if (currentSection > 1) {
        document.getElementById("section" + currentSection).classList.remove("active");
        currentSection--;
        document.getElementById("section" + currentSection).classList.add("active");
        document.getElementById("next").style.display = "block"; // Previous butona basıldığında next butonunu tekrar göster
        if (currentSection === 1) {
            document.getElementById("prev").disabled = true;
        }
    }
});
/////////////////////////////////////////////// Section Button End ///////////////////////////////////////////////

/////////////////////////////////////////////// Progress Bar Start ///////////////////////////////////////////////
const steps = document.querySelectorAll('.step');
const statusBar = document.querySelector('.status-bar');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentStep = 1;

function addAndRemoveActiveClass() {
    steps.forEach((step, index) => {
        if(index + 1 <= currentStep) step.classList.add('active');
        else step.classList.remove('active')
    })
}

function updateBtn() {
    if(currentStep === 1) prev.disabled = true;
    if(currentStep === steps.length) next.disabled = true;
    if(currentStep > 1 && currentStep < steps.length) {
        prev.disabled = false;
        next.disabled = false;
    }
}

function updateStatusBar() {
    statusBar.style.width = `${(currentStep - 1) / (steps.length - 1) * 100}%`;
}

function init() {
    addAndRemoveActiveClass();
    updateBtn();
    updateStatusBar();
}

init();

prevBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(currentStep > 1) currentStep--;
    updateBtn();
    addAndRemoveActiveClass();
    updateStatusBar()
})

nextBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(currentStep < steps.length) currentStep++;
    updateBtn();
    addAndRemoveActiveClass();
    updateStatusBar()
})
/////////////////////////////////////////////// Progress Bar End ///////////////////////////////////////////////
//////////////////////////////// About Section Start ////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    var cardElements = document.querySelectorAll(".card-select");

    cardElements.forEach(function(card) {
        card.addEventListener("click", function(event) {
            // Diğer kartlardan "clicked" sınıfını kaldır
            cardElements.forEach(function(otherCard) {
                if (otherCard !== card && otherCard.classList.contains("clicked")) {
                    otherCard.classList.remove("clicked");
                }
            });

            // Tıklanan kartın "clicked" sınıfını kontrol et ve ekleyin veya kaldırın
            if (!this.classList.contains("clicked")) {
                this.classList.add("clicked");
            }
        });
    });
});
function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){
        var preview = document.getElementById('previewImage');
        if (input.files && input.files[0]) {
            preview.style.backgroundImage = "url('" + reader.result + "')";
            preview.style.display = 'block'; // Görüntü varsa görünür yap
        } else {
            preview.style.backgroundImage = "none"; // Görüntü yoksa arka plan resmini temizle
            preview.style.display = 'none'; // Görüntü yoksa gizle
        }
    };

    if (input.files && input.files[0]) {
        reader.readAsDataURL(input.files[0]);
    }
}
function previewImageSlider(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){
        var previewImagesContainer = document.getElementById('previewImagesSlider');
        var files = input.files;

        for (var i = 0; i < files.length; i++) {
            var previewImage = document.createElement('div');
            previewImage.className = 'preview-image';
            previewImage.style.backgroundImage = "url('" + reader.result + "')";
            previewImagesContainer.appendChild(previewImage);
        }
    };

    if (input.files && input.files[0]) {
        reader.readAsDataURL(input.files[0]);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            var cardId = this.getAttribute("data-card-id");
            var cardTitle = this.querySelector(".card-title").textContent;
            var cardText = this.querySelector(".card-text").textContent;

            var popup = document.getElementById("popup-" + cardId);
            var popupTitle = popup.querySelector(".popup-title");
            var popupText = popup.querySelector(".popup-text");

            popupTitle.textContent = cardTitle;
            popupText.textContent = cardText;

            popup.style.display = "block";
        });
    });

    // Popup kapatma işlevi
    var closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            this.parentElement.parentElement.style.display = "none";
        });
    });
});
//////////////////////////////// About Section End ////////////////////////////////

//////////////////////////////// File Upload Section Start ////////////////////////////////
var uploadedFiles = [];
window.onload = function() {
    var storedFiles = localStorage.getItem('uploadedFiles');
    if (storedFiles) {
        uploadedFiles = JSON.parse(storedFiles);
        showStoredFiles();
    }
};
function showFileInfo() {
    var fileInput = document.getElementById('Article');
    var files = fileInput.files;

    var hasPDF = false; // PDF dosyası kontrolü için bir bayrak

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var fileType = file.type.split('/')[1]; // Dosya uzantısını al

        // Sadece PDF, TXT ve DOCX dosyalarını kabul et
        if (fileType === 'pdf' || fileType === 'txt' || fileType === 'docx') {
            hasPDF = true; // PDF dosyası varsa bayrağı true olarak ayarla

            uploadedFiles.push({
                name: file.name,
                type: file.type,
                size: file.size
            });
        } else {
            alert('Yalnızca PDF, TXT ve DOCX dosyaları yükleyebilirsiniz.');
            return; // Hatalı dosya tespit edildiğinde fonksiyonu sonlandır
        }
    }

    // PDF dosyası varsa silme butonunu göster
    if (hasPDF) {
        document.getElementById('deleteButton').style.display = 'flex';
        document.getElementById('deleteButton').style.justifyContent = 'space-between';
    }


    localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
    showStoredFiles(); // Yeni dosyaları göster
}
function removeFile(fileName) {
    // Dosyayı listeden ve uploadedFiles dizisinden kaldır
    uploadedFiles = uploadedFiles.filter(function(file) {
        return file.name !== fileName;
    });

    localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
    showStoredFiles();
}
function deleteFiles() {
    // Her bir dosyayı tek tek kaldır
    for (var i = 0; i < uploadedFiles.length; i++) {
        removeFile(uploadedFiles[i].name);
    }

    // uploadedFiles dizisini temizle
    uploadedFiles = [];
    localStorage.removeItem('uploadedFiles');
    // Dosyaları gösteren bölümü temizle
    var fileListContainer = document.getElementById('fileList');
    fileListContainer.innerHTML = '';
    // Silme butonunu gizle
    document.getElementById('deleteButton').style.display = 'none';
}
function showStoredFiles() {
    var fileListContainer = document.getElementById('fileList');
    fileListContainer.innerHTML = '';
    for (var i = 0; i < uploadedFiles.length; i++) {
        var fileInfo = document.createElement('div');
        var fileName = uploadedFiles[i].name;
        fileInfo.innerHTML = '<div style="display: flex; justify-content: space-between; place-content: space-between; margin-top: 14px;"><p style="margin-right: 10px;">Dosya Adı: ' + fileName + '</p>' +
            '<button class="bin-button" onclick="removeFile(\'' + fileName + '\')">' +
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 7" class="bin-top">' +
            '<line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>' +
            '<line stroke-width="3" stroke="white" y2="1.5" x2="26.0357" y1="1.5" x1="12"></line>' +
            '</svg>' +
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 39" class="bin-bottom">' +
            '<mask fill="white" id="path-1-inside-1_8_19">' +
            '<path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>' +
            '</mask>' +
            '<path mask="url(#path-1-inside-1_8_19)" fill="white" d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"></path>' +
            '<path stroke-width="4" stroke="white" d="M12 6L12 29"></path>' +
            '<path stroke-width="4" stroke="white" d="M21 6V29"></path>' +
            '</svg>' +
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 89 80" class="garbage">' +
            '<path fill="white" d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"></path>' +
            '</svg>' +
            '</button></div>';
        fileListContainer.appendChild(fileInfo);
    }
}
//////////////////////////////// File Upload Section End ////////////////////////////////

//////////////////////////////// Personel Data Section Start ////////////////////////////////
const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

const inputElement = document.getElementById('phoneNumber');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);

document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.querySelector(".social-button-added");
    var popup = document.getElementById("popup");
    var closeButton = document.querySelector(".close");

    addButton.addEventListener("click", function(event) {
        // Butonun varsayılan davranışını engelle
        event.preventDefault();

        // Popup'ı göster
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        // Popup'ı gizle
        popup.style.display = "none";
    });

    // Popup dışındaki bir yere tıklandığında popup'ı kapat
    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
//////////////////////////////// Personel Data Section End ////////////////////////////////

//////////////////////////////// Selected Thema Section Start ////////////////////////////////
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

document.addEventListener('DOMContentLoaded', function () {
    var swiperSlides = document.querySelectorAll('.swiper-slide');
    var previewButton = document.getElementById('previewThema');

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
                // Butonu gizle
                previewButton.style.display = 'none';
            } else {
                // Başka bir öğe seçiliyse, o öğenin seçimini kaldır ve bu öğeyi seç
                swiperSlides.forEach(function (otherSlide) {
                    otherSlide.querySelector('.selected').style.display = 'none';
                });
                selectedSlide = slide;
                selectedDiv.style.display = 'flex';
                // Butonu göster
                previewButton.style.display = 'block';
            }
        });
    });
});

//////////////////////////////// Selected Thema Section End ////////////////////////////////


