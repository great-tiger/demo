$(function(){
    $(".menu-block>li").mouseover(function () {
        $(this).children('.menu-nav').show();
    }).mouseout(function () {
        $(this).children('.menu-nav').hide();
    });

    $("#contact li[img]").click(function () {
        var img = $(this).attr('img');
        var codeImg = $("#code");
        if (!codeImg.is(':visible')) {
            codeImg.show();
        }
        var src = codeImg.attr("src");
        codeImg.attr('src', 'images/' + img);
    });
});