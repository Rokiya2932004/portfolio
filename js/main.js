setTimeout(() => {
  const loadingElement = document.querySelector(".loading");
  loadingElement.classList.add("hidden");
}, 800);

$(".slick-slider").slick({
  centerMode: true,
  arrows: false,
  autoplay: true,
  centerPadding: "50px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navBar .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200; 
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
