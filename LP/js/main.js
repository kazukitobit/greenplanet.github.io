var app = new Vue({
	el:"#app",
	data:{
		minute:0,
		second:0,
		decimal:0,
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
			this.obj = setInterval(
				function(){ self.countUp(); }, //関数
				10							//次の実行時間　(ms　0.01秒)
			)

		},
		textStop(){
			this.mode = 0; //スタートしていない状態
			clearInterval(this.obj); //textStertと紐づける
		},
		textClear(){
			this.minute =0;
			this.second =0;
			this.decimal =0;
		},
		countUp(){
			this.decimal++; /*一ずつカウント*/
			if (this.decimal>99) {
				this.second++; //99超えたら１カウント
				this.decimal = 0; //99超えたらminuteをクリア
			}
			if (this.second>59) {
				this.minute++; //59秒超えたら１カウント
				this.second = 0; //59超えたらsecondをクリア
			}
		},
		abjustNum(){	
		if (String(this.decimal).length<2) this.decimal = '0' + String(this.decimal); //数字が１以下の場合は０を増やす　文字型に変換
		if (String(this.second).length<2) this.second = '0' + String(this.second);
		if (String(this.minute).length<2) this.minute = '0' + String(this.minute);
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