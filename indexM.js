$(function(){
  // a 속성제거
$('a[href="#"]').on('click',function(e){
  e.preventDefault();
});

$('.navbar').on('click',function(){
  $('.navbox').toggle('slow');
});
$('.navclose').on('click',function(){
  $('.navbox').toggle('slow');
})
  $(window).mousewheel(function(e,delta){
    if(delta > 0){
      $('.textimg').stop().animate({
        bottom:'-=10'
      },500)
    } else if(delta < 0){
      $('.textimg').stop().animate({
        bottom:'+=10'
      },500)
    }
  });
  $(window).mousewheel(function(e,delta){
    if(delta > 0){
      $('.enjoysteak').stop().animate({
        bottom: '-=5'
      },1000)
    } else if(delta < 0){
      $('.enjoysteak').stop().animate({
        bottom:'+=5'
      },500)
    }
  });
  let steak1 = document.querySelector('.steaklist1');
  steak1.addEventListener('click', function () {
    steak1.classList.toggle('flip');
    $('.steaklist1').siblings().removeClass('flip');
  });

  let steak2 = document.querySelector('.steaklist2');
  steak2.addEventListener('click', function () {
    steak2.classList.toggle('flip');
    $('.steaklist2').siblings().removeClass('flip');
  });
  let steak3 = document.querySelector('.steaklist3');
  steak3.addEventListener('click', function () {
    steak3.classList.toggle('flip');
    $('.steaklist3').siblings().removeClass('flip');
  });
  let steak4 = document.querySelector('.steaklist4');
  steak4.addEventListener('click', function () {
    steak4.classList.toggle('flip');
    $('.steaklist4').siblings().removeClass('flip');
  });
  let steak5 = document.querySelector('.steaklist5');
  steak5.addEventListener('click', function () {
    steak5.classList.toggle('flip');
    $('.steaklist5').siblings().removeClass('flip');
  });
  $('.saladbox h3').on('mouseenter',function(){
    $('.saladimg').stop().animate({
      width:220,
      height:420
    },500)
  });
  $('.saladbox h3').on('mouseleave',function(){
    $('.saladimg').stop().animate({
      width:200,
      height:400
    },500)
  });





});
