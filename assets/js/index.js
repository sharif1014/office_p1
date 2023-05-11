(function ($) {
  'use strict';

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/

  

  $(function () {
   hamburger();
   owlCarousel();

  });

  $(window).on('scroll', function () {

  });

  /*--------------------------------------------------------------
    1. Test Plugin
  --------------------------------------------------------------*/
  // Mobile menu functionality
  function hamburger() {
    $(".navbar-toggler").click(function(){
      $(".hamburger_icon").toggleClass("close");
    })
  }
  function owlCarousel(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:15,
      autoPlay:true,
      paginationSpeed : 500,
      responsiveClass:true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
    
  })
  }


})(jQuery); // End of use strict