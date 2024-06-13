// controle dos slides com swiper js

let swiperSlides = new Swiper(".slides", {
    loop: true,
    grabCursor: true,

    // passagem automática dos slides a cada 3s
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // paginação e criação das bolinhas para navegação pelos slides
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    
    // determinação de quantos slides aparecem de cada vez
    breakpoints:{
        300: {
            slidesPerView: 1,
    }, }
});

// controle dos cards com swiper js

let swiperCards = new Swiper(".cards", {
    loop: true,
    // determinação do espaço entre os cards
    spaceBetween: 32,
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // configuração de quanto cards aparecem com base no tamanho da tela
    breakpoints:{
        300: {
            slidesPerView: 1,
    },
        800: {
            slidesPerView: 3,
        },
    },
});