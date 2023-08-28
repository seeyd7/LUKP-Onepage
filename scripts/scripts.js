// Menu script
const menuToggler = document.querySelector(".menu-toggler");
const navMenu = document.querySelector(".navbar-menu");
const darkenElement = document.querySelector(".darken");

menuToggler.addEventListener("click", () => {
  if (menuToggler.classList.contains("active")) {
    menuToggler.classList.remove("active");
    navMenu.classList.remove("active");
    darkenElement.style.zIndex = "0";
    darkenElement.style.opacity = "0";
  } else {
    menuToggler.classList.add("active");
    navMenu.classList.add("active");
    darkenElement.style.zIndex = "2";
    darkenElement.style.opacity = "0.5";
  }
});


// Go2Top script
addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if(scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
		go2Top.style.cursor = "pointer";
		console.log(go2Top.style.cursor);
	} else {
		go2Top.style.opacity = 0;
		go2Top.style.cursor = "default";
		console.log(go2Top.style.cursor);
	}
})

go2Top.addEventListener("click", () => {
	if(go2Top.style.opacity != 0) window.scrollTo(0, 0);
})

// Slogan animation
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll .info-box');

  function animateElement(element) {
    const delay = element.getAttribute('data-delay');
    if (delay) {
      element.style.animationDelay = delay;
    }
    element.classList.add('animate__animated', 'animate__fadeInUp');
  }

  function handleScrollAnimations(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        if (!element.classList.contains('animate__animated')) {
          animateElement(element);
        }
        observer.unobserve(element);
      }
    });
  }

  const options = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver(handleScrollAnimations, options);
  animateOnScrollElements.forEach(element => observer.observe(element));
});

// First about container animation
function animateAboutOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const aboutImage = entry.target.querySelector('.about-image');
      const aboutContent = entry.target.querySelector('.about-container-content');

      aboutImage.classList.add('animate__animated', 'animate__fadeInLeft');
      aboutContent.classList.add('animate__animated', 'animate__fadeInRight');

      window.requestAnimationFrame(() => {
        aboutImage.style.opacity = '1';
        aboutContent.style.opacity = '1';
      });

      observer.unobserve(entry.target);
    }
  });
}

const aboutSection = document.querySelector('.about-main-container');
const options = {
  threshold: 0.5
};
const aboutObserver = new IntersectionObserver(animateAboutOnScroll, options);
aboutObserver.observe(aboutSection);

// Second about container animation
function animateAbout2OnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const aboutImage2 = entry.target.querySelector('#about-image2');
      const aboutContent2 = entry.target.querySelector('#about-container-content2');

      aboutContent2.classList.add('animate__animated', 'animate__bounceIn');
      aboutImage2.classList.add('animate__animated', 'animate__bounceIn');

      observer.unobserve(entry.target);
    }
  });
}

const aboutSection2 = document.querySelector('#about-main-container2');
const options2 = {
  threshold: 0.5
};
const aboutObserver2 = new IntersectionObserver(animateAbout2OnScroll, options2);
aboutObserver2.observe(aboutSection2);

// Gallery animation
function animateGalleryOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const gallerySection = entry.target;

      gallerySection.classList.add('animate__animated', 'animate__backInUp');

      observer.unobserve(gallerySection);
    }
  });
}

const gallerySection = document.querySelector('#gallery');
const galleryOptions = {
  threshold: 0.25
};
const galleryObserver = new IntersectionObserver(animateGalleryOnScroll, galleryOptions);
galleryObserver.observe(gallerySection);

// Contact animation

function animateContactOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const contactSection = entry.target;

      contactSection.classList.add('animate__animated', 'animate__bounceInRight');

      observer.unobserve(contactSection);
    }
  });
}
const contactSection = document.querySelector('.contact');
const contactOptions = {
  threshold: 0.5
};
const contactObserver = new IntersectionObserver(animateContactOnScroll, contactOptions);
contactObserver.observe(contactSection);


