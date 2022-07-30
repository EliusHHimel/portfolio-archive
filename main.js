const aboutModal = document.getElementById('about');
const skillsModal = document.getElementById('skills');
const home = document.getElementById('home');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const nav = document.getElementById('nav');


const projectsBtn = document.getElementById('projects-btn');
const contactBtn = document.getElementById('contact-btn');
const aboutBtn = document.getElementById('about-btn');
const skillsBtn = document.getElementById('skills-btn');
const resumeBtn = document.getElementById('resume-btn');
const navBtn = document.getElementById('nav-btn');

const aboutSpan = document.getElementsByClassName('close');


aboutBtn.onclick = function () {
    aboutModal.style.display = 'block';
    skillsModal.style.display = 'none';
    home.style.display = 'none';
    contact.style.display = 'none';
    projects.style.display = 'none';
}

skillsBtn.onclick = function () {
    skillsModal.style.display = 'block';
    aboutModal.style.display = 'none';
    home.style.display = 'none';
    contact.style.display = 'none';
    projects.style.display = 'none';
}
projectsBtn.onclick = function () {
    projects.style.display = 'block';
    aboutModal.style.display = 'none';
    skillsModal.style.display = 'none';
    home.style.display = 'none';
    contact.style.display = 'none';
}
contactBtn.onclick = function () {
    contact.style.display = 'block';
    aboutModal.style.display = 'none';
    skillsModal.style.display = 'none';
    home.style.display = 'none';
    projects.style.display = 'none';
}
navBtn.onclick = function () {
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
    }
    else {
        nav.style.display = 'none';
    }
}

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const tempParams = {
        "sender_name": name,
        "user_email": email,
        "message": message
    };
    emailjs.send("service_yi98w5j", "template_6wypdd7", tempParams)
        .then(res => {
            document.getElementById('name').value;
            document.getElementById('email').value;
            document.getElementById('message').value;
            if (res.status == 200) {
                alert('Message sent successfully');
            }
        })
}


// aboutSpan.onclick = function () {
//     aboutModal.style.display = 'none';
//     skillsModal.style.display = 'none';
// }

// window.onclick = function (event) {
//     if (event.target == aboutModal || event.target == skillsModal || event.target == nav) {
//         aboutModal.style.display = 'none';
//         skillsModal.style.display = 'none';
//         home.style.display = 'block';
//         contact.style.display = 'none';
//         projects.style.display = 'none';
//     }
// }