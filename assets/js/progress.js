function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar2');
    const progressContainer = document.querySelector('.progress2');

    let percentage = 0;
    let color = '';

    // Eğer dosya yolu "fileupload.html" ise yüzde 40'e, diğer durumlarda yüzde 20'ye ayarla
    if (window.location.href.includes('fileupload.html')) {
        percentage = 40;
        color = '#f1c40f'; // Sarı renk
    }

    else if (window.location.href.includes('personeldata.html')){
        percentage = 60;
        color = 'red';
    }

    else {
        percentage = 20;
        color = '#3498db'; // Mavi renk
    }


    // İlerlemenin sonunda metin kutusuna istediğiniz metni ekleyin
    if (percentage === 100) {
        progressText.innerText = '1. Adım tamamlandı!';
    }

    progressBar.style.width = percentage + '%';
    progressBar.style.backgroundColor = color;
});


