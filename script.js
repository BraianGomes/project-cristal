var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 200,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

/*--------------Adicionando Menu---------------*/

let menuBar = document.querySelector("#open");
let navbar = document.querySelector("#navbar");

menuBar.onclick = () => {
  menuBar.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*--------------Fixando Procura-------------------*/

let allSection = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  allSection.forEach((sec) => {
    let backTop = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (backTop >= offset && backTop < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });

  /*------------stick navbar -------------*/

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuBar.classList.remove("bx-x");
  navbar.classList.remove("active");
};

