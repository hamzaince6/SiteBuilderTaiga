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




