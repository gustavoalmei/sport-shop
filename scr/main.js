$(document).ready(function(){
    $('.carousel-images').slick({
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
        speed:1000,
        slidesToShow: 1,
        dots:true,
    })
    console.log($(".slick-dots li button").each(function(){
        $(this).text("")
    }))

    $(".item-menu").mouseenter(function(){
        $(this).find(".sub-menu").slideDown('fast')
    })

    $(".item-menu").mouseleave(function(){
        $(this).find(".sub-menu").slideUp('fast')
    })
})