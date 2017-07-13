$(document).ready(function(){
  $('.sl').slick({
      //авто проктутка
      //autoplay: true,
      //скорость авто прокрутки 3с
      //autoplaySpeed: 500,
      //скорость анимации
      //speed: 1000,
      //тип анимации : //linear, ease-out
      cssEase: 'ease-in-out',
      //нижняя навагация
      //dots: true,
      //отключение боковых стрелок для пролистования
      //arrows: false,
      slidesToShow: 1,
      //перемотка сразу несколько слайдов
      slidesToScroll: 1,
      //zindex тоже что и в css z-index
      zIndex: 1000,
      //респонсив при ширине экрана 768px и 480px
responsive: [
{
breakpoint: 800,
settings: {
arrows: false,
//centerMode: true,
//centerPadding: '40px',
//slidesToShow: 2,
//slidesToScroll: 2,
}
},

]
});
});
  