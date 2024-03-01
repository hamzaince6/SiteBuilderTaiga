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



