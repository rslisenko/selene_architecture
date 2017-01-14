;(function($) {
	"use strict";

	$(function(){
		$('.ba-slider').slick(
		{
			dots:true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: '.ba-slider__item',
			prevArrow: '.ba-slider__prev',
			nextArrow: '.ba-slider__next'
		});
	});
})(jQuery);
