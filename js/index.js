$(document).ready(function(){
    var headerheight = $('header').outerHeight();
   $('.slide-section').click(function(e){
       var linkhref = $(this).attr('href');
       
       $('html,body').animate({
     scrollTop:$(linkhref).offset().top      
       },3000);
   });
});