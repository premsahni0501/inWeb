$(document).ready( function() {

    $('.nav.navbar-nav li').click(function(){
      if($('#my-navbar').hasClass('navbar-collapse collapse in')){
        animateHam();
        $('#my-navbar').removeClass('in');
        console.log("close sidemenu......");
      }
    })

    $('.navbar-toggle').click(function(){
      animateHam();
    });

    function animateHam()
    {
      if($('#my-navbar').hasClass('navbar-collapse collapse in')){
        console.log("in");
        $( ".one" ).css('transform-origin','center center center');
        $( ".two" ).css('transform-origin','center center center');
        $( ".one" ).css('transform','translate(0px,0px) rotate(0deg)');
        $( ".two" ).css('transform','translate(0px,0px) rotate(0deg)');
        $( ".one" ).css('transition-timing-function','ease-in');
        $( ".two" ).css('transition-timing-function','ease-in');
        $( ".one" ).css('transition-duration','0.5s');
        $( ".two" ).css('transition-duration','0.5s');
      }
      else{
        console.log("out");
        $( ".one" ).css('transform-origin','center center center');
        $( ".two" ).css('transform-origin','center center center');
        $( ".one" ).css('transform','translate(0px,3px) rotate(45deg)');
        $( ".two" ).css('transform','translate(0px,-3px) rotate(-45deg)');
        $( ".one" ).css('transition-timing-function','ease-in');
        $( ".two" ).css('transition-timing-function','ease-in');
        $( ".one" ).css('transition-duration','0.5s');
        $( ".two" ).css('transition-duration','0.5s');
      }
    }

    $('.nav.navbar-nav li').click(function (event) {
      console.log("id: "+$('.nav.navbar-nav li').children().attr('href'));
    });


    var about = $("#about").offset().top;
    var work = $("#work").offset().top;
    var contact = $("#contact").offset().top;

    $(window).scroll(function() {
        if($(window).scrollTop() > about) {
            $("#about h3 .section-title").addClass('fixToTop');
        }
        else{
          $("#about h3 .section-title").removeClass('fixToTop');
        }
        if($(window).scrollTop() > work) {
            $("#work h3 .section-title").addClass('fixToTop');
            $("#about h3 .section-title").removeClass('fixToTop');
        }
        else{
          $("#work h3 .section-title").removeClass('fixToTop');
        }
        if($(window).scrollTop() > contact) {
            $("#contact h3 .section-title").addClass('fixToTop');
            $("#work h3 .section-title").removeClass('fixToTop');
        }
        else{
          $("#contact h3 .section-title").removeClass('fixToTop');
        }
    });

});
