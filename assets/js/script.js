/* ------------------ Toggle icon navbar----------------*/
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
   sections.forEach(sec =>{
        let top =windows.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id =sec.getAttribute('id');
        
        if(top>=offset && top<offset+height){
            navlink.foreach(link=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id+']').classList.add('active');
            });
        };
    });

/* ------------------ Sticky navbar----------------*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY >100);

/* ------------------ remove Toggle icon and  navbar when click navbar link(scroll)----------------*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};
/* ------------------ Scroll reveal----------------*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });

ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box, .contact form, .whatsapp', { origin:'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });


ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

/* ------------------ typed js---------------*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Backend Developer','ReactJs Developer','','Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 95,
    backDelay: 950,
    loop: true
})