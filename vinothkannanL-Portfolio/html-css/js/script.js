

$(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 8000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });

    });



    $(document).ready(function() {

      $('#counter').each(function () {
      $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
      $(this).text(Math.ceil(now));
      }
      });
      });
  
      });







    //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
  document.body.scrollTop > 20 ||
  document.documentElement.scrollTop > 20
) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


const loader =document.getElementById("preloader");

  window.addEventListener("load",function(){
      loader.style.display = "none"
  })




  // typejs

  // var type = new Typed 
  // ('#typeing-text',{
  //   Strings:['vinoth'],
  //   typeSpeed:50,
  //   loop:true,
  // });
  var typed = new Typed('#typeing-text', {
    strings: ['designer','developer','ui & ux'],
    typeSpeed: 180,
    loop:true,
  });


  // contact-form
  document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/mqkrvnjr",{
      method:'post',
      body:data,
    })
    .then(Response =>{
      if(Response.ok){
        alert('Success');

      }else{
        alert('Errow')
      }
    })
    document.getElementById('contact-form').requestFullscreen();
  })





  	/*------------------------------------------------------
  	/  Portfolio Filter
  	/------------------------------------------------------*/
		$(".portfolio-box").imagesLoaded(function () {
			var $grid = $(".portfolio-box").isotope({
				// options
				masonry: {
					columnWidth: ".portfolio-box .portfolio-sizer",
					gutter: ".portfolio-box .gutter-sizer",
				},
				itemSelector: ".portfolio-box .portfolio-item",
				percentPosition: true,
			});

			// filter items on button click
			$(".filter-button-group").on("click", "button", function () {
				$(".filter-button-group button").removeClass("active");
				$(this).addClass("active");

				var filterValue = $(this).attr("data-filter");
				$grid.isotope({ filter: filterValue });
			});
		});

		/*------------------------------------------------------
  	/  Portfolio Gallery Carousel
  	/------------------------------------------------------*/
		$(".portfolio_gallery.owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			lazyLoad: true,
			center: true,
			// autoWidth: true,
			autoplayHoverPause: true,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 800,
			margin: 30,
			nav: false,
			dots: true,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
					margin: 0,
				},
				// breakpoint from 768 up
				768: {
					items: 2,
					margin: 20,
				},
				992: {
					items: 2,
					margin: 30,
				},
			},
		});


    ScrollReveal({ 
      reset: true ,
      distance:'60px',
      duration:2500,
      delay:400
    });

    ScrollReveal().reveal('.header-title', { delay: 500,origin: 'left' });
