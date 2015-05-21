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

  /***************************
      HEADER DROPDOWN MENU
  ***************************/
  
  $('#menu').dropdown();
  
  /**********************
     TABLE OF CONTENTS
  **********************/
  
  /*
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

  $('#toc').affix({
    offset: {
      top: 1200
    }
  });
  */

  
  /******************
     DISPLAY MODE
  ******************/
  
  /*
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
  */

  /*************
     SLIDERS
  **************/
  
  // Find all sliders
  var sliders = $('.slider');
  
  // Find all slides
  var slides = $(sliders).children('img');
  
  // Wrap all slide images with links
  $(slides)
    .each(function() {
      $(this).wrap('<a href="' + $(this).attr('src') + '" />');
    });
  
  // Initiate slick
  var slickOptions = {
    infinite: false,
    arrows: true,
    dots: true,
    speed: 300
  };
  
  $(sliders).slick(slickOptions);
  
  // Proper button disabeling
  // ADD http://getbootstrap.com/css/#buttons-disabled
  
  // Initiate slickLightbox
  $(sliders).each(function() {
    $(this).slickLightbox({
      slick: slickOptions
    });
  });
  
  $('body').on('show.slickLightbox', function() {
    $(this).addClass('modal-open');
    /*
    $('.slick-lightbox-slick').addToolbar();
    $('.slick-lightbox .slick-dots').moveIntoToolbar();
    $('.slick-lightbox .slick-lightbox-close').moveIntoToolbar().srOnlyText();
    */
    $('.slick-lightbox .slick-dots button, .slick-lightbox .slick-prev, .slick-lightbox .slick-next').srOnlyText();
  });
  
  $('body').on('hide.slickLightbox', function() {
    $(this).removeClass('modal-open');
  });

  // Find all slider buttons and wrap them with .sr-only
  $('.slick-slider button:not(.full-screen)').srOnlyText();

});
  


