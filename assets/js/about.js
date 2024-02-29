document.addEventListener("DOMContentLoaded", function() {
    var cardElements = document.querySelectorAll(".card-select");

    cardElements.forEach(function(card) {
        card.addEventListener("click", function() {
            // Tıklanan kartın tüm sınıflarını kontrol et ve "clicked" sınıfını ekleyin veya kaldırın
            if (this.classList.contains("clicked")) {
                this.classList.remove("clicked");
            } else {
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




