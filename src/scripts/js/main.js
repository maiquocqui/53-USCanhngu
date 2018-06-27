$(document).ready(function() {
    new WOW().init();
    // $('header').scrollToFixed({
    //     zIndex: 100,
    // });
    // $('.topbar').scrollToFixed({
    //     marginTop: 129,
    //     zIndex: 50
    // });
    // $('.parallax-window').parallax({
    //     speed: 0.5
    // });
    $('[data-toggle="tooltip"]').tooltip()
    $('.btn-comment').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 150
        }, 700);
        // $('.nav-tabs li').removeClass('active');
        // $(this).parent('li').addClass('active');
        return false;
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 400) {
            $('.product-fly-button').addClass('open');
        } else {
            $('.product-fly-button').removeClass('open');
        }
    });
    $('.up').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });
    // if ($(window).width() < 768) {
    //     $('.btn-showtop').click(function() {
    //         $(this).siblings('ul').slideToggle(300);
    //     });
    // }
    $(".counter").countimator({
        duration: 1000,
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    $('.searchtoggle').click(function() {
        $('.search').slideToggle(300);
    });
    // $('.btn-closesearch').click(function() {
    //     $('.search').slideToggle(300);
    // });

    // MENU
    // if ($(window).width() < 1200) {
    //     $('.menu').insertBefore('.fullpage');
    // }
    $('.btn-showmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('.search').removeClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        // $('html').css('overflow', 'auto');
    });
    $('.btn-showsub').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });

    // END-MENU

    $('.btn-apply').click(function() {
        $('.apply-form').slideToggle(300);
    });
    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });

    // FAQ SCRIPT
    $('.faqlist .faq').click(function() {
        $('.faqlist .faq .faqtitle').removeClass('active');
        $('.faqlist .faq .faqcontent').slideUp(300);
        $(this).children('.faqtitle').addClass('active');
        $(this).children('.faqcontent').slideDown(300);
    });

    // SLIDE 
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true
    });

    $('.breadcrumbimg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false
    });

    $('.about-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        variableWidth: true,
    });
    $('.whychooselist').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 1000,
    });

    $('.result-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000,
    });

    $('.feedback-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: true,
    });

    $('.partnerslide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: true,
    });

    $('.teacher-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
    });

    $('.homeabout-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.homeabout-nav'
    });
    $('.homeabout-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.homeabout-img',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });


    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });
});


// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function() {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 300,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    style: 'hermes',
                    tmp: '',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 20,
                    space: 15,

                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200

                }
            },
            responsiveLevels: [1024, 991, 767, 543],
            visibilityLevels: [1024, 991, 767, 543],
            gridwidth: [1600, 1600, 1600, 1600],
            gridheight: [720, 720, 720, 720],
            lazyType: "none",
            // parallax: {
            //     type: "scroll",
            //     origo: "slidercenter",
            //     speed: 50,
            //     levels: [5000]
            // },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
})