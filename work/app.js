/****************
 * おみくじアプリで使うJavaScript
 ***************/

// 画面を初期設定する
let shokiSettei = () => {

  // おみくじ結果パネルを隠す
  kakusuPanel(kekkaPanel);

  // 戻るボタンを隠す
  kakusuPanel(modoruButton);

  // タイトル画面のおみくじ画像を設定する
  setteiHomeImage('r.png');

}

// おみくじの中身
let omikujiNakami = [
  { // 凶の設定
  　kekkaTitle:'悲しい', // おみくじの結果のタイトル文
    kekkaSetsumei: 'そっとしといてね', // おみくじの結果につける説明文
    kekkaImage: 'k.png' //おみくじの結果に表示する画像
  },
  { // 凶の設定
  　kekkaTitle:'悲しい', // おみくじの結果のタイトル文
    kekkaSetsumei: 'そっとしといてね', // おみくじの結果につける説明文
    kekkaImage: 'k.png' //おみくじの結果に表示する画像
  },
  { // 凶の設定
  　kekkaTitle:'悲しい', // おみくじの結果のタイトル文
    kekkaSetsumei: 'そっとしといてね', // おみくじの結果につける説明文
    kekkaImage: 'ｋ.png' //おみくじの結果に表示する画像
  },
    { // 凶の設定
  　kekkaTitle:'悲しい', // おみくじの結果のタイトル文
    kekkaSetsumei: 'そっとしといてね', // おみくじの結果につける説明文
    kekkaImage: 'ｋ.png' //おみくじの結果に表示する画像
  },

　 { // 吉の設定
  　kekkaTitle:'嬉しい', // おみくじの結果のタイトル文
    kekkaSetsumei: '今日は絶好調', // おみくじの結果につける説明文
    kekkaImage: 'u.png' //おみくじの結果に表示する画像
  },
　  { // 吉の設定
  　kekkaTitle:'嬉しい', // おみくじの結果のタイトル文
    kekkaSetsumei: '今日は絶好調', // おみくじの結果につける説明文
    kekkaImage: 'u.png' //おみくじの結果に表示する画像
  },
  { // 吉の設定
  　kekkaTitle:'嬉しい', // おみくじの結果のタイトル文
    kekkaSetsumei: '今日は絶好調', // おみくじの結果につける説明文
    kekkaImage: 'u.png' //おみくじの結果に表示する画像
  },
  { // 小吉の設定
    kekkaTitle: '怒っている', // おみくじの結果のタイトル文
    kekkaSetsumei: '近づくと殺されるかも', // おみくじの結果につける説明文
    kekkaImage: '0.png' //おみくじの結果に表示する画像
  },
  { // 小吉の設定
    kekkaTitle: '怒っている', // おみくじの結果のタイトル文
    kekkaSetsumei: '近づくと殺されるかも', // おみくじの結果につける説明文
    kekkaImage: '0.png' //おみくじの結果に表示する画像
  },
  { // 大吉の設定
    kekkaTitle: '恋してる', // おみくじの結果のタイトル文
    kekkaSetsumei: '恋してる！？', // おみくじの結果につける説明文
    kekkaImage: 'koi.png' //おみくじの結果に表示する画像
  }
];

// ルーレットの中身
let omikujiRoulette = [
'o.png',
'k.png',
'u.png',
'koi.png'
];
// ルーレットを表示する関数
let miseruRoulette = () => {
  let saikoroKekka = furuSaikoro(omikujiRoulette.length);
  setteiHomeImage(omikujiRoulette[saikoroKekka]);
}
// おみくじの結果を見せる
let miseruOmikujiKekka = () => {
  // ルーレットに使っていた画像を隠す
  kakusuPanel(omikujiImage);

  // タイトル画面のおみくじ画像を設定する
  setteiHomeImage('omikuji.png');

  // おみくじの中身の数までが出るサイコロをふる
  let saikoroKekka = furuSaikoro(omikujiNakami.length);

  // 出て来たサイコロの目からおみくじの結果を得る
  let omikujiKekka = omikujiNakami[saikoroKekka];

  // おみくじの結果からタイトルを画面に貼り付ける
  setteiKekkaTitle(omikujiKekka.kekkaTitle);

  // おみくじの結果から説明を画面に貼り付ける
  setteiKekkaSetsumei(omikujiKekka.kekkaSetsumei);

  // おみくじの結果から画像を画面に貼り付ける
  setteiKekkaImage(omikujiKekka.kekkaImage);

  // おみくじの結果画面を表示する
  miseruPanel(kekkaPanel);

  // 「戻る」ボタンを表示する
  miseruPanel(modoruButton);

}
// おみくじを引く
let hikuOmikuji = () => {
 // 「おみくじを引く」ボタンを隠す
  kakusuPanel(hikuButton);

  // 0.1秒で画像を変えるルーレットのアニメーションを開始する
  let rouletteTimer = kurikaesuTimer(miseruRoulette,100);

  // 3秒待って結果を表示する
  matsuTimer(()=>{
    // ルーレットのタイマーを止める
    tomeruTimer(rouletteTimer);

    // おみくじの結果を見せる
    miseruOmikujiKekka();

  },3000); // 3000ミリ秒=3秒に設定

}

// 読み込み終わったら初期設定を実行する
shokiSettei();