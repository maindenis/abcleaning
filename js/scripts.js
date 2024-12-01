var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
var sliderIsLive;
function initialSlider() {
    if($('.packages_thumbs').length > 0) {
        if (window.innerWidth <= 700) {
            $('.packages_thumbs').slick({
                dots: false,
                arrows: true,
                autoplaySpeed: 4000,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
            });
            sliderIsLive = true;
        }
        else {
            if (sliderIsLive) {
                $('.packages_thumbs').slick('unslick');
                sliderIsLive = false;
            }
        }
    }
}

$(window).resize(function() {

});

$(document).scroll(function() {

});

window.addEventListener("resize", function() {
initialSlider();
});

$(document).ready(function() {

    initialSlider();

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

    $(".respBtn").click(function(e) {
      e.preventDefault();
      if( $("#respNav").is(":hidden") ) {
          $("#respNav").fadeIn(300);
          $(".res_bg").fadeIn(300);
          $(this).addClass("active");
          $(".closeNav").addClass("active");
      } else {
          $("#respNav").fadeOut(300);
          $(".res_bg").fadeOut(300);
          $(this).removeClass("active");
          $(".closeNav").removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#respNav").is(":visible") &&
            bodyWidth <= 900) {
                $("#respNav").fadeOut(300);
                $(".respBtn").removeClass("active");
                $(".closeNav").removeClass("active");
                $(".res_bg").fadeOut(300);
        }
    });

    $(".res_bg, .closeNav").click(function(e) {
        e.preventDefault();
        $("#respNav").fadeOut(300);
        $(".respBtn").removeClass("active");
        $(".closeNav").removeClass("active");
        $(".res_bg").fadeOut(300);
    });

    // --------------

    // var mapZoom;
    // var lat;
    // var long;
    // mapZoom = $("#map").attr("data-zoom");
    // lat = $("#map").attr("data-lat");
    // long = $("#map").attr("data-long");
    // ymaps.ready(function () {        
    //     var myMap = new ymaps.Map('map', {
    //         center: [long, lat],
    //         zoom: mapZoom
    //     }, {
    //         searchControlProvider: 'yandex#search'
    //     });
    //     myPlacemark1 = new ymaps.Placemark([long, lat], {
    //         hintContent: ''
    //     }, {
    //     });
    //     myMap.geoObjects.add(myPlacemark1);        
    // });

});