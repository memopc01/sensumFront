$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});


$(document).ready(function() {
  $(window).scroll(function() {
  if ($(this).scrollTop() > 20) {
  $('#toTopBtn').fadeIn();
  } else {
  $('#toTopBtn').fadeOut();
  }
  });
  
  $('#toTopBtn').click(function() {
  $("html, body").animate({
  scrollTop: 0
  }, 1000);
  return false;
  });
  });