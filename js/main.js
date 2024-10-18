// start typed.js plugin

var typed2 = new Typed('#typed2', {
    strings: ['Web Designer', ' Web Developer'],
    typeSpeed: 150,
    backSpeed: 150,
    fadeOut: true,
    loop: true
  });

// go down arrow
$(window).scroll(function(){
    let scrollValue = $(this).scrollTop();
    if(scrollValue < 100){
        $(".fa-arrow-down").fadeIn()
    }
    else{
        $(".fa-arrow-down").fadeOut()
    }

})
$(window).scroll(function(){
    let scrollValue = $(this).scrollTop();
    if(scrollValue > 100){
        $('.gotoup').fadeIn();
        $('.navbar').css({backgroundColor: '#0a0a0e99',});
    }
    else{
        $('.gotoup').fadeOut()
        $('.navbar').css({backgroundColor: 'transparent'});
    }
})
$('.gotoup').click(function(){
    $('body,html').animate({scrollTop : 0},500)
})
$('.nav-link').click(function(){
    let divName = $(this).attr('href');
    let offsetValue = $(divName).offset().top;
    $('body,html').animate({scrollTop : offsetValue},500)
})