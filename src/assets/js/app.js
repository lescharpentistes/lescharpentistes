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

$('#container').imagesLoaded( { background: true }, function() {
    console.log('#container background image loaded');
});




$("#menu-btn").click(function(e){
    e.stopPropagation();
    if ($("#st-container").hasClass("st-menu-open")) {
        $("#st-container").removeClass("st-menu-open");
    }
    else {
        $("#st-container").addClass("st-menu-open");
    }
    $(this).toggleClass("is-active");

});

$(document).click(function(){
    if($("#st-container").hasClass("st-menu-open")) {
        $("#st-container").removeClass("st-menu-open");
        $("#menu-btn").removeClass("is-active");

    }
});



emergence.init({
    container: window,
    reset: true,
    handheld: true,
    throttle: 250,
    elemCushion: 0.15,
    offsetTop: 0,
    offsetRight: 0,
    offsetBottom: 0,
    offsetLeft: 0,
    callback: function(element, state) {
        if (state === 'visible') {
            console.log('Element is visible.');
        } else if (state === 'reset') {
            console.log('Element is hidden with reset.');
        } else if (state === 'noreset') {
            console.log('Element is hidden with NO reset.');
        }
    }
});
