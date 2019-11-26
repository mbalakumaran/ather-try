$(document).ready(function() {
	var container = $("#section-wipes"),
		scrollPosi = $(this).scrollTop(),
		firstSection = $("#section-one"),
		lastSection = $("#section-three");

	if (
		scrollPosi > firstSection.offset().top &&
		container.hasClass("scroll-start")
	) {
		container.removeClass("scroll-start");
	} else if (
		scrollPosi < firstSection.offset().top &&
		!container.hasClass("scroll-start")
	) {
		container.addClass("scroll-start");
	}

	if (
		scrollPosi > lastSection.offset().top &&
		!container.hasClass("scroll-end")
	) {
		container.addClass("scroll-end");
	} else if (
		scrollPosi < lastSection.offset().top &&
		container.hasClass("scroll-end")
	) {
		container.removeClass("scroll-end");
	}
});
