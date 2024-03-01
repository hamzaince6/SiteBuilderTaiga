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




