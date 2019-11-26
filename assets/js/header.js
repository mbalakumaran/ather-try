$(document).ready(function () {
  $(".hambur-menu").on("click", function (e) {
    e.preventDefault();
      $(".sidebar-panel").addClass("active");
      $('body').css("overflow", "hidden");
      setTimeout(function (e) {
        $('.closeMenu').css("display", "block");
      }, 150);
  });
  $(".close-panel").on("click", function (e) {
    e.preventDefault();
      $(".sidebar-panel").removeClass("active");
      $('body').css("overflow", "auto");
      setTimeout(function (e) {
        $('.closeMenu').css("display", "none");
      }, 150);
  });
});