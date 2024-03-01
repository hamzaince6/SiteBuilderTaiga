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
