/*
1. preloader
2. elements.Timeout
3. menu active state
4. sliders
  4-1. owlCarousel SERVICES slider
  4-2. owlCarousel WORKS slider
5. countdown setup
6. contact form
7. newsletter form
8. skills bar
9. drag intro
10. YTPlayer
11. the wall
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(1200);
        $(".preloader-bg").delay(200).fadeOut(2200);
		
        // 2. elements.Timeout
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 600);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 600);
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 600);
        setTimeout(function() {
            $(".border-bottom").removeClass("bottom-position");
        }, 600);
        setTimeout(function() {
            $("#countdown-wrapper-all");
        }, 800);
        setTimeout(function() {
            $("#drag-intro, #countdown-wrapper");
        }, 1000);
        setTimeout(function() {
            dragIntroduction();
        }, 2000);
        setTimeout(function() {
            $(".fade-position").delay(1000).css({
                display: "none"
            }).fadeIn(2200);
        }, 0);
    });
	
    // 3. menu active state
    $(".menu-state").on("click", function() {
        $(".menu-state").removeClass("active");
        $(this).addClass("active");
    });
	
    // 4. sliders
    // 4-1. owlCarousel SERVICES slider
    $(".services-owl").owlCarousel({
        autoPlay: false,
        navigation: true,
        pagination: true,
        transitionStyle: "backSlide", // options: fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: false,
        // autoPlay: 5000,
        stopOnHover: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    // 4-2. owlCarousel WORKS slider
    $(".works-owl").owlCarousel({
        autoPlay: false,
        navigation: true,
        pagination: true,
        transitionStyle: false,
        singleItem: false,
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsMobile: [680, 1],
        autoHeight: false,
        // autoPlay: 5000,
        stopOnHover: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
	
    // 5. countdown setup start
    $("#countdown").countdown({
        date: "05 May 2025 12:00:00", // countdown target date settings
        format: "on"
    }, function() {});
	
    // 6. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 7. newsletter form
    // $("form#subscribe").on("submit", function() {
    //     $("form#subscribe .subscribe-error").remove();
    //     var s = !1;
    //     if ($(".subscribe-requiredField").each(function() {
    //             if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
    //                 $(this).addClass("inputError"), s = !0;
    //             else if ($(this).hasClass("subscribe-email")) {
    //                 var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //                 r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
    //                     $(this).addClass("inputError"), s = !0);
    //             }
    //         }), !s) {
    //         $("form#subscribe input.submit").fadeOut("normal", function() {
    //             $(this).parent().append("");
    //         });
    //         var r = $(this).serialize();
    //         $.post($(this).attr("action"), r, function() {
    //             $("form#subscribe").slideUp("fast", function() {
    //                 $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
    //             });
    //         });
    //     }
    //     return !1;
    // });
	
    // 8. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 9. drag intro
    function dragIntroduction() {
        $("#drag-intro").fadeIn(1000, function() {
            $(this).addClass("show");
            setTimeout(function() {
                $("#drag-intro").fadeOut(1000, function() {
                    $(this).removeClass("show");
                });
            }, 2000);
            $("#countdown-wrapper").delay(2200).fadeIn(2000);
            $("#countdown-wrapper-all").fadeIn(2000);
            $(this).addClass("show");
        });
    }
	
    // 10. YTPlayer
    $("#background-video").YTPlayer({
        videoId: "3S9rxiz1lsU", // DEMO URL is: https://www.youtube.com/watch?v=3S9rxiz1lsU
        mute: true,             // options: true, false
        pauseOnScroll: false,
        repeat: true,
        fitToBackground: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: "transparent",
            branding: 0,
            rel: 0,
            autohide: 0
        }
    });


});


// 11. the wall
window.addEvent("domready", function() {
    var maxLengthMSK = 45;
    var counterMSK = 1;
    var wallMSK = new Wall("wall", {
        "autoposition": false,
        "slideshow": true, // options: true, false
        "speed": 1000,
        "showDuration": 4000,
        "transition": Fx.Transitions.Quad.easeOut,
        "draggable": true,
        "handle": "overlay",
        "inertia": true,
        "width": 50,
        "height": 53,
        "startx": 0,
        "starty": 0,
        "rangex": [-100, 100],
        "rangey": [-100, 100],
        callOnUpdate: function(items) {
            items.each(function(e, i) {
                var a = new Element("img[src=img/the-wall/" + counterMSK + ".png]");
                a.inject(e.node);
                counterMSK++;
                if (counterMSK > maxLengthMSK) counterMSK = 1;
            })
        }
    });
    wallMSK.initWall();
});