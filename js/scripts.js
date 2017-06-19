// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.Header').addClass('Header--sticky');
    } else {
        $('.Header').removeClass('Header--sticky');
    }
});

// Mobile Navigation
$('.NavigationBar-toggle').click(function() {
    if ($('.Header').hasClass('NavigationBar--open')) {
        $('.Header').removeClass('NavigationBar--open');
    } else {
        $('.Header').addClass('NavigationBar--open');
    }
});

$('.NavigationBar-link').click(function() {
    if ($('.Header').hasClass('NavigationBar--open')) {
        $('.Header').removeClass('NavigationBar--open');
    }
});

// navigation scroll lijepo radi materem
// $('nav a').click(function(event) {
//     var id = $(this).attr("href");
//     var offset = 70;
//     var target = $(id).offset().top - offset;
//     $('html, body').animate({
//         scrollTop: target
//     }, 500);
//     event.preventDefault();
// });