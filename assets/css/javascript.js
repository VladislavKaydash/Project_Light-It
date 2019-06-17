$('.single_slide').slick({  
arrows:false,//убрать стрелочки(кнопки)  
slidesToShow: 4, //сколько слайдов показывать в карусели
slidesToScroll: 4, // сколько слайдов прокручивать за раз
responsive: [
    {
      breakpoint: 900,
      settings: {
       slidesToShow: 3,
       slidesToScroll: 3
     }
    },
	 {
      breakpoint: 700,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
    },
	{
      breakpoint: 500,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
    }	
	] 
  });
