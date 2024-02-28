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
        fileInfo.innerHTML = '<div style="display: flex;"><p style="margin-right: 10px;">Dosya Adı: ' + fileName + '</p>' +
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

