(function ($) {
    "use strict";

    //Loading
    jQuery(window).on("load", function () {
        jQuery(".loader").fadeOut(500);
    });

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        let menu = $('.sticky-top');
        if ($(this).scrollTop() > 150) {
            menu.css('top', '0px');
            menu.css('background-color', 'rgba(227, 2, 43, 0.9)');
            $('.logo').css('color', 'var(--blanc)');
            $('.navbar-light .navbar-nav .nav-link.active').css('border-bottom', '5px solid var(--blanc)');
        } else {
            menu.css('top', '-100px');
            menu.css('background-color', 'rgba(227, 2, 43, 0.2)');
            $('.logo').css('color', 'var(--rouge)');
            $('.navbar-light .navbar-nav .nav-link.active').css('border-bottom', '5px solid var(--rouge)');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 150, 'easeInOutExpo');
        return false;
    });

    // Realisation carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $('#gallery').photobox('a', {thumbs: true}, callback);
    // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
    setTimeout(window._photobox.history.load, 1000);

    function callback() {
        console.log('callback for loaded content:', this);
    }

    // Chiffre
    $('.compteur').counterUp({
        delay: 10,
        time: 2000
    });

    var url = $(location).attr("href");
    var fr = url.indexOf("/fr/");
    var lang = $('#lang');
    if (fr !== -1) {
        lang.attr('class', 'english');

    } else {
        lang.attr('class', 'francais');
    }
    $('#changelang').click(function () {
        if (fr !== -1) {
            url = url.replace("/fr/", "/en/");
        } else {
            url = url.replace("/en/", "/fr/");
        }
        document.location.href = url;
    });

})(jQuery);

