
    //myCarousel start
        var myCarousel = document.querySelector('#myCarousel')
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 1500
        }) 
        $('.prodit .carousel .carousel-item').each(function () {
            var minPerSlide = 4;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
       //               
                       //myCarousel end

                    //e-mark start
        var myCarousel = document.querySelector('#e-mark')
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 1500
        })
        $('.emark-slider .carousel .carousel-item').each(function () {
            var minPerSlide = 4;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
                         //e-mark end


    //GIR start
    var myCarousel = document.querySelector('#GIR')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500
    })
    $('.GIR .carousel .carousel-item').each(function () {
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
    //GIR end 
                    //HF start
        var myCarousel = document.querySelector('#HF')
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 1500
        })
        $('.HF .carousel .carousel-item').each(function () {
            var minPerSlide = 4;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
                    //HF end

                    
                    
                        //SAHIWAL start
                        var myCarousel = document.querySelector('#SAHIWAL')
                        var carousel = new bootstrap.Carousel(myCarousel, {
                            interval: 1500
                        })
                        $('.SAHIWAL .carousel .carousel-item').each(function () {
                            var minPerSlide = 4;
                            var next = $(this).next();
                            if (!next.length) {
                                next = $(this).siblings(':first');
                            }
                            next.children(':first-child').clone().appendTo($(this));

                            for (var i = 0; i < minPerSlide; i++) {
                                next = next.next();
                                if (!next.length) {
                                    next = $(this).siblings(':first');
                                }

                                next.children(':first-child').clone().appendTo($(this));
                            }
                        });
                        //HF end