// Hamburger and links in menu toggle functionlity

let hamburger = $(".mobile-nav-container .nav-hamburger");

hamburger.click(function () {
    if ($(".mobile-header .navlinks").hasClass("mobile")) {
        $(".mobile-header .navlinks").removeClass("mobile");
        $(".mobile-header .navlinks").slideUp();
    } else {
        $(".mobile-header .navlinks").addClass("mobile");
        $(".mobile-header .navlinks").slideDown();
    }
});

// Desktop navigation bar scroll stylings

let desktop_navbar = $("header.desktop-header");

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        desktop_navbar.css({
            background: "rgba(255, 255, 255, 0.1)",
            "backdrop-filter": "blur(100px)",
        });
    } else if ($(window).scrollTop() == 0) {
        desktop_navbar.css({
            background: "none",
            "backdrop-filter": "none)",
        });
    }
});

$(window).ready(function () {
    if ($(window).scrollTop() != 0) {
        desktop_navbar.css({
            background: "rgba(255, 255, 255, 0.1)",
            "backdrop-filter": "blur(100px)",
        });
    }
});


// Mobile navigation hide stylings

let mobile_navlink = $("header.mobile-header li.nav-item a");

$(mobile_navlink).click(function () {
    $(".mobile-header .navlinks").removeClass("mobile");
    $(".mobile-header .navlinks").slideUp();
});



// load more functionality

$(".card").slice(0, 3).removeClass("hidden");

$(".loadlink").on("click", function () {
    let scroll_to = $(window).scrollTop()
    $('html, body').animate({
        scrollTop: scroll_to+1200
    }, 20);
    $(".card:hidden").slice(0, 3).removeClass("hidden");

    if ($(".card:hidden").length == 0) {
        $(".loadlink").hide();
    }
});


// lightbox functionality

$("#one .readmore-text").on("click", function () {
    $(".lightbox-bg.one").addClass("lightbox-display");
});

$(".close").on("click", function () {
    $(".lightbox-bg").removeClass("lightbox-display");
});

//owl carousel functionality

const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
);
const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
);

if (
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <
    420
) {
    $(".owl-carousel").owlCarousel({
        margin: 20,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
        },
    });
}

if (
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <
    768
) {
    $(".owl-carousel").owlCarousel({
        margin: 10,
        stagePadding: 30,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
        },
    });
}

if (
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <
    1024
) {
    $(".owl-carousel").owlCarousel({
        margin: 10,
        stagePadding: 50,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
        },
    });
}

$(".owl-carousel").owlCarousel({
    margin: 10,
    stagePadding: 70,
    loop: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
    },
});

$(".owl-carousel").on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
        $(".owl-carousel").trigger("next.owl");
    } else {
        $(".owl-carousel").trigger("prev.owl");
    }
    e.preventDefault();
});
