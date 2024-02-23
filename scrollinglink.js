$(document).ready(function() {
    // Smooth scrolling for links with the "scroll-link" class
    $(".scroll-link").click(function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800);
        
        // Add an "active" class to the clicked link
        $(".scroll-link").removeClass("active");
        $(this).addClass("active");
    });
});
