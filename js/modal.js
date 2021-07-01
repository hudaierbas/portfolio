var modalData = {
  1: {
    title: "Amazon Clone",
    subtitle: "E-COMMERCE WEB APPLICATION",
    detail:
      "Amazon clone is a e-commerce web application created with React and firebase for database, authentication and hosting.",
    img: {
      1: "./img/11.jpg",
      2: "./img/12.jpg",
      3: "./img/13.jpg",
    },
    linkLive: "https://clone-5ac2a.web.app/",
    linkCode: "https://github.com/hudaierbas/amazon-clone",
  },
  2: {
    title: "BlogNine",
    subtitle: "BLOG",
    detail: "BlogNine is a blog application created with asp.net core.",
    img: {
      1: "./img/21.jpg",
      2: "./img/22.jpg",
      3: "./img/23.jpg",
    },
    linkLive: "",
    linkCode: "https://github.com/hudaierbas/BlogNine",
  },
  3: {
    title: "Ankh UO",
    subtitle: "PRIVATE ULTIMA ONLINE SERVER",
    detail: "Ankh UO is a web application created with React and Nodejs",
    img: {
      1: "./img/31.jpg",
      2: "./img/32.jpg",
      3: "./img/33.jpg",
    },
    linkLive: "https://ankh.gen.tr/",
    linkCode: "",
  },
  4: {
    title: "Whatsapp Clone",
    subtitle: "REALTIME CHAT APPLICATION",
    detail: "MERN stack chat application, pusher used for realtime features.",
    img: {
      1: "./img/42.jpg",
      2: "./img/41.jpg",
      3: "./img/42.jpg",
    },
    linkLive: "https://chat-app-demo-he-v1.netlify.app",
    linkCode: "https://github.com/hudaierbas/chat-app",
  },
};

var modal = document.getElementById("modal");
var modalTitle = document.getElementById("modalTitle");
var modalSubTitle = document.getElementById("modalSubTitle");
var modalDetail = document.getElementById("modalDetail");
var modalLinkLive = document.getElementById("modalLinkLive");
var modalLinkCode = document.getElementById("modalLinkCode");
var modalImg = document.getElementById("modalImg");
var modalCont = document.getElementById("modalCont");

var data;
var imgNo = 1;

modal.onclick = (e) => {
  if (e.target.matches(".modal")) {
    closeModal();
  }
};

const closeModal = () => {
  modal.style.display = "none";
  imgNo = 1;
  modalLinkLive.style.display = "block";
  modalLinkCode.style.display = "block";
};

const openModal = (dataNo) => {
  modal.style.display = "flex";
  modalCont.classList.add("modal-animation");

  data = dataNo;

  modalTitle.innerHTML = modalData[data].title;
  modalSubTitle.innerHTML = modalData[data].subtitle;
  modalDetail.innerHTML = modalData[data].detail;

  modalImg.src = modalData[data].img[imgNo];

  if (modalData[data].linkLive) {
    modalLinkLive.href = modalData[data].linkLive;
  } else {
    modalLinkLive.style.display = "none";
  }

  if (modalData[data].linkCode) {
    modalLinkCode.href = modalData[data].linkCode;
  } else {
    modalLinkCode.style.display = "none";
  }
  //modalImg.style.background = `url(${modalData[data].img[imgNo]})  center center / cover`;
};

const changeModalImg = (direction) => {
  if (direction === 1) {
    if (imgNo < 3) {
      imgNo += 1;
      modalImg.src = modalData[data].img[imgNo];
      //modalImg.style.background = `url(${modalData[data].img[imgNo]})  center center / cover`;
    } else {
      imgNo = 1;
      modalImg.src = modalData[data].img[imgNo];
      //modalImg.style.background = `url(${modalData[data].img[imgNo]})  center center / cover`;
    }
  } else {
    if (imgNo > 1) {
      imgNo -= 1;
      modalImg.src = modalData[data].img[imgNo];
      //modalImg.style.background = `url(${modalData[data].img[imgNo]})  center center / cover`;
    } else {
      imgNo = 3;
      modalImg.src = modalData[data].img[imgNo];
      //modalImg.style.background = `url(${modalData[data].img[imgNo]})  center center / cover`;
    }
  }
};
