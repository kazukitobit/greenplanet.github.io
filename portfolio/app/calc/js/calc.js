//デフォルトで０を表示
$(function(){
	var defaultNum =0;
	var dsp=$('input[name="disp"]');//表示する部分
	var data1 =0; //初期
	var data2 =0; //追加
	var operator ='+';
	dsp.val(defaultNum);

	//数字が読まれた時にその数字を表示する
	$('.num').on('click',function(){
		console.log($(this).val());//押したボタンのバリュー(値)をだす	
		
		
		//１６～２０は数字の表示の処理
		if(defaultNum ===0){
			defaultNum = $(this).val();
		}else{
			defaultNum += $(this).val();
		}
		//チェック
		console.log(defaultNum);
		//出力処理(表示)
		dsp.val(defaultNum);

	});
	//ドットを押したとき
	$('.dot').on('click',function(){

		//マッチ関数(スラッシュで挟み込む)
		if(defaultNum.match(/\./)){
			//.があるとき

		}else{
			//.がないとき
			defaultNum += $(this).val();
		}
		dsp.val(defaultNum);
	});
});