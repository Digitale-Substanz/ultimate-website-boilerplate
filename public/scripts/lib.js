// LOCAL JAVASCRIPT LIBRARY


// scroll function
function scrollToID(id, speed){
  var distanceTop = 60; // set to width + margin of your navigation panel on top of page
  var targetOffset = $(id).offset().top - distanceTop;
  $('html,body').animate({scrollTop:targetOffset}, speed);
}
// smooth scrolling to anchor links
function scrollToSubSection(){
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    // hide offcanvas menu, if menu link clicked
    $(".toggle").prop("checked", false);
    var targetID = "#" + $(this).attr("data-id");
    scrollToID(targetID, 1000);
    location.hash = targetID;
  });
}
// scroll to top of site
function scrollToTop(){
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');     
  });
}