$(document).ready(function () {

  //preloader
  (function() {
    var imgs = [];

    $.each($('*'), function () {
      var $this = $(this);
      var background = $this.css('background-image');
      var img = $this.is('img');

      if (background != 'none') {
        var path = background.replace('url("','').replace('")','');
        imgs.push(path);
      }

      if (img) {
        var path = $this.attr('src');

        if (path) {
          imgs.push(path);
        }
      }
    });

    var percentsTotal = 1;

    for (var i = 0; i < imgs.length; i++) {
      var image = $('<img>', {
        attr: {
          src: imgs[i]
        }
      });

      image.on({
          load: function () {
            setPercents(imgs.length, percentsTotal);
            percentsTotal++;
          },

          error: function () {
            percentsTotal++;
          }
      });

    }

    function setPercents(total, current) {
      var percent = Math.ceil(current / total * 100);

      if (percent >= 100) {
        $('.preloader').fadeOut();
      }

      $('.preloader__percents').text(percent + '%');
    }

  })();

  //Parallax effect
  (function() {
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
      });
    });
  })();

  //Toggle block welcome
  (function() {
    var btn = $('.header__btn-auth');
    var flip = $('.flipper');

    btn.on('click', function() {
      flip.toggleClass('flip-animate');
      btn.addClass('disable');
    });

    $('.auth-container-foot__link').on('click', function(e) {
      e.preventDefault();

      btn.removeClass('disable');
      flip.toggleClass('flip-animate');
    });
  })();

  (function () {
    $('.auth-container-foot__submit').on('click', function (e) {
      e.preventDefault();

      alert('Извините!\nВы не зарегистрированы!');
    })
  })();
  
  //Navigation burger
  (function() {
    var html = $('html');
    var nav = $('.header-nav');
    var trigger = $('#hamburger');
    var isClosed = false;

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
  })();

  //arrow down at header
  (function() {
    $('.btn__down').on('click', function(e) {
      e.preventDefault();
      
      var curPos = $(document).scrollTop();
      var height = $('.header').height() + 70;
      var scrollTime=(height-curPos)/1.73;
      
      $('body,html').animate({
        'scrollTop': height
      }, scrollTime);
    });
  })();

  //arrow top at page 'about_me'
  (function() {
    $('.what-about__btn-arrow-up').on('click', function(){
      var curPos = $(document).scrollTop();
      var scrollTime = curPos/1.73;
  
      $('body, html').animate({
        'scrollTop': 0
      }, scrollTime);
    });
  })();

  //Fixed scroll in section "Blog"
  (function () {
    $(window).on('scroll', function () {
      var top = $(document).scrollTop();
      var hHeader = $('.header').height();
      var nav = $('.blog-left__nav');

      if (top - 90 > hHeader) {
        nav.addClass('fixed')
      } else {
        nav.removeClass('fixed')
      }
    });
  })();

  // Scroll "Blog"
  if ($('.blog').html()) {
    (function () {
      $('.blog-left__link').on('click', function (e) {
        e.preventDefault();
    
        showArticle($(this).attr('href'),true);
      });
    
      showArticle(window.location.hash, false);
    
      $(window).on('scroll', function() {
        checkArticle();
      });
    
      function showArticle(article, isAnimate) {
        var direction = article.replace(/#/, '');
        var reqArticle = $('.article').filter('[data-article="' + direction + '"]');
        var reqArticlePos = reqArticle.offset().top;
      
        if (isAnimate) {
          $('body,html').animate({scrollTop: reqArticlePos}, 500);
        } else {
          $('body,html').scrollTop(reqArticlePos);
        }
      };
    
      function checkArticle() {
        $('.article').each(function () {
          var $this = $(this);
          var topEdge = $this.offset().top - 100;
          var bottomEdge = topEdge + $this.height();
          var wScroll = $(window).scrollTop();
    
          if (topEdge < wScroll && bottomEdge > wScroll) {
            var currentId = $this.data('article');
            var reqLink = $('.blog-left__link').filter('[href="#' + currentId + '"]');
                
            reqLink.closest('.blog-left__item')
                  .addClass('blog-left__link_active')
                  .siblings()
                  .removeClass('blog-left__link_active');
    
            window.location.hash = currentId;
          }
        });
      }; 
    })();
  };
});
