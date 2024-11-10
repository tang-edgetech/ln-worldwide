document.addEventListener("DOMContentLoaded", function(event) {
    $(document).ready(function() {
        if( $('#disclaimerModal')[0] ) {
            var disclaimerModal = new bootstrap.Modal(document.getElementById('disclaimerModal'));
            setTimeout(function() {
                disclaimerModal.show();
            }, 150);
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
                768: {
                    slidesPerView: 8,
                    loop: false,
                }
            }
        });
    });
});