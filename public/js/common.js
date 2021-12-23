"use strict";

const $ = jQuery;

function eventHandler() {

	let range = $(".custom-range-js");
	let btnminus = $(".range-wrap__btn--minus");
	let btnplus = $(".range-wrap__btn--plus");
	var instance;

	range.ionRangeSlider({
		skin: "round",
		hide_min_max: true,
		input_values_separator: 'm2',
		postfix: ' м<sup>2</sup>'
	});

	instance = range.data("ionRangeSlider");

	btnminus.click(function(){
		var val = $(".custom-range-js").val(); 
		instance.update({
			from: +val - 1
		});
	})
	
	btnplus.click(function(){
		var val = $(".custom-range-js").val(); 
		instance.update({
			from: +val + 1
		});
	})

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }