jQuery(document).ready(function ($) {
    $('a[data-rel^=lightcase]').lightcase(); //简单例子

    $('a[data-rel="lightcase:example_group:slideshow"]').lightcase({showSequenceInfo: false, transition: 'scrollHorizontal'}); //相册例子

    $('a[data-rel="lightcase:example_group"]').lightcase({showSequenceInfo: false});
    $('#example1').lightcase({transition: 'none'});
    $('#example2').lightcase({transition: 'fade'});
    $('#example3').lightcase({transition: 'elastic'});
    $('#example4').lightcase({transition: 'scrollTop'});
    //video as html5 with fallback
    $('#various5').lightcase({
        showSequenceInfo: false,
        onStart: function () {
            html5media();
        }
    });
    // video as iframe
    $('#various6').lightcase({
        iframe: {
            width: 516,
            height: 315,
            frameborder: 0
        }
    });
    // video as flash
    $('#various7').lightcase({
        type: 'flash',
        flash: {
            width: 516,
            height: 315
        }
    });
});
window.onload = function () {
    var oA = document.getElementsByTagName(".light-box a");
    var oAu = document.getElementById("au");
    function theImg() {
        for (var i = 0; i <= oA.length; 3 * i++) {

        }
    }
};


//side-bar
$(function () {
    $(".side-bar a span").click(function () {
        var i = $(this).index();
        $('.side-bar a span').attr('class', '');
        $(this).attr('class', 'icon');
    });
});
$(function () {
//index-2
    $('.menu a').click(function () {

        var i = $(this).index();
        $('.menu a').attr('class', '');
        $(this).attr('class', 'active');
        $('.light-box').find('div').css('display', 'none');
        $('.light-box').find('div').eq(i).css('display', 'block');
    });

    $('.menu button').click(function () {
        var i = $(this).index();
        $('.menu button').attr('class', '');
        $(this).attr('class', 'btn');
    });
});