$(function () {
    $('.main_slide').slick({
        autoplay: true,
        arrows: false,
        fade: true,
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');

        current.addClass('on').siblings().removeClass('on');
        $('.main_vi .slide_num span').text(c ? (c + 1) : 1);
        $('.main_vi .slide_num strong').text(s.slideCount);
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.trend_slide').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $('.btn_list .to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    
});