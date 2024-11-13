const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time)=>{
    lenis.raf(time * 750)
});

gsap.ticker.lagSmoothing(0);

$(document).ready(function() {
    var $wrapper = $('.scroll-sliders');
    var $slides = $('.scroll-slide');
    var $content = $('.content-item');
    var totalItem = $slides.length;
    var slideOffsets = [];
    var bgOffsets = [];
    var windowHeight = $(window).height();
    var wrapperPosTop = $wrapper.offset().top;

    // Set the height of the wrapper
    $wrapper.height((totalItem) * windowHeight);

    // Calculate and store the offset for each slide
    for (var $i = 0; $i < totalItem; $i++) {
        var offset = wrapperPosTop + ($i * windowHeight);
        slideOffsets.push(offset);
    }

    for (var $i = 0; $i <= totalItem; $i++) {
        var marker = (wrapperPosTop + ($i * windowHeight));
        var bgOffset =(wrapperPosTop + ($i * windowHeight)) - (windowHeight/2);
        $('body').append('<div class="mark-point point-'+$i+'" style="top: '+marker+'px"></div>');
        var bgOffset =(wrapperPosTop + ($i * windowHeight)) - (windowHeight/2);
        bgOffsets.push(bgOffset);
    }

    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var markedIndex = -1;
        var bgMarkedIndex = -1;

        // Determine which slide should be marked
        for (var i = 0; i < slideOffsets.length; i++) {
            if (scrollTop >= slideOffsets[i] - windowHeight / 2 && scrollTop < slideOffsets[i] + windowHeight / 2  ) {
                markedIndex = i;
                break;
            }
        }

        for (var i = 1; i <= bgOffsets.length; i++) { 
            if( i > bgOffsets.length-1 ) {
                if (scrollTop >= bgOffsets[i] - windowHeight / 2 && scrollTop < bgOffsets[i] + windowHeight / 2) {
                    bgMarkedIndex = i;
                    break;
                }
            }
            else {
                if (scrollTop >= bgOffsets[i] - windowHeight / 2 && scrollTop < bgOffsets[i] + windowHeight / 2) {
                    bgMarkedIndex = i;
                    break;
                }
            }
        }
        
        $('.scroll-slide:not(:nth-child('+(markedIndex+1)+'))').removeClass('marked');
        $('.content-item:not(:nth-child('+(markedIndex+1)+'))').removeClass('show');
        if (markedIndex !== -1) {
            $slides.eq(markedIndex).addClass('marked');
            $content.eq(markedIndex).addClass('show');
        }

        // Adjust the 'top' property of the marked slide
        if ( markedIndex !== -1 && markedIndex < slideOffsets.length - 1 ) {
            var nextCheckpoint = slideOffsets[markedIndex + 1];
            var distanceToNextCheckpoint = nextCheckpoint - slideOffsets[markedIndex];
            var scrollDistance = nextCheckpoint - scrollTop;
            var percentage = ( (scrollDistance / distanceToNextCheckpoint) - 0.5 ) * 100;
        }

        if( bgMarkedIndex !== -1 && bgMarkedIndex <= bgOffsets.length ) {
            var nextCheckpoint = bgOffsets[bgMarkedIndex + 1];
            var distanceToNextCheckpoint = nextCheckpoint - bgOffsets[bgMarkedIndex];
            var scrollDistance = nextCheckpoint - scrollTop;
            var percentage = ( (scrollDistance / distanceToNextCheckpoint) - 0.5 ) * 100;
            $slides.eq(bgMarkedIndex).css('top', percentage + '%');
            var $background = $slides.eq(bgMarkedIndex).find('.scroll-background');
            $background.css('transform', 'translate3d(0, -'+percentage+'%, 0)');
        }
    });
});