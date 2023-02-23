$(function(){
   $('.nav> li').mouseover(function(){
    $('.sub').stop().slideDown();
   });

   $('.nav> li').mouseout(function(){
    $('.sub').stop().slideUp();
   });
});
