new Swiper('.card-wrapper', {
    // Optional parameters
    // loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    //   dynamicBullets:true,
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: false,
    // },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,

    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});