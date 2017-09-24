$(document).foundation();

// Changing the defaults
window.sr = ScrollReveal({ reset: false });

// Customizing a reveal set
sr.reveal('.sr', {
    origin: 'right',
    duration: 2500,
    rotate: { x: 0, y: 0, z: 0 },
    delay: 3,
    easing: 'ease'
});

sr.reveal('.sr-b', {
    origin: 'bottom',
    duration: 2500,
    delay: 3,
    easing: 'ease'
});

sr.reveal('.sr-box', {
    duration: 1200,
    distance: '2rem'
}, 200);




// $(document).ready(function(){
//     $('.sl').slick({
//         // autoplay: true,
//         adaptiveHeight: false,
//         vertical: true,
//         verticalSwiping: true,
//
// });
// });

// $(".no-filter-call").hover(
//     function () {
//     $(".no-filter-applied").css({"background":"linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"});
// });

$(".cursor-pointer").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});

