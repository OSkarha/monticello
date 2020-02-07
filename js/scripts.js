(function(){ 
   $('.slider').slick({
    dotsClass: "slider__dots slider__dots--vert"
   });

    $('.news__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      dotsClass: "slider__dots slider__dots--gor",
      arrows: true,
      prevArrow: `<a href="" class="arrow arrow--left">
                     <svg width="41.5" height="41.5" >
                        <use xlink:href="#arrow"/>
                     </svg>
                  </a>`,

        nextArrow: `<a href="" class="arrow arrow--right">
                     <svg width="41.5" height="41.5" >
                        <use xlink:href="#arrow"/>
                     </svg>
                  </a>`,
      pauseOnFocus: true,
    });

   })();

