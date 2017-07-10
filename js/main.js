//account
//color Basic
$(document).ready(function(){    
        c1.onmouseover = function(){c2.style.backgroundColor = '#366593'};
        c1.onmouseout = function(){c2.style.backgroundColor = '#485460'};
}); 
 //color Pro
$(document).ready(function(){    
        c3.onmouseover = function(){c4.style.backgroundColor = '#366593'};
        c3.onmouseout = function(){c4.style.backgroundColor = '#49cbcd'};
}); 
//color Premium
$(document).ready(function(){    
        c5.onmouseover = function(){c6.style.backgroundColor = '#366593'};
        c5.onmouseout = function(){c6.style.backgroundColor = '#485460'};
}); 




//slider
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
      //пауза при наведении на слайд
      //pauseOnDotsHover: true,
      //zindex тоже что и в css z-index
      zIndex: 1000,
      //респонсив при ширине экрана 768px и 480px
responsive: [
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 1,
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
