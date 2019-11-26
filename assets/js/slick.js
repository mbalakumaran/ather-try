$(document).ready(function () {
  window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:100,
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1
    });
  };
});