// $(function(){
//     var date = new Date();
//     date.setDate(date.getDate() - 1);
//     // $('#example').popover(options)
//     $(".tl_triangle").hide();
//     $('.nav-tabs li').hover(function() { 
//         var index=$(this).index(); 
//         $('.tl_content .tab-pane').eq(index).show().siblings().hide(); 
//         $(this).find(".tl_triangle").toggle();  
//     });
//     $(".tl_arrow span").hide();
//     $(".tl_arrow").css("background-image","none");
//     $(".tl_arrow").mouseover(function(){
//         $(".tl_arrow span").show();
//     })
//     $(".tl_arrow").mouseout(function(){
//         $(".tl_arrow span").hide();
//     })
//     $(".tl_jump").click(function(){
//         $(".tl_jump").css({
//             "background-color":"DD4F1C",
//             "border-color":"transparent"
//         });
//     });
// })

$(function(){
    $('.tab-content .tl_company').hide();
    $(".tl_headquarters").show();
    $('.nav-justified li').hover(function() { 
        var index=$(this).index(); 
        $('.tab-content .tl_company').eq(index).show().siblings().hide(); 
        $(this).find(".tl_hand").toggle();

    });
    $('[data-toggle="tooltip"]').tooltip();
});
$(function(){
    $('.tl_teamleft li').hover(function() { 
        var index=$(this).index(); 
        $('.tab-content .tab-pane').eq(index).show().siblings().hide(); 
        $(this).find(".tl_hand").toggle();

    });
});
// $(document).ready(function() {
//     $('.slider-for').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         fade: true,
//         asNavFor: '.slider-nav'
//     });
//     $('.slider-nav').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         asNavFor: '.slider-for',
//         centerMode: true,
//         focusOnSelect: true
//     });
// });


// $(function(){
//     $(".tl_top").hide();
//     $("window").scroll(function(){
//         if ($(window).scrollTop()>100){
//             $(".tl_top").fadeIn(1000);
//         }
//         else
//         {
//             $(".tl_top").fadeOut(1000);
//         }
//     })
//     $(".tl_top").click(function(){
//         $('body,html').animate({scrollTop:0},100);
//         return false;
//     })
// })

