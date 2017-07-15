//account
//color Basic
$(document).ready(function(){    
        c3.onmouseover = function(){c4.style.backgroundColor = '#366593'};
        c3.onmouseout = function(){c4.style.backgroundColor = '#485460'};
}); 

 //color Pro
$(document).ready(function(){    
        c5.onmouseover = function(){c6.style.backgroundColor = '#366593'};
        c5.onmouseout = function(){c6.style.backgroundColor = '#49cbcd'};
}); 

//color Premium
$(document).ready(function(){    
        c7.onmouseover = function(){c8.style.backgroundColor = '#366593'};
        c7.onmouseout = function(){c8.style.backgroundColor = '#485460'};
});
//slider1
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
//slider2
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
//hamburger
$(document).ready(function(){
	$('.menu').click(function(){
		$(this).toggleClass('active');
		$('.top_nav').toggleClass('active');
		return false;
	});
});
//valid form

$.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});

$().ready(function() {
    // validate the comment form when it is submitted
    $("#commentForm").validate();

    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy",
            topic: "Please select at least 2 topics"
        }
    });

    $("#username").focus(function() {
        var firstname = $("#firstname").val();
    });

    //code to hide topic selection, disable for demo
    var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.click(function() {
        topics[this.checked ? "removeClass" : "addClass"]("gray");
        topicInputs.attr("disabled", !this.checked);
    });
});