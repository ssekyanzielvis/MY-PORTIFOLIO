$(document).ready(function(){
    // Smooth scrolling for navigation links
    $('nav a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            
            const hash = this.hash;
            
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 80
                },
                800
            );
        }
    });
    
    // Initialize Slick Carousel for testimonials
    $('.testimonials-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });
    
    // Form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
    
    // Add active class to current section in navigation
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop() + 100;
        
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
                const id = $(this).attr('id');
                $('nav a').removeClass('active');
                $('nav a[href="#' + id + '"]').addClass('active');
            }
        });
    });
    
    // Trigger scroll event on page load
    $(window).trigger('scroll');
});