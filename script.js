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

  /*-----------------Adicionando Menu------------------*/

  let menuBar = document.querySelector(".links");
  let navbar = document.querySelector(".menu");

  menuBar.onclick = () => {
    navbar.classList.toggle("active");
  };

  menuBar.classList.remove("bx-x");
  navbar.classList.remove("active");
};






<header>
        <div id="burguer">
            <img src="images/Cristal’s+ World.png" alt="">
            <button class="open"><i class='bx bx-menu'></i></button>
        </div>
        <menu>
            <nav id="navbar">
                <div id="block">
                    <a href="#shop" class="active">Shop</a>
                    <a href="#about" >About Us</a>
                    <a href="#best" >BestSellers</a>
                    <a href="#contact" >Contact Us</a>
                </div>
            </nav>

            <div id="search">
                <a href="#"><i class='bx bx-search'></i></a>
                <a href="#"><i class='bx bx-cart'></i></a>
            </div>
        </menu>
    </header>



    
#burguer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
}

#burguer > img{
    width: 100%;
    height: 120px;
}

.open{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1.4em;
    width: 120px;
    height: 40px;
    padding: 10px;
    margin-top: 10px;
    overflow: hidden;
    text-decoration: none;
    background-color: var(--darkblue);
    color: var(--textcolor);
    box-shadow: 0px 0px 1em var(--darkblue);
    border-radius: 20px;
    cursor: pointer;
}

.open:hover{
    box-shadow: none;
}

#navbar{
    display: none;
}

#block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: center;
    position: absolute;
    top: 100%;
    left: 0;
    width: 30%;
    padding: 15px 3%;
    background-color: var(--textcolor);
    border-radius: 0px 0px 15px 0px;
}

#block > a{
    font-size: 15px;
    color: var(--lightblue);
    margin: 2.5em 10px;
    transition: .3s;
    animation: slideNav .5s ease forwards;
    animation-delay: calc(.2s * var(--bar));
}

@keyframes slideNav {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}



#search{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11em;
    font-size: 1em;
    margin: 1em 0.5em 1em 200px;
    background: transparent;
    color: var(--textcolor);
    transition: .3s ease;
}

#search > a:hover{
    background-color: var(--darkblue);
}