var modal = document.getElementById("modal");
var about = document.getElementById("about");
var home = document.getElementById("home");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
var homeLink = document.getElementById("home-link");
var aboutLink = document.getElementById("about-link");
var portfolioLink = document.getElementById("portfolio-link");
var contactLink = document.getElementById("contact-link");
var nav = document.getElementById("nav");
var animElements = document.querySelectorAll(".anim");
var animPortfolio = document.querySelectorAll(".portfolio-item");
var portfolioBottom = document.getElementById("portfolioBottom");
var aboutVideo = document.getElementById("aboutVideo");

var navBottom = nav.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset < about.offsetTop) {
    removeLinkActive();
    homeLink.classList.add("active");
  } else if (window.pageYOffset < portfolio.offsetTop) {
    removeLinkActive();
    aboutLink.classList.add("active");
  } else if (window.pageYOffset < contact.offsetTop) {
    removeLinkActive();
    portfolioLink.classList.add("active");
  } else if (window.pageYOffset >= contact.offsetTop) {
    removeLinkActive();
    contactLink.classList.add("active");
  }
  checkNavPos();
  checkAnimElementsPos();
};

//navbar animation and position fixed
const checkNavPos = () => {
  if (window.pageYOffset >= navBottom) {
    nav.classList.add("fixed");
    nav.classList.add("nav-anim");
  }
  if (window.pageYOffset < navBottom) {
    nav.classList.remove("fixed");
    nav.classList.remove("nav-anim");
  }
};

//remove nav links highlight
const removeLinkActive = () => {
  homeLink.classList.remove("active");
  aboutLink.classList.remove("active");
  portfolioLink.classList.remove("active");
  contactLink.classList.remove("active");
};

//animations
const startAnimations = (element) => {
  const animationData = animElements[element].getAttribute("data-animation");
  animElements[element].style.opacity = 1;
  animElements[element].classList.add("animate__" + animationData);
};

const checkAnimElementsPos = () => {
  for (let index = 0; index < animElements.length; index++) {
    if (
      animElements[index].offsetTop - window.scrollY <=
      window.innerHeight / 2
    ) {
      startAnimations(index);
      startAboutAnim();
    }
  }
  if (portfolioBottom.offsetTop - window.scrollY <= window.innerHeight / 2) {
    for (let index = 0; index < animPortfolio.length; index++) {
      animPortfolio[index].classList.add("animate__slideInUp");
      animPortfolio[index].style.opacity = 1;
    }
  }
};

//about video
const startAboutAnim = () => {
  if (aboutVideo.offsetTop - window.scrollY <= window.innerHeight / 2) {
    setTimeout(() => {
      aboutVideo.play();
    }, 1400);
    setTimeout(() => {
      aboutVideo.pause();
    }, 3900);
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");
    setTimeout(() => {
      video1.style.opacity = 1;
    }, 3400);
    setTimeout(() => {
      video2.style.opacity = 1;
    }, 3600);
  }
};
