$(document).ready(function(){
  $('.sl2').slick({
      //авто проктутка//
      //autoplay: true,
      //скорость авто прокрутки 3с//
      //autoplaySpeed: 500,
      //скорость анимации//
      //speed: 1000,
      //тип анимации : //linear, ease-out//
      cssEase: 'ease-in-out',
      //центрирование//
      //centerMode: true,//
      //ширина боковых полос//
      //centerPadding: '25px',//
      //нижняя навагация//
      //dots: true,
      //отключение боковых стрелок для пролистования//
      arrows: false,
      //анимация изменения слайда, через тени//
      //fade: true,//
      //отмена пролистования мышкой(курсором), навигация только через стрелки и нижнюю навигацию//
      //draggable: false,//
      //отключение цикличности и зазор//
      //infinite: false,//
      //edgeFriction: '0.5',//
      //пауза при наведении на слайд//
      //pauseOnDotsHover: true,
      //способ загрузки картинок, по умолчанию 'ondemand' -  сначало картинка прогружаеться потом идёт анимация, 'progressive' - //
      //lazyLoad: 'ondemand',//
      //направление слайдов, в html - сладеру нужно задать dir="rtl"//
      //rtl: true,//
      //вертикальное перелистование слайдов//
      //vertical: true,//
      //слайды идут в 2 строки//
      //rows: 2,//
      //столбцы//
      //slidesPerRow: 2,//
      //сколько слайдов видим одновременно//
      slidesToShow: 4,
      //перемотка сразу несколько слайдов//
      slidesToScroll: 1,
      //zindex тоже что и в css z-index//
      zIndex: 1000,
      //респонсив при ширине экрана 768px и 480px//
responsive: [
    {
        breakpoint: 1200,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 3,
            slidesToScroll: 1,
            }
    },
    {
        breakpoint: 980,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 3,
            slidesToScroll: 1,
            }
    },
    {
        breakpoint: 768,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 2,
            slidesToScroll: 1,
            }
    },
    {
        breakpoint: 600,
            settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 2,
            slidesToScroll: 1,
            }
    },
    {
        breakpoint: 480,
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
