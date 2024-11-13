$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        const cursor = $('.custom-cursor');
  
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.4,
            ease: 'power2.out',
        });
    });
  
    $('.app').on('mouseenter', function() {
        $('.custom-cursor').addClass('hover-effect');
    }).on('mouseleave', function() {
        $('.custom-cursor').removeClass('hover-effect');
    });
});
  
  