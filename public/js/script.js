//mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID 
var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));

(function ($) {
  var image = $('.image');
  
  // don't init gallery if it consists of a single photo
  if (image.length > 1) {
    // wrap images
    image.wrapAll("<div id='image-wrapper'><div id='image-holder'></div></div>");
    image.show();
    
    // init gallery: Gallery.init(imageHolder, imageWrapperWidth, imageCountHolder, nextButton, prevButton)
    Gallery.init($("#image-holder"), 560, $("p#gallery-count").children("span")[0], $("a#next-image"), $("a#previous-image"));
  } else {
    // hide gallery count and navigation
    $("p#gallery-count, div#gallery-navigation").hide();
    // show project navigation
    $("p#project-count").show();
  }
})(jQuery);
