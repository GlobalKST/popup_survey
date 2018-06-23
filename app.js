$(document).ready(function () {
    $('label').hover(function(){
        $(this).prev('.ontent__image').addClass('onhover');
    }, function(){
        $(this).prev('.ontent__image').removeClass('onhover');
    });
});

$(document).ready(function(){
    $('label').hover(function(){
        $(this).prev('.content__image').addClass('onhover');
    }, function(){
        $(this).prev('.content__image').removeClass('onhover');
    });
});