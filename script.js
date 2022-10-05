const menuBtn = document.querySelector('.menu-button');
const navlinks = document.querySelector('.nav-links');
const aboutMeBtn = document.querySelector('.about-me');
const resumeBtn = document.querySelector('.resume');
const resourcesBtn = document.querySelector('.resources');
const contactMeBtn = document.querySelector('.contact-me-header');


menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
});
aboutMeBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
});
resumeBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
});
resourcesBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
});
contactMeBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
});

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
})