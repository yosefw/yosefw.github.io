$(document).ready(function() {

  /****************
     SCAFFOLDING
  *****************/
  
  // Add ".lead" to abstract
  $('main > p:first-child').addClass('lead');

  // Make all images responsive
  $('img').addClass('img-responsive');

  $.fn.extend({
    srOnlyText: function() {
      $(this)
        .contents()
        .filter(function() {
          return this.nodeType === 3; //Node.TEXT_NODE
        })
        .wrap('<span class="sr-only" />');
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

  // Remove unnesseccary <i>
  $('i').remove();

  
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
  $(sliders).slick({
    arrows: true,
    dots: true,
    lazyLoad: 'onDemand',
    speed: 0
  });
  
  // Create toolbar
  $(sliders).prepend('<div class="slider-toolbar"></div>');
  
  // Move .slick-dots into toolbar
  $('.slick-dots').each( function() {
    $(this).appendTo( $(this).siblings('.slider-toolbar'));
  });
  
  // Add full screen button
  $('.slider-toolbar').append('<button class="full-screen toolbar-action">Full screen</button>');
  $('.full-screen').click( function() {
    var parentSlider = $(this).closest('.slick-slider');
    var activeSlide = $(parentSlider).find('.slick-slide.slick-active');
    var slideImgUrl = $(activeSlide).find('img').attr('src');
  });

  // Find contents of slider indicators and nav buttons and wrap them with .sr-only
  var slickButtons = '.slick-dots button, .slick-prev, .slick-next';
  $('.slick-dots button, .slick-prev, .slick-next').srOnlyText();
  
  // Add lightbox functionality to each slider
  $(sliders).each(function() {
    $(this).slickLightbox({
      
    });
  });
  
  $('body').on('show.slickLightbox', function() {
    $(this).addClass('modal-open');
  });
  
  $('body').on('hide.slickLightbox', function() {
    $(this).removeClass('modal-open');
  });
  
});


  


