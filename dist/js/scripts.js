$(document).ready(function(){

  // smooth scrolling
  $('a[data-scroll]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 500);
        return false;
      }
    }
  });


// Nav collapse
  $(".nav-trigger").on("click", function() {
    $(".nav").toggleClass('open')
  })

  $('.nav li a').on("click", function(){
    $('.nav').removeClass('open')
  })

//Change navbar height on scroll
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50){
      $(".site-nav").addClass('navbar-scroll')
    }
    else {
      $('.site-nav').removeClass('navbar-scroll')
    }
  })

  // modal 1
  $('#modal-btn-1').click(function(e) {
    $('#offerMore').addClass('active');
    $('body').css('overflow', 'hidden');
    e.preventDefault();
});


  // modal 2
  $('#modal-btn-2').click(function(e) {
    $('#pricingFull').addClass('active');
    $('body').css('overflow', 'hidden');
    e.preventDefault();
});

  $('.btn-close').click(function(e) {
    $('body').css('overflow', 'auto');
    $('.modal').removeClass('active');
    e.preventDefault();
});

// hover touch
var isTouching = false;
window.addEventListener('touchstart', function(){
  document.documentElement.classList.remove('mouse');
  document.documentElement.classList.add('touch');
  isTouching = true;
});

window.addEventListener('mousemove', function(){
  if(isTouching) isTouching = false
  else
  {
    document.documentElement.classList.remove('touch');
    document.documentElement.classList.add('mouse');
  }
});

FastClick.attach(document.body);

});
