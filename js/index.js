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
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    checkAnimElementsPos();
  }
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
var aboutAnim = 0;
const startAboutAnim = () => {
  if (
    aboutVideo.offsetTop - window.scrollY <= window.innerHeight / 2 &&
    aboutAnim === 0
  ) {
    setTimeout(() => {
      aboutVideo.play();
    }, 1000);
    aboutAnim = 1;
  }
};

//mobile nav
const navMob = document.getElementById("nav-mob");

const toggleNav = () => {
  navMob.classList.toggle("ham-active");
};

//detect mobile device
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  //remove aniamtions if mobile device detected
  for (let index = 0; index < animElements.length; index++) {
    animElements[index].classList.toggle("anim");
  }
  for (let index = 0; index < animPortfolio.length; index++) {
    animPortfolio[index].style.opacity = 1;
  }
}

//contact form
$("#contact-form").submit(function (e) {
  e.preventDefault();

  var formValue = {
    name: document.getElementById("formName").value,
    mail: document.getElementById("formMail").value,
    message: document.getElementById("formMessage").value,
  };

  $.ajax({
    url: "https://formspree.io/f/xrgrlawl",
    method: "POST",
    data: { formValue },
    dataType: "json",
  }).done(function (response) {
    //$("#success").addClass("expand");
    $("#contact-form")
      .find("input[type=text], input[type=email], textarea")
      .val("");
  });
});
