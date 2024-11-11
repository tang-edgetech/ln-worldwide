document.addEventListener("DOMContentLoaded", function(event) {
    $(document).ready(function() {
        let lastScrollTop = 0;
    
        $(window).on('scroll', function() {
            let currentScroll = $(this).scrollTop();
    
            if (currentScroll > lastScrollTop) {
                $('#masthead .navbar').addClass('scroll-down');
            } else {
                $('#masthead .navbar').removeClass('scroll-down');
            }
    
            lastScrollTop = currentScroll;
        });

        if( $('#disclaimerModal')[0] ) {
            var disclaimerModal = new bootstrap.Modal(document.getElementById('disclaimerModal'));
            // setTimeout(function() {
            //     disclaimerModal.show();
            // }, 150);
        }

        var paymentOptionsSwiper = new Swiper('#swiper-payment-options', {
            slidesPerView: 8,
            loop: false,
            speed: 6000,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: "auto",
                    loop: true,
                    centeredSlides: true,
                    spaceBetween: 25,
                    allowTouchMove: false,
                },
                1200: {
                    slidesPerView: 8,
                    loop: false,
                }
            }
        });

        $(document).on('click', '.hamburger', function(e) {
            var $this = $(this);
            if($this.hasClass('is-active')) {
                setTimeout(function() {
                    $this.removeClass('is-active');
                }, 100);
            }
            else {
                setTimeout(function() {
                    $this.addClass('is-active');
                }, 100);
            }
        });
    });
});