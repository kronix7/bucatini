/* ===================================================================
 * Darboe's - Main JS
 *
 * ------------------------------------------------------------------- */
(function($) {
     /* slick slider
     * ------------------------------------------------------ */
    let clSlickSlider = function() {
        
        $('.testimonials__slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 2,
            // fade: true,
            cssEase: 'linear',
            slidesToScroll: 2,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            infinite: true,
            slidesToShow: 1,
            fade: true,
            // cssEase: 'linear',
            slidesToScroll: 1,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };

/* Initialize
    * ------------------------------------------------------ */
    (function clInit() {
        
        // clPreloader();
        // clMenuOnScrolldown();
        // clOffCanvas();
        // clPhotoswipe();
        // clStatCount();
        // clMasonryFolio();
        clSlickSlider();
        // clSmoothScroll();
        // clPlaceholder();
        // clAlertBoxes();
        // clAOS();
        // clAjaxChimp();
        // clBackToTop();

    })();
        
})(jQuery);