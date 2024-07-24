
// ============ Mobile menu Handler jquery ============
$(".mobile-menu-bar").click(function(){
    $('.mobile-menu').toggleClass('open-mobile-menu');
});
$('.mobile-menu').click(function(){
    $(this).removeClass('open-mobile-menu');
});
$('.close-button').click(function(){
    $('.mobile-menu').removeClass('open-mobile-menu');
});

// ============ Slick SLider Features ============
$('.gallery-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
    // autoplay : true,
    autoplaySpeed: 500,

    
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});

// ==================== fancy box
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
  