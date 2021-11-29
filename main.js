const aboutModal = document.getElementById('about');
const skillsModal = document.getElementById('skills');

const aboutBtn = document.getElementById('about-btn');
const skillsBtn = document.getElementById('skills-btn');
const resumeBtn = document.getElementById('resume-btn')

const aboutSpan = document.getElementsByClassName('close');

// resumeBtn.onclick = function () {
//     location.href = 'https://facebook.com'
// }

aboutBtn.onclick = function () {
    aboutModal.style.display = 'block';
    skillsModal.style.display = 'none';
}

skillsBtn.onclick = function () {
    skillsModal.style.display = 'block';
    aboutModal.style.display = 'none';
}

// aboutSpan.onclick = function () {
//     aboutModal.style.display = 'none';
//     skillsModal.style.display = 'none';
// }

window.onclick = function (event) {
    if (event.target == aboutModal || event.target == skillsModal) {
        aboutModal.style.display = 'none';
        skillsModal.style.display = 'none';
    }
}