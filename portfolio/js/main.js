// JavaScript Document

//＋モーダルメニュー
$(function () {
    var $body = $('body');

    //開閉用ボタンをクリックでクラスの切替え
    $('#js__btn').on('click', function () {
        $body.toggleClass('open');
    });

    //メニュー名以外の部分をクリックで閉じる
    $('#js__nav').on('click', function () {
        $body.removeClass('open');
    });
});



$(function($) {
    WindowHeight = $(window).height();
    $('.nav-area').css('height', WindowHeight); //メニューをWindowの高さいっぱいにする
    $(document).ready(function() {
        $('.btn').click(function(){ //クリックしたら
            $('.nav-area').animate({width:'toggle'}); //animateで表示・非表示
            $(this).toggleClass('peke'); //toggleでクラス追加・削除
        });
    });
});


function disp(num)
{
   
//		var element = document.getElementById( "page" + i ) ;
//		if(element.attr("class")=="checked"){
//		removeClass("checked").addClass("check");	
//		}else{
//		}

  
		if(num==1){
			//document.getElementById("spMainMenu").style.visibility="visible";
			//document.getElementById("fliper").style.perspective="400px";	
			var idName="spHidden";
			Pelm = document.getElementById(idName);//対象の要素。ID名は spHidden です。
 			Pelm.id="spVisible"; // Pelm のID名を pBoxNew に付け替えます。
  			idName=Pelm.id; // Pelm のID名を取得します。	
			}else{
			//document.getElementById("spMainMenu").style.visibility="hidden";
			var idName="spVisible";
			Pelm = document.getElementById(idName);//対象の要素。ID名は pBox0 です。
 			Pelm.id="spHidden"; // Pelm のID名を pBoxNew に付け替えます。
  			idName=Pelm.id; // Pelm のID名を取得します。	
			
		}

}




//■page topボタン
$(function(){
var topBtn=$('#pageTop');
topBtn.hide();
 
//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>200){
    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();
  }else{
    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();
  } 
});
 
// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
});

});


$('#menu2').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutBounce", //available with jQuery UI
	prependTo:'#demo2'
});


function moveRemove(){
	
	
	var chch = document.getElementById("pure-toggle-left");
	chch.checked = false;
	
	if(chch == true){
		chch == false;
	}else{
	}
	
}
