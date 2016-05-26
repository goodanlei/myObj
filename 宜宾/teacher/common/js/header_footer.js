$(function(){

    
    $('.header .header_con .header_list li a').click(function(){
        $(this).addClass('header_active').parent('li').siblings('li').find('a').removeClass('header_active');
    });


    
    $('.header .personal li').click(function(){
        $(this).addClass('personal_active').siblings('li').removeClass('personal_active');
        $(this).find('i').attr('class','red').parent().siblings().find('i').attr('class','grey');

    });
     
    
});
