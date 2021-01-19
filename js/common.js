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

  Waves.attach('.btn', ['waves-light']);
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

  $(".owl-2").owlCarousel({
    items: 1,
    smartSpeed: 1000,
  });

	$("#sandwich-1").on("click", function(){
		$(this).toggleClass("active");
		$(".body-dashboard").toggleClass("menubar-1");
		window.dispatchEvent(new Event('resize'));
	});

	$("#sandwich-2").on("click", function(){
		$(this).toggleClass("active");
		$(".body-dashboard").toggleClass("menubar-2");
	});

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

});