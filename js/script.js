$(document).ready(function() {
// alert('hi');
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

$(".fancybox").fancybox();


function toggleMenu(){
    $('#desktopnav').slideToggle();
    if ($('#mobilenav').hasClass('fa fa-bars')) {
        $('#mobilenav').removeAttr('class').addClass('fa fa-times');
    } else {
        $('#mobilenav').removeAttr('class').addClass('fa fa-bars');
    };
    $('nav').toggleClass('clicked');
};


});