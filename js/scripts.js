var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

    if( $(".rev_slider").length > 0 ) {
        $(".rev_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        });
    }

    // --------------

    $(".dr_parent").each(function() {
        if(!$(this).hasClass("active")) {
            sl = $(this).find(".dr_content");
            sl.slideUp(300);
        }
    });

    $(".dr_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr_parent");
      sl = parent.find(".dr_content");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {               
        sl.slideUp(300);
        parent.removeClass("active");
      }
    });

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // --------------

    var mapZoom;
    var lat;
    var long;
    mapZoom = $("#map").attr("data-zoom");
    lat = $("#map").attr("data-lat");
    long = $("#map").attr("data-long");
    ymaps.ready(function () {        
        var myMap = new ymaps.Map('map', {
            center: [long, lat],
            zoom: mapZoom
        }, {
            searchControlProvider: 'yandex#search'
        });
        myPlacemark1 = new ymaps.Placemark([long, lat], {
            hintContent: ''
        }, {
        });
        myMap.geoObjects.add(myPlacemark1);        
    });

});