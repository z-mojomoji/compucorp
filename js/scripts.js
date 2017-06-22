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



$(document).ready(function(){

//Header Sliderin 
var navHeight = $('.Header').innerHeight();
$('.Header').css("top", -navHeight);

//Slider

var slnum= 0; //current Slide
var maxnum = ($(".Slider-page").length)-1; //number of all slides
var pageWidth = $(".Slider-container").innerWidth(); //get the width of container

$('.Slider-page').css('width', pageWidth);

var toSlide = $(".Slider-page").innerWidth(); //width per slide

$(window).resize(function() {
    toSlide = $(".Slider-page").innerWidth(); //width per slide
});
    
$('.Slider').on('click','.Slider-paginationDot',function(){
    var getPage=$(this).attr('pagenum');
    slnum = parseInt(getPage);
    $('.Slider-paginationDot').removeClass('Slider-paginationDot--active');
    $('.page'+slnum).addClass('Slider-paginationDot--active');
    var lefarrnum = -(parseInt(slnum)*toSlide);//change width of a page
    $('.Slider-containerList').animate({left:lefarrnum},{queue: false, duration: 300});
});
    
// clear auto slide
$('.Slider').on('mouseover',function(){
	window.clearInterval(timerA);
}).on('mouseout',function(){
	timerA = window.setInterval("autoslide()", 5000);
});    

});

// auto slide1
var btnnum = 0;
var timerA;
timerA = window.setInterval("autoslide()", 5000);
function autoslide(){ 
    var lastSlide = ($(".Slider-page").length)-1; //number of all slides 
	btnnum = parseInt(btnnum)+1;
	if(btnnum>lastSlide){btnnum=0;}//change page number accordingly
	jQuery('.Slider-paginationDot.page'+ btnnum).click();
}
 