$(function(){
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });
  
  $('.navbar').on('click',function(){
    $('.navbox').toggle('slow');
  });
  $('.navclose').on('click',function(){
    $('.navbox').toggle('slow');
  })
  $('.gnb li a').on('click',function(){
    $(this).css({'color':'#fff','border-bottom':'#fff 2px solid'});
    
  });
  const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay:1000
    },
    slidesPerView: 2.8,
    spaceBetween: 10,
    loop: true
  });
});