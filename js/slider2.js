$(document).ready(function(){
  $('.sl2').slick({
      //авто проктутка
      //autoplay: true,
      //скорость авто прокрутки 3с
      //autoplaySpeed: 500,
      //скорость анимации
      //speed: 1000,
      //тип анимации : //linear, ease-out
      cssEase: 'ease-in-out',
      //отключение боковых стрелок для пролистования
      arrows: false,
      //сколько слайдов видим одновременно
      slidesToShow: 4,
      //перемотка сразу несколько слайдов
      slidesToScroll: 1,
      //zindex тоже что и в css z-index
      zIndex: 1000,
      //респонсив при ширине экрана 
responsive: [
    {
        breakpoint: 1920,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 5,
            slidesToScroll: 5,
            }
    },
    {
        breakpoint: 1440,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 4,
            slidesToScroll: 4,
            }
    },
    {
        breakpoint: 1200,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 3,
            slidesToScroll: 3,
            }
    },
    {
        breakpoint: 1024,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 3,
            slidesToScroll: 3,
            }
    },
    {
        breakpoint: 640,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 2,
            slidesToScroll: 2,
            }
    },
    {
        breakpoint: 400,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1,
            }
    }
]
});
});
