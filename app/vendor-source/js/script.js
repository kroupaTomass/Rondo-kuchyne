
//SMOOTH PAGE SCROLL
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


//OWL CAROSEL TESTIMONIAL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(

  function() {

    $("html").niceScroll({
    	cursorcolor:"#f74d65",
    	scrollspeed :"100",
    	cursorborder:"1px solid #f74d65",
    	horizrailenabled: "false",
    	cursorborderradius: "0px"
    });
    $('#carousel-example-generic').carousel();
  }
);

$("#kitchen_a").animatedModal({
  modalTarget: 'animatedModal_a',
  color:'#dedede',
  animatedIn: 'slideInLeft',
  animatedOut: 'zoomOutRight'

});
$("#kitchen_b").animatedModal({
  modalTarget:'animatedModal_b',
  color:'#afaaa5',
  animatedIn: 'slideInLeft',
  animatedOut: 'zoomOutRight'
});
$("#kitchen_c").animatedModal({
  modalTarget:'animatedModal_c',
  color:'#b9aca6',
  animatedIn: 'slideInLeft',
  animatedOut: 'zoomOutRight'
});
$("#kitchen_d").animatedModal({
  modalTarget:'animatedModal_d',
  color:'#ce9196',
  animatedIn: 'slideInLeft',
  animatedOut: 'zoomOutRight'
});
$("#kitchen_e").animatedModal({
  modalTarget:'animatedModal_e',
  color:'#b99f8e',
  animatedIn: 'slideInLeft',
  animatedOut: 'zoomOutRight'
});
$("#kitchen_f").animatedModal({
  modalTarget:'animatedModal_f',
  color:'#d8d7d5',
  animatedIn: 'slideInLeft',
  animatedOut: 'zoomOutRight'
});
$("#kitchen_g").animatedModal({
  modalTarget:'animatedModal_g',
  color:'#008cb1',
  animatedIn: 'slideInLeft',
  animatedOut: 'zoomOutRight'
});
$("#kitchen_h").animatedModal({
  modalTarget:'animatedModal_h',
  color:'#e7d1bc',
  animatedIn: 'slideInLeft',
  animatedOut: 'zoomOutRight'
});


new WOW().init();



/*Preloader*/
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
//]]>
