$(function(){
$('.button__search').on('click', function(){
    
    //1 спосіб
    /*setInterval(function(){
        setTimeout(function(){
    $('.search__field').css('display', 'block')},1000);
        },1000);*/
        
        //2 спосіб
        $('.search__field').fadeToggle('slow','swing');
       
       //3 спосіб
       $('.search__field').animate({'left':'0'}, 1000);
       if($(window).width() < 1290) {
        $('.button__search').css('display', 'none');
        $('.search__field').css('width', '150px');

    }
});
$('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle('medium', function(){
        if ($(this).is(':visible'))
        $(this).css('display','inline-block');
    });
});

});
var image = document.getElementById("test"); //Выбираем картинку
setInterval(function(){
    setTimeout(function(){
        image.style.display = "inline-block";//скрывем
        setTimeout(function(){
            image.style.display = "none";//проявляем
        },500);
    },500);
},1000);