$(document).ready(function() {

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
  $('#toc').affix({
    offset: {
      top: 1200
    }
  });

  // Add ".lead" to abstract
  $('main > p:first-child').addClass('lead');

  // Make all images responsive
  $('img').addClass('img-responsive');

  // Display mode

  var textElements = "p, h2, h3, h4, ul, ol"; // elements to hide in picture-mode

  $("[name='display-mode']").bootstrapSwitch();

  $('input[name="display-mode"]').on('switchChange.bootstrapSwitch', function(event, state) {
    if (state == true) {
      $(textElements).hide();
    }
    else {
      $(textElements).show();
    }
  });

});
