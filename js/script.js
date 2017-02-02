$('nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

$(window).resize(function(){
    var width = $(window).width();
    if (width > 768) {
        $('#desktopnav').removeAttr('style');
    }
});

// $(window).resize(function(){
//     var width = $(window).width();
//     if (width < 768) {
//         $('body div').removeAttr('class');
//     }
// });

var winwidth = $(window).width();

if (winwidth < 769) {
    $('#desktopnav li').click(toggleMenu);
};

$('#mobilenav').click(toggleMenu);



function toggleMenu(){
    $('#desktopnav').slideToggle();
};