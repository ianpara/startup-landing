var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
if (window.pageYOffset > 100) {
    nav.classList.add('scroll', 'shadow');
} else {
    nav.classList.remove('scroll', 'shadow');
}
});

$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: false,
    items: 1,
    stagePadding: 20,
    center: true,
    nav: true,
    navText: ['<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path></svg>','<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>'],
    margin: 50,
    dots: false,
    loop: false,
    responsive: {
    0: { items: 1 },
    480: { items: 2 },
    575: { items: 2 },
    768: { items: 2 },
    991: { items: 3 },
    1200: { items: 3 }
    }
    });
    });