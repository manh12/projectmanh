$(document).ready(function() {
  $("#slider-main").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    items: 1,
  });
  // box-preson
  $("#slider-person").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  $("#slider-brand").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  });
  // btn-mobile
  $('.btn-mobile').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('actm_menu');
    $("#menu-mobile").toggleClass("show-menu");
  });
  // sub-menu-mobile
  $('.subm-menu').click(function (e) {
    e.preventDefault();
    $(".subm-menu ul").toggleClass('show-subm');
  });

  // Scroll
  $(window).on("scroll", function() {
    if ($("body, html").scrollTop() > 120) {
      $("#main-bar").addClass("fixer");
    } else {
      $("#main-bar").removeClass("fixer");
    }
    ///
    if ($("body, html").scrollTop() >= 320) {
      $(".timer").countTo();
    }
  });
    $('.main-menu li').click(function () {

        $('.main-menu li').removeClass('active');
        $(this).addClass("active");
  });

  $(".detail-person").click(
    function() {
      $(".detail-info").toggleClass("show-info");
    }

  );

  //  RESET JQUERY
    $('main').click(function () {
      // show menu
      $("#menu-mobile").removeClass("show-menu");
    });
  $(window).on("scroll", function () {
    if ($("body, html").scrollTop() > 1) {
      $("#menu-mobile").removeClass("show-menu");
      $(".btn-mobile").removeClass("actm_menu");
    }
  });
});
