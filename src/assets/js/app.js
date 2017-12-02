$(document).foundation();

var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});

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





