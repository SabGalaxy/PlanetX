/********************************************************************* 
                Services Section
*********************************************************************/
$(function() {
    //animate on scroll
    new WOW().init();
});

/********************************************************************* 
                Work Section
*********************************************************************/
$(function() {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true // set to true to enable gallery
        }
    });
});

/********************************************************************* 
                Team Section
*********************************************************************/
$(function() {
    $("#team-members").owlCarousel({
        autoplay: true,
        smartSpeed: 700,
        items: 3,
        loop: true,
        autoplayHoverPause: true

    });

});


/********************************************************************* 
                Testimonial Section
*********************************************************************/
$(function() {
    $("#customers-testimonials").owlCarousel({
        autoplay: true,
        smartSpeed: 700,
        items: 1,
        loop: true,
        autoplayHoverPause: true

    });

});


/********************************************************************* 
                Stats Section
*********************************************************************/

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

/********************************************************************* 
                Clients Section
*********************************************************************/
$(function() {
    $("#client-items").owlCarousel({
        autoplay: true,
        smartSpeed: 700,
        items: 6,
        loop: true,
        autoplayHoverPause: true

    });

});

/********************************************************************* 
               Smooth Scroll
*********************************************************************/
$(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

/********************************************************************* 
              Back to Top Button
*********************************************************************/
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1000) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });