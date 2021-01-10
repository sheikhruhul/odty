$(document).ready(function(){



  $(window).scroll(function(){
    if($(this).scrollTop()>300){
      $('.call-to-top').fadeIn();
    } else {
      $('.call-to-top').fadeOut();
    }
  });


  $('.call-to-top').click(function(){
  $("html,body").animate({
    scrollTop:0
  },);
  });
  /*-----for wow js -----*/
  new WOW().init();
  /*-----for screenshoots carousel js -----*/
  $('.screenshoots').owlCarousel({
    loop:true,
    items:5,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
  responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:5,
        nav:true,
        loop:false
    }
}
  })
  /*-----for user carousel js -----*/
  $('.full-user').owlCarousel({
    loop:true,
    items:3,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,

      })
  $('.user-comment').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    animateIn:'slideInRight',
    animateOut:'slideOutLeft',

      })
      /////        for google map//

        var map;
        $(document).ready(function(){
          map = new GMaps({
            el: '#map',
            lat: 23.0161372,
            lng: 89.447314,
            zoomControl : true,
            zoomControlOpt: {
                style : 'SMALL',
                position: 'TOP_LEFT'
            },
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false
          });
        });
        /*------- one page navigation ---------*/

        $('.navbar-nav li a').click(function() {
           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
           && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target
             || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
               var targetOffset = $target.offset().top;
               $('html,body')
               .animate({scrollTop: targetOffset}, 1000);
              return false;
             }
           }
         });
})
