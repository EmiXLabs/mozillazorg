jQuery(function($) {
    //portfolio
    $(window).load(function(){
        //#main-slider
        $(function(){
            $('#main-slider').carousel({
                interval: 5000
            });
        });
        $('.carousel-indicators li').click(function(e){
            e.stopPropagation();
            var goTo = $(this).data('slide-to');
            $('.carousel-inner .item').each(function(index){
                if($(this).data('id') == goTo){
                    goTo = index;
                    return false;
                }
            });
            $('#main-slider').carousel(goTo);
        });
        $('.carousel-next').click(function(e) {
            $('#main-slider').carousel('next');
        });
        $('.carousel-prev').click(function(e) {
            $('#main-slider').carousel('prev');
        });
        $( '.centered' ).each(function( e ) {
            $(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
        });

        $portfolio_selectors = $('.portfolio-filter >li>a');
        if($portfolio_selectors!='undefined'){
            $portfolio = $('.portfolio-items');
            $portfolio.isotope({
                itemSelector : 'li',
                layoutMode : 'masonry'
            });
            $portfolio_selectors.on('click', function(){
                $portfolio_selectors.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({ filter: selector });
                return false;
            });
        }
    });

    $(window).resize(function(){
        $( '.centered' ).each(function( e ) {
            $(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
        });
    });
    //contact form
    var form = $('.contact-form');
    form.submit(function () {
        $this = $(this);
        $.post($(this).attr('action'), function(data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        },'json');
        return false;
    });

    //goto top
    $('.gototop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    }); 

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    }); 
});

    
