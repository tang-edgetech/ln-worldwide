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
            loop: true,
            autoplay: {
                delay: 8000,
                disableOnInteraction: true,
            }
        });
    });
});