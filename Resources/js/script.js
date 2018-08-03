$(document).ready(function(){
    /* For sticky navigation*/
    $('.js--section-features').waypoint(function(direction){
        
        if(direction=="down"){
            
            $('nav').addClass('sticky');
            
        }else{
            
            $('nav').removeClass('sticky');
        }
        }, {
        offset: '60px;'
    });
    
   /*Scroll on buttons*/
   $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop:$('.js--section-plans').offset().top},3000);
   });
  
    $('.js--scroll-to-start').click(function(){
       $('html, body').animate({scrollTop:$('.js--section-features').offset().top},1500);
   });
    
/* Navigation scroll*/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
/* Animations on scroll */
$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn'); 
},
  {                      
   offset:'50%'
    
});
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
        },
         {                      
         offset:'50%'
        
    });
          $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
              },
                {                
                offset:'50%'
        
    });
     $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
        },
          {                      
           offset:'50%'
    });
    
    /* Mobile nav */
     $('.js--nav-icon').click(function(){
         var nav = $('.js--main-nav');
         var icon = $('.js--nav-icon i');
         nav.slideToggle(200);
         
         if(icon.hasClass('im-menue')){
             icon.addClass('im-x-mark');
             icon.removeClass('im-menue');
            }else{
           icon.addClass('im-menue');
           icon.removeClass('im-x-mark');
            }
     });

/* Maps */
var map = new GMaps({
  div: '.map',
  lat:  36.2340614,
  lng: -111.98,
  zoom: 6
    
});
    map.addMarker({
  lat: 36.2340614,
  lng: -114.8765,
  title: 'California',
  infoWindow: {
  content: '<p>Our Headquarter</p>'
}
  
});

});