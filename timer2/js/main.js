var app = new Vue({
	el:"#app",
	data:{
		hour:3,
		minute:0,
		second:0,
		obj:null,
		mode:0, //デフォルトの状態
	},
	methods:{
		textStart(){

			if (this.mode==1) { //モードが１(スタート)の場合はここで中断する(2度押し防止)
				return false;
			}
			this.mode = 1; //スタートしている状態(判定されないために必ずIF文の下に書く)

			var self = this;  //thisの階層が異なる場合、thisをselfとすることにより紐づけることが可能
			this.obj = setInterval(			//setInterval…一定時間ごとに特定の処理を繰り返す
				function(){ self.countDown(); }, //関数
				1000							//次の実行時間　(1秒ごとに処理)
			)

		},
		textStop(){
			this.mode = 0; //スタートしていない状態
			clearInterval(this.obj); //textStertと紐づける
		},
		textClear(){
			this.hour =3;
			this.minute =0;
			this.second =0;
		},
		countDown(){
			if (this.second==0) {	
			//時間と分が０になった時
				if(this.four==0 && this.minute==0) {
					this.stop();　//STOP
					alert('完了'); //アラート表示
					return;			//処理を停止(カウントダウンはここで終わり)
				}else if (this.minute>0) {		//０より大きくなったらminuteを１減少
					this.minute--; 
					this.second=59; 		//secondに59与える
				}else if (this.hour>0) {	//this.hour>0 && this.minute == 0
					this.hour--; 			//hourを１減少
					this.minute = 59;		//minuteに59与える
					this.second = 59; 		//secondに59与える
				}
			}else{
				this.second--; /*一ずつカウント*/
			}
		},
		abjustNum(){	
		if (String(this.second).length<2) this.second = '0' + String(this.second); //数字が１以下の場合は０を増やす　文字型に変換
		if (String(this.minute).length<2) this.minute = '0' + String(this.minute);
		if (String(this.hour).length<2) this.hour = '0' + String(this.hour);
		},
	},
	// DOMの読み込み完了後
	mounted(){	//abjustNum呼び出し　初期表示で実行
		this.abjustNum();
	},
	// data内の変数の数値が変化したら
	updated(){	//abjustNum呼び出し　カウントしてから実行
		this.abjustNum();
	},

});