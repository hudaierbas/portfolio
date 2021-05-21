var modalData = {
  1: {
    title: "title 1",
    subtitle: "subtitle 1",
    detail: "detal 1",
    img: {
      1: "../img/he.png",
      2: "../img/pin.png",
      3: "../img/he.png",
    },
    linkLive: "",
    linkCode: "",
  },
  2: {
    title: "title 2",
    subtitle: "subtitle 1",
    detail: "detal 1",
    img: {
      1: "../img/he.png",
      2: "../img/he.png",
      3: "../img/he.png",
    },
    linkLive: "",
    linkCode: "",
  },
  3: {
    title: "title 3",
    subtitle: "subtitle 1",
    detail: "detal 1",
    img: {
      1: "../img/he.png",
      2: "../img/he.png",
      3: "../img/he.png",
    },
    linkLive: "",
    linkCode: "",
  },
  4: {
    title: "title 4",
    subtitle: "subtitle 1",
    detail: "detal 1",
    img: {
      1: "../img/he.png",
      2: "../img/he.png",
      3: "../img/he.png",
    },
    linkLive: "",
    linkCode: "",
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
};

const openModal = (dataNo) => {
  modal.style.display = "flex";
  modalCont.classList.add("modal-animation");

  data = dataNo;

  modalTitle.innerHTML = modalData[data].title;
  modalSubTitle.innerHTML = modalData[data].subtitle;
  modalDetail.innerHTML = modalData[data].detail;
  modalLinkLive.href = modalData[data].linkLive;
  modalLinkCode.href = modalData[data].linkCode;
  modalImg.style.background = `url(${modalData[data].img[imgNo]}) center center / cover`;
};

const changeModalImg = (direction) => {
  if (direction === 1) {
    if (imgNo < 3) {
      imgNo += 1;
      modalImg.style.background = `url(${modalData[data].img[imgNo]}) center center / cover`;
    } else {
      imgNo = 1;
      modalImg.style.background = `url(${modalData[data].img[imgNo]}) center center / cover`;
    }
  } else {
    if (imgNo > 1) {
      imgNo -= 1;
      modalImg.style.background = `url(${modalData[data].img[imgNo]}) center center / cover`;
    } else {
      imgNo = 3;
      modalImg.style.background = `url(${modalData[data].img[imgNo]}) center center / cover`;
    }
  }
};
