$('nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 900,
    scrollThreshold: .1,
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

var winwidth = $(window).width();

if (winwidth < 769) {
    $('#desktopnav li').click(toggleMenu);
};

$('#mobilenav').click(toggleMenu);

$(document).scroll(function() {
    $('nav').addClass('scrolled');
});

$(document).ready(function() {
        $(".fancybox").fancybox();
    });

function toggleMenu(){
    $('#desktopnav').slideToggle();
    $('nav').toggleClass('clicked');
};