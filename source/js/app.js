$(document).ready(function () {

  //Parallax effect
  $(function () {

    var layer = $('.parallax').find('.parallax__layer');
    layer.map(function (key, value) {
      var bottomPosition = ((window.innerHeight/2) * ((key+1)/100));

      $(value).css({
        'bottom': '-' + bottomPosition + 'px',
        'transform':'translate3d(0px, 0px, 0px)'
      });
    });

    $(window).on('mousemove', function (e) {

      var mouse_dx = e.pageX;
      var mouse_dy = e.pageY;
      var w = (window.innerWidth/2) - mouse_dx;
      var h = (window.innerHeight/2) - mouse_dy;

      layer.map(function (key, value) {
        var bottomPosition = ((window.innerHeight/2) * ((key+1)/100));
        var widthPosition = w * ((key+1)/100);
        var heightPosition = h * ((key+1)/100);

        $(value).css({
          'bottom': '-' + bottomPosition + 'px',
          'transform':'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0px)'
        });
      })
    });
  }());


  //Toggle block welcome
  var btn = $('.header__btn-auth'),
      flip =  $('.flipper');

  $(function(){
    btn.on('click', function(){

      flip.toggleClass('flip-animate');
      btn.addClass('disable');
    });
  }());

  $(function(){
    $('.auth-container-foot__link').on('click', function(e){
      e.preventDefault();

      btn.removeClass('disable');
      flip.toggleClass('flip-animate');
    });
  }());


  //Navigation burger
  $(function() {

    var html = $('html');
    nav = $('.header-nav'),
        trigger = $('#hamburger'),
        isClosed = false;

    trigger.click(function() {

      html.toggleClass('hidden');
      nav.toggleClass('active');
      burgerTime();

    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }
  }());


  //Connect google map
  $(function() {

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 55.4014019, lng: 43.8266742},
      zoom: 15,
      scrollwheel: false,
      disableDefaultUI: true

    });

    var styles = [
      {
        elementType: 'geometry',
        stylers: [{color: '#f5f5f5'}]
      },
      {
        elementType: 'labels.icon',
        stylers: [{visibility: 'off'}]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{color: '#616161'}]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{color: '#f5f5f5'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{color: '#bdbdbd'}]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{color: '#eeeeee'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#e5e5e5'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#dadada'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#616161'}]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{color: '#e5e5e5'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#eeeeee'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#96d7c8'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      }
    ];

    map.setOptions({styles: styles});
  }());

  //Fixed scroll in section "Blog"
  $(function () {
    $(window).on('scroll', function () {
      var
          top = $(document).scrollTop(),
          hHeader = $('.header').height(),
          nav = $('.blog-left__nav');

      if(top - 90 > hHeader) {
        nav.addClass('fixed')
      } else {
        nav.removeClass('fixed')
      }
    });
  }());


  //Scroll "About"
  $(function () {

    $('.blog-left__link').on('click', function (e) {
      e.preventDefault();

      showArticle($(this).attr('href'),true);
    });

    showArticle(window.location.hash, false);

    $(window).on('scroll', function() {
      checkArticle();
    });

    function showArticle(article, isAnimate) {
      var
          direction = article.replace(/#/, ''),
          reqArticle = $('.article').filter('[data-article="' + direction + '"]'),
          reqArticlePos = reqArticle.offset().top;

      if (isAnimate) {
        $('body,html').animate({scrollTop: reqArticlePos}, 500);
      } else {
        $('body,html').scrollTop(reqArticlePos);
      }
    }

    function checkArticle() {
      $('.article').each(function () {
        var $this = $(this),
            topEdge = $this.offset().top - 200,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();

        if (topEdge < wScroll && bottomEdge > wScroll) {
          var
              currentId = $this.data('article'),
              reqLink = $('.blog-left__link').filter('[href="#' + currentId + '"]');
              reqLink.closest('.blog-left__item').addClass('blog-left__link_active')
                .siblings().removeClass('blog-left__link_active');

          window.location.hash = currentId;
        }
      })
    }
  }());
});
