$(document).ready(function () {

	$(".navbar-toggler").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-in");
	});

	function navbar() {
		if ($(this).scrollTop() >= 1) {
			$('.fixed-top').addClass("navbar-bg");
		} else {
			$('.fixed-top').removeClass("navbar-bg");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

	AOS.init({
		duration: 1000,
		disable: 'mobile'
	});

  Waves.attach('.btn, .link-circle, .accordion-links, .demopills span, .info');
  Waves.attach('#navbar .nav-link, .img-transform, .bg-img, .dropdown-item', ['waves-light']);
  Waves.init();

	function footer() {
		var height = $(".page-footer").outerHeight();
		$(".footer-wrapper").outerHeight(height);
	};
	footer();
	$(window).on("resize", footer);

  $(".owl-1").owlCarousel({
    items: 1,
    smartSpeed: 1000,
    loop: true,
    autoplay: true,
    margin: 20
  });

	$("#sandwich-1").on("click", function(){
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-1");
		window.dispatchEvent(new Event('resize'));
	});

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

  $('[data-toggle="tooltip"]').each(function () {
	  $(this).tooltip({
	    template: '<div class="tooltip ' + $(this).attr("data-style") + '"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
	  });
	});

  $('[data-toggle="tooltip"]').tooltip({
  	container: $(this).closest()
  });

	$("#step-2").on("click", function(){
		$(".progress-wrapper").addClass("step-2-active");
	});
	$("#step-3").on("click", function(){
		$(".progress-wrapper").addClass("step-3-active");
	});
	$("#step-4").on("click", function(){
		$(".progress-wrapper").addClass("step-4-active");
	});

  var snapSlider = document.getElementById('slider');
	noUiSlider.create(snapSlider, {
    start: 100000,
    behaviour: 'snap',
    connect: [true, false],
    range: {
      'min': 50000,
      'max': 500000,
    },
    pips: {
      mode: 'range',
      density: 100,
      format: wNumb({
        thousand: ',',
      }),
    },
  	tooltips: wNumb({
  		decimals: 0, 
  		thousand: ',',
  	}),
	});

});