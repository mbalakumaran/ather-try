$(document).ready(function () {

	$(window).scroll(function() {

	var container = $("#section-wipes"),
	scrollPosi = $(this).scrollTop(),
	firstSection = $("#section-one"),
	lastSection = $("#section-three");

	console.log("top",firstSection.offset().top);
	console.log("top",scrollPosi);
	console.log("top",lastSection.offset());
	console.log("top",container.hasClass("scroll-start"));

	if (scrollPosi > firstSection.offset().top && container.hasClass("scroll-start")) {
		container.removeClass("scroll-start");
		console.log("wanted false:",container.hasClass("scroll-start"))
	} else if ( scrollPosi < firstSection.offset().top && !container.hasClass("scroll-start")) {
		container.addClass("scroll-start");
		console.log("wanted true:",container.hasClass("scroll-start"))
	}
	
	if (scrollPosi > lastSection.offset().top && !container.hasClass("scroll-end")) {
		container.addClass("scroll-end");
		console.log("wanted true:",container.hasClass("scroll-end"))

	} else if ( scrollPosi < lastSection.offset().top && container.hasClass("scroll-end")) {
		container.removeClass("scroll-end");
		console.log("wanted false:",container.hasClass("scroll-end"))

	}

	});

});

