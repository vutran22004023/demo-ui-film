const header = document.getElementById("site-header");

    // Sử dụng sự kiện cuộn (scroll) để kích hoạt header
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) { // Thay đổi màu sau khi cuộn xuống 100px
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    });


    $(document).ready(function () {
      $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",

        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        ]
      });
    })