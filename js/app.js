
// Sticky Nav
$(document).ready(function(){
$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
})

// Typing Animation

  var typed = new Typed(".element", {
  strings: ["Design","Develope","are the Agency"],
  smartBackspace: true,
   typeSpeed: 100,
   backSpeed: 100,
   loop: true,
  loopCount: Infinity,
  startDelay: 1000
});

// Progress bar

var waypoint = new Waypoint({
  element: document.getElementById('experience'),
  handler: function() {

    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:100%;transition:1s all;");
    p[1].setAttribute("style", "width:95%;transition:1.5s all;");
    p[2].setAttribute("style", "width:85%;transition:1.7s all;");
    p[3].setAttribute("style", "width:99%;transition:2s all;");
    p[4].setAttribute("style", "width:85%;transition:2.3s all;");
    p[5].setAttribute("style", "width:95%;transition:2.5s all;");

  },
   offset: '90%'
});

// Filterizer
var filterizd = $('.filter-container').filterizr({
  animationDuration :.5,
});


// Owl Carousel
 $(".owl-carousel").owlCarousel({
   loop:true,
   autoplay:true,
   autoplayTimeout:4000,
   items:1


 });

 });

 $(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
