// Menu script
const menuToggler = document.querySelector(".menu-toggler");
const navMenu = document.querySelector(".navbar-menu");
const darkenElement = document.querySelector(".darken");
const navLinks = document.querySelectorAll(".navbar-menu a");

menuToggler.addEventListener("click", () => {
  if (menuToggler.classList.contains("active")) {
    menuToggler.classList.remove("active");
    navMenu.classList.remove("active");
    darkenElement.style.zIndex = "-999";
    darkenElement.style.opacity = "0";
  } else {
    menuToggler.classList.add("active");
    navMenu.classList.add("active");
    darkenElement.style.zIndex = "2";
    darkenElement.style.opacity = "0.5";
  }
});

window.onscroll = () => { 
    const myNav = document.querySelector("nav");

    if (window.scrollY > 50) {
        myNav.classList.add("navbar-scrolled");
        myNav.classList.remove("navbar-top");
    } else {
        myNav.classList.remove("navbar-scrolled");
        myNav.classList.add("navbar-top");
        sliders.forEach((slider, i) => {
            slider.classList.contains("active2") ? slider.classList.remove("active2", i == this.id)
                                                 : slider.classList.toggle("active2", i == this.id);
        });
    }
};


function myhref(web) {
    window.open('https://www.google.com/maps/dir//Lud%C5%BAmierska+25A+34-400+Nowy+Targ/@49.4728089,20.0094221,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x4715e4fc2204c859:0x99fb257976a16172', '_blank');
}

function call() {
    window.location = "tel:+48668347263";
}

const sliders = document.querySelectorAll(".offer-slider");
const sliderButtons = document.querySelectorAll(".offer-slider-disable");
const enablers = document.querySelectorAll(".offer-slider-enabler");
const navToggler = document.querySelector(".menu-toggler");
 
enablers.forEach(enabler => {enabler.addEventListener('click', showHide, false);});
function showHide(elem) {
    sliders.forEach((slider, i) => {
        slider.classList.contains("active2") ? slider.classList.remove("active2", i == this.id)
                                             : slider.classList.toggle("active2", i == this.id);
        menuToggler.classList.remove("active");
        navMenu.classList.remove("active");
        document.querySelector("html").style.overflow = "hidden";
    });
 
    sliderButtons.forEach((button, i) => {
        button.classList.contains("button-active") ? button.classList.remove("button-active", i == this.id)
                                                   : button.classList.toggle("button-active", i == this.id);
                                              
        if(!button.classList.contains("button-active") && i == this.id) document.querySelector("html").style.overflow = "scroll";
    });
}

// Footer animation
function animateSectionsOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
  
        section.style.opacity = 1;
        section.classList.add('animate__animated', 'animate__fadeIn');
  
        observer.unobserve(section);
      }
    });
  }
  
  const sections = document.querySelectorAll('.triple > div, .fb-div');
  const observerOptions = {
    threshold: 0.2
  };
  const sectionObserver = new IntersectionObserver(animateSectionsOnScroll, observerOptions);
  
  sections.forEach(section => {
    section.style.opacity = 0;
    sectionObserver.observe(section);
  });