$(".site-nav__item").click(function() {
    
  $(".site-nav__item").removeClass("active");
  $(this).addClass("active");
  
});

$("#nav li").hover(function() {
  $(this).siblings().stop().fadeTo(0, 0.5);
}, function() {
  $(this).siblings().stop().fadeTo(0, 1);
});