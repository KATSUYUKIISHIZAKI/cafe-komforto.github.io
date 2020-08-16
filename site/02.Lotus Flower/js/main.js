 // JavaScript Document
 $("document").ready(function(){
  $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '15%',
		responsive: [{
			breakpoint: 480,
                    settings: {
                         centerMode: false
                    }
               }
          ]
  });
});





$(function () {
$('#navi').each(function () {

var $window = $(window),
$header = $(this),
// ヘッダーのクローン
$headerClone = $header.contents().clone();
// ヘッダーのクローンのコンテナー
$headerCloneContainer = $('<div id="header_clone"></div>'),
// HTML の上辺からヘッダーの底辺までの距離 = ヘッダーのトップ位置 + ヘッダーの高さ
threshold = $header.offset().top + $header.outerHeight();
// コンテナーにヘッダーのクローンを挿入
$headerCloneContainer.append($headerClone);
// コンテナーを body の最後に挿入
$headerCloneContainer.appendTo('body');
// スクロール時に処理を実行するが、回数を 1 秒間あたり 15 までに制限
$window.on('scroll', $.throttle(1000 / 15, function(){
if($window.scrollTop() > threshold){
$headerCloneContainer.addClass('visible');
} else {
$headerCloneContainer.removeClass('visible');
}

}));
// スクロールイベントを発生させ、初期位置を決定
$window.trigger('scroll');

});

});


$(function () {

    /*
     * Back-toTop button (Smooth scroll)
     */
    $('.back-to-top').on('click', function () {

        // Smooth Scroll プラグインを実行
        $.smoothScroll({
            easing: 'easeOutExpo', // イージングの種類
            speed: 2000             // 所要時間
        });
    });

});



$(function () {
$('#mainnav').each(function () {

var $window = $(window),
$header = $(this),
// ヘッダーのクローン
$headerClone = $header.contents().clone();
// ヘッダーのクローンのコンテナー
$headerCloneContainer = $('<div id="header_clone"></div>'),
// HTML の上辺からヘッダーの底辺までの距離 = ヘッダーのトップ位置 + ヘッダーの高さ
threshold = $header.offset().top + $header.outerHeight();
// コンテナーにヘッダーのクローンを挿入
$headerCloneContainer.append($headerClone);
// コンテナーを body の最後に挿入
$headerCloneContainer.appendTo('body');
// スクロール時に処理を実行するが、回数を 1 秒間あたり 15 までに制限
$window.on('scroll', $.throttle(1000 / 15, function(){
if($window.scrollTop() > threshold){
$headerCloneContainer.addClass('visible');
} else {
$headerCloneContainer.removeClass('visible');
}

}));
// スクロールイベントを発生させ、初期位置を決定
$window.trigger('scroll');

});

});


