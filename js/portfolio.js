$(function() {

  $("#drawerToggle").click(function(){
    $(this).toggleClass("open");
    $(".spNav,.blackBg").toggleClass("sideOpen");
    if($(this).hasClass("open") == false) {　　　　　　　　　                 //もしopenclassが付いてなかったら
      $('body,html').css({"overflow":"visible","height":"auto"});　　　　　　//画面スクロールできる
    }else {　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//そうじゃない時は
      $('body,html').css({"overflow":"hidden","height":"100%"});   　　　　//背景スクロールできない
    }
  });

  $('.blackBg').click(function() {                                         //黒い背景をクリックしたら
      $("#drawerToggle").toggleClass("open");　　　　　　　　　　　　　　　　//ハンバーガーメニューが閉じる
      $(".spNav,.blackBg").removeClass("sideOpen");
      $('body,html').css({"overflow":"visible","height":"auto"})　　　　　//画面スクロールできるようになる
  });


  $(window).on("resize", function() {
    var w = $(window).width();
    if(w > 600) {
      $("#drawerToggle").removeClass("open");
      $(".spNav,.blackBg").removeClass("sideOpen");
      $('body,html').css({"overflow":"visible","height":"auto"});
    }
  });


});
