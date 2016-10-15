// $(document).ready(function(){
//
//   var btn = $('.header__btn-auth'),
//       flip =  $('.flipper');
//
//   $(function(){
//     btn.on('click', function(){
//
//       flip.toggleClass('flip-animate');
//       btn.addClass('disable');
//     });
//   }());
//
//   $(function(){
//     $('.auth-container-foot__link').on('click', function(e){
//       e.preventDefault();
//
//       btn.removeClass('disable');
//       flip.toggleClass('flip-animate');
//     });
//   }());
//
//   $(function() {
//
//     var html = $('html');
//         nav = $('.header-nav'),
//         trigger = $('#hamburger'),
//         isClosed = false;
//
//     trigger.click(function() {
//
//       html.toggleClass('hidden');
//       nav.toggleClass('active');
//       burgerTime();
//
//     });
//
//     function burgerTime() {
//       if (isClosed == true) {
//         trigger.removeClass('is-open');
//         trigger.addClass('is-closed');
//         isClosed = false;
//       } else {
//         trigger.removeClass('is-closed');
//         trigger.addClass('is-open');
//         isClosed = true;
//       }
//     }
//   }());
//
//   // $(function(){
//   //   var
//   //       imgs = [];
//   //   $.each($('*'), function () {
//   //     var
//   //         $this = $('this'),
//   //         background = $this.css('background-image'),
//   //         img = $this.is('img');
//   //
//   //     if (background != 'none') {
//   //       var path = background.replace('url("','').replace('")','');
//   //       imgs.push(path);
//   //     }
//   //
//   //     if (img) {
//   //       var path = $this.attr('src');
//   //
//   //       if (path) {
//   //         imgs.push(path);
//   //       }
//   //     }
//   //   });
//   // }());
//
//   if ($('.slider').length) {
//     slider.init();
//   }
// });

// var slider = (function () {
//
//   //private vars
//
//   return {
//     init: function () {
//       var that = this;
//
//       $('.slider__btn-arrow').on('click', function () {
//
//         var
//             $this = $(this),
//             slides = $this.closest('.slider').find('.slider__item'),
//             activeSlide = slides.filter('.slider-active'),
//             nextSlide = activeSlide.next(),
//             prevSlide = activeSlide.prev(),
//             firstSlide = slides.first(),
//             lastSlide = slides.last();
//
//         if ($('.slider__btn-arrow_right')) {
//           that.moveSlide(nextSlide, 'forward');
//         }
//
//       });
//     },
//
//     moveSlide: function (slide, direction) {
//
//       var
//           container = slide.closest('.slider'),
//           slides = container.find('slider__item'),
//           activeSlide = slides.filter('slider-active'),
//           slideWidth = slides.width(),
//           duration = 500,
//           reqCssPosition = 0,
//           reqSlideStrafe = 0;
//
//       if (direction === 'forward') {
//         reqCssPosition = slideWidth;
//         reqSlideStrafe = -slideWidth;
//       } else if (direction === 'backward') {
//         reqCssPosition = -slideWidth;
//         reqSlideStrafe = slideWidth;
//       }
//
//       slide.css('left',reqCssPosition).addClass('inslide');
//
//       var movableSlide = slides.filter('.inslide');
//
//       activeSlide.animate({left: reqSlideStrafe}, duration);
//       movableSlide.animate({left: 0}, duration, function () {
//         var $this = $(this);
//
//         slides.css('left', '0').removeClass('slider-active');
//         $this.toggleClass('inslide slider-active');
//
//       });
//
//
//     }
//   }

// }());

$(document).ready(function () {
  if ($('.slider').length) {
    slider.init();
  }
});


var slider = (function () {

  //private vars

  return {
    init: function () {
      var that = this;

      $('.slider__controls-button').on('click', function (e) {
          e.preventDefault();
        
          console.log('ok');
        var
            $this = $(this),
            slides = $this.closest('.slider').find('.slider__item'),
            activeSlide = slides.filter('.slider-active'),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev(),
            firstSlide = slides.first(),
            lastSlide = slides.last();

        if ($('.slider__control-button_next')) {
          that.moveSlide(nextSlide, 'forward');
        }

      });
    },

    moveSlide: function (slide, direction) {

      var
          container = slide.closest('.slider'),
          slides = container.find('.slider__item'),
          activeSlide = slides.filter('.slider-active'),
          slideWidth = slides.width(),
          duration = 500,
          reqCssPosition = 0,
          reqSlideStrafe = 0;

      if (direction === 'forward') {
        reqCssPosition = slideWidth;
        reqSlideStrafe = -slideWidth;
      } else if (direction === 'backward') {
        reqCssPosition = -slideWidth;
        reqSlideStrafe = slideWidth;
      }

      slide.css('left', reqCssPosition).addClass('inslide');

      var movableSlide = slides.filter('.inslide');

      activeSlide.animate({left: reqSlideStrafe}, duration);
      movableSlide.animate({left: 0}, duration, function () {
        var $this = $(this);

        slides.css('left', '0').removeClass('slider-active');
        $this.toggleClass('inslide slider-active');

      });
    }
  }
}());