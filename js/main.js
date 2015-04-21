$(document).ready(function() {

  /************************
      CUSTOM FUNCTIONS
  ************************/
  
  $.fn.extend({
    // Wraps text elements with .sr-only so they're accessible to screen readers but don't appear on screen
    srOnlyText: function() {
      return this.each(function() {
        $(this)
          .contents()
          .filter(function() {
            return this.nodeType === 3; //Node.TEXT_NODE
          })
          .wrap('<span class="sr-only" />');
      });
    },
    // Adds a toolbar element
    addToolbar: function() {
      return this.each(function() {
        $(this)
          .prepend('<div class="slider-toolbar"></div>');
      });
    },
    moveIntoToolbar: function() {
      return this.each(function() {
        /*
        var sliderContainer = $(this).closest('.slick-lightbox');
        var closestToolbar = sliderContainer.find('.slider-toolbar');
        $(this)
          .appendTo(closestToolbar);
        */
        var sliderContainer;
        var closestToolbar;
        if ($(this).parents('.slick-lightbox').length > 0) {
          sliderContainer = $(this).parents('.slick-lightbox');
        }
        else {
          sliderContainer = $(this).parents('.slick-slider');
        };
        closestToolbar = sliderContainer.find('.slider-toolbar');
        $(this)
          .appendTo(closestToolbar);
      });
    }
  });
  
  /**********************
     TABLE OF CONTENTS
  **********************/
  
  // Generate table of contents
  $('#toc').toc({
    listType: 'ul',
    headers: 'h2, h3, h4',
    showSpeed: 0
  });

  
  // Add scrollspy
  $('body').scrollspy({
    target: '#toc'
  });

  // Turn TOC into Bootstrap affix nav
  $('#toc ul').addClass('nav nav-pills nav-stacked');
  /*
  $('#toc').affix({
    offset: {
      top: 1200
    }
  });
  */

  
  /******************
     DISPLAY MODE
  ******************/
  
  // Display mode
  var textElements = "p, h2, h3, h4, ul, ol"; // elements to hide in picture-mode

  $("[name='display-mode']").bootstrapSwitch();

  $('input[name="display-mode"]').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state === true) {
      $(textElements).hide();
    }
    else {
      $(textElements).show();
    }
  });

  /*************
     SLIDERS
  **************/
  
  // Find all sliders
  var sliders = $('ol').has('img');
  
  // Find all slides
  var slides = $(sliders).children('li');
  
  // Find and wrap all slide images
  $(slides)
    .children('img')
    .each(function() {
      $(this).wrap('<a class="slide-img" href="' + $(this).attr('src') + '" />');
    });
    
    
  // Find and wrap all slide captions
  $(slides)
    .contents()
    .filter(function() {
      return this.nodeType === 3; //Node.TEXT_NODE
    })
    .wrap('<div class="slide-caption" />');
  
  // Initiate slick
  var slickOptions = {
    infinite: false,
    arrows: true,
    dots: true,
    speed: 300
  };
  
  $(sliders).slick(slickOptions);
  
  // Initiate slickLightbox
  $(sliders).each(function() {
    $(this).slickLightbox({
      slick: slickOptions,
    });
  });
  
  $('body').on('show.slickLightbox', function() {
    $(this).addClass('modal-open');
    $('.slick-lightbox-slick').addToolbar();
    $('.slick-lightbox .slick-dots').moveIntoToolbar();
    $('.slick-lightbox .slick-lightbox-close').moveIntoToolbar().srOnlyText();
    $('.slick-lightbox .slick-dots button, .slick-lightbox .slick-prev, .slick-lightbox .slick-next').srOnlyText();
  });
  
  $('body').on('hide.slickLightbox', function() {
    $(this).removeClass('modal-open');
  });

// Create toolbar
  $(sliders).addToolbar();
  
  // Move .slick-dots into toolbar
  $('.slick-dots').moveIntoToolbar();
  
  // Add full screen button
  $('.slider-toolbar').append('<button class="full-screen toolbar-action">View in full screen</button>');
  $('.full-screen').click( function() {
    var parentSlider = $(this).closest('.slick-slider');
    parentSlider.removeClass('slick-hide-init');
    activeSlide = $(parentSlider).find('.slick-slide.slick-active > a');
    activeSlide.trigger('click');
  });

  // Find all slider buttons and wrap them with .sr-only
  $('.slick-slider button:not(.full-screen)').srOnlyText();

});
  


