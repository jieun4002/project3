$(function(){
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.6,
    spaceBetween: 10,
    freeMode: true,
    loop: true
  });
  $('.navbar').on('click',function(){
    $('.navbox').toggle('slow');
  });
  $('.navclose').on('click',function(){
    $('.navbox').toggle('slow');
  })

  $(window).mousewheel(function(e,delta){
    if(delta > 0){
      $('.txtimg').stop().animate({
        bottom:'-=20'
      },1500)
    } else if(delta < 0){
      $('.txtimg').stop().animate({
        bottom:'+=20'
      },500)
    }
  });
});