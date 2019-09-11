$(document).ready(function () {

    /*	<----- Header slider -----> */
    var headerSlider = $('#headerSlider');

    headerSlider.on('initialized.owl.carousel', function (event) {
        $('.slide-controls-number__active').text(event.item.index + 1);
        $('.slide-controls-number__total').text(event.item.count);
    });

    headerSlider.owlCarousel({
        items: 1,
        dots: false,
        smartSpeed: 1500
    });

    $('#headerSliderLeft').click(function () {
        headerSlider.trigger('prev.owl.carousel');
    });

    $('#headerSliderRight').click(function () {
        headerSlider.trigger('next.owl.carousel');
    });

    headerSlider.on('changed.owl.carousel', function (event) {
        $('.slide-controls-number__active').text(event.item.index + 1);
        $('.slide-controls-number__total').text(event.item.count);
    });

	/*	<----- Shop slider -----> */
    var shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        items: 3,
        dots: false,
        loop: true,
        margin: 2,
        smartSpeed: 1500
    });

    $('#shopSliderLeft').click(function () {
        shopSlider.trigger('prev.owl.carousel');
    });

    $('#shopSliderRight').click(function () {
        shopSlider.trigger('next.owl.carousel');
    });
});