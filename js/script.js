$(document).ready(function() {
  //   function animateText() {
  //       gsap.to(".outline >p", {
  //         x: "-100%",
  //         duration: 20, 
  //         repeat: -1, 
  //         ease: "linear", 
  //       });
  //     }
  // animateText();

  // .Web-Publishing hover
  $('.Web-Publishing').on('mouseenter', function() {
      $(this).stop().css({'width': '70%', 'height': '50%'});
      $(this).siblings('.About').stop().css({'width': '50%', 'height': '50%'});
      $(this).siblings('.Design-Work').stop().css({'width': '50%', 'height': '30%'});
      $(this).siblings('.Contact').stop().css({'width': '30%', 'height': '70%'});
      $(this).siblings('.center').stop().css({'top': '60%', 'left': '60%'});
  });
  $('.Web-Publishing').on('mouseleave', function() {
      $(this).stop().css({'width': '', 'height': ''});
      $(this).siblings('.About').stop().css({'width': '', 'height': ''});
      $(this).siblings('.Design-Work').stop().css({'width': '', 'height': ''});
      $(this).siblings('.Contact').stop().css({'width': '', 'height': ''});
      $(this).siblings('.center').stop().css({'top': '', 'left': ''});
  });
    // .About hover
    $('.About').on('mouseenter', function() {
        $(this).stop().css({'width': '55%', 'height': '60%'});
        $(this).siblings('.Web-Publishing').stop().css({'width': '75%', 'height': '40%'});
        $(this).siblings('.Design-Work').stop().css({'width': '45%', 'height': '40%'});
        $(this).siblings('.Contact').stop().css({'width': '25%', 'height': '60%'});
        $(this).siblings('.center').stop().css({'top': '50%', 'left': '65%'});
    }).on('mouseleave', function() {
        $(this).stop().css({'width': '', 'height': ''});
        $(this).siblings('.Web-Publishing').stop().css({'width': '', 'height': ''});
        $(this).siblings('.Design-Work').stop().css({'width': '', 'height': ''});
        $(this).siblings('.Contact').stop().css({'width': '', 'height': ''});
        $(this).siblings('.center').stop().css({'top': '', 'left': ''});
    });
    // .Design-Work hover
    $('.Design-Work').on('mouseenter', function() {
        $(this).stop().css({'width': '65%', 'height': '55%'});
        $(this).siblings('.Web-Publishing').stop().css({'width': '55%', 'height': '25%'});
        $(this).siblings('.About').stop().css({'width': '35%', 'height': '75%'});
        $(this).siblings('.Contact').stop().css({'width': '45%', 'height': '45%'});
        $(this).siblings('.center').stop().css({'top': '35.09%', 'left': '45%'});
    }).on('mouseleave', function() {
        $(this).stop().css({'width': '', 'height': ''});
        $(this).siblings('.Web-Publishing').stop().css({'width': '', 'height': ''});
        $(this).siblings('.About').stop().css({'width': '', 'height': ''});
        $(this).siblings('.Contact').stop().css({'width': '', 'height': ''});
        $(this).siblings('.center').stop().css({'top': '', 'left': ''});
    });
    // .Contact hover
    $('.Contact').on('mouseenter', function() {
        $(this).stop().css({'width': '55%', 'height': '65%'});
        $(this).siblings('.Web-Publishing').stop().css({'width': '45%', 'height': '45%'});
        $(this).siblings('.About').stop().css({'width': '25%', 'height': '55%'});
        $(this).siblings('.Design-Work').stop().css({'width': '75%', 'height': '35%'});
        $(this).siblings('.center').stop().css({'top': '55%', 'left': '35%'});
    }).on('mouseleave', function() {
        $(this).stop().css({'width': '', 'height': ''});
        $(this).siblings('.Web-Publishing').stop().css({'width': '', 'height': ''});
        $(this).siblings('.About').stop().css({'width': '', 'height': ''});
        $(this).siblings('.Design-Work').stop().css({'width': '', 'height': ''});
        $(this).siblings('.center').stop().css({'top': '', 'left': ''});
    });
    // .center hover
    $('.center').on('mouseenter', function() {
        $(this).stop().css({'width': '35%', 'height': '30%'});
        $(this).siblings('.Web-Publishing').stop().css({'width': '32.55%', 'height': '65%'});
        $(this).siblings('.About').stop().css({'width': '67.5%', 'height': '35%'});
        $(this).siblings('.Design-Work').stop().css({'width': '32.5%', 'height': '65%'});
        $(this).siblings('.Contact').stop().css({'width': '67.5%', 'height': '35%'});
    }).on('mouseleave', function() {
        $(this).stop().css({'width': '', 'height': ''});
        $(this).siblings('.Web-Publishing').stop().css({'width': '', 'height': ''});
        $(this).siblings('.About').stop().css({'width': '', 'height': ''});
        $(this).siblings('.Design-Work').stop().css({'width': '', 'height': ''});
        $(this).siblings('.Contact').stop().css({'top': '', 'left': ''});
    });



});