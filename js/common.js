$(document).ready(function(){
	$('.center').slick({
		dots: false,
		dotsClass: 'slick-dots',
		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
		nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true , 
		speed: 400 , 
		fade: true /*, 
		cssEase: "linear"	*/	
	});
});
