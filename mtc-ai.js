// 安定ボタン / 関数の土台（シンプルな実装）
const baseCurrencyGenerator = () => {
  // デモ実装：乱数を用いるが実際は安定ロジックに差し替えてください
  return `通貨生成完了: ¥${(Math.floor(Math.random()*9000)+1000).toLocaleString()}`;
};

const baseMSGAIProcess = () => {
  return `MSGAI 処理完了: ${new Date().toLocaleString()}`;
};

// DOM 接続（存在確認を厳密に）
const genBtn = document.getElementById('generate-btn');
const msaiBtn = document.getElementById('msai-btn');
const curOut = document.getElementById('currency-output');
const msaiOut = document.getElementById('msai-output');

if (genBtn && curOut) {
  genBtn.addEventListener('click', () => {
    curOut.textContent = baseCurrencyGenerator();
  });
} else {
  console.error('generate-btn または currency-output が見つかりません');
}

if (msaiBtn && msaiOut) {
  msaiBtn.addEventListener('click', () => {
    msaiOut.textContent = baseMSGAIProcess();
  });
} else {
  console.error('msai-btn または msai-output が見つかりません');
}

// 論理的完了（デモ：ロード時に一度だけ無効化する場合）
let mtcAiCompleted = false;
function completeMtcAi() {
  if (!mtcAiCompleted) {
    mtcAiCompleted = true;
    console.log("MTC-AI 論理的完了: 応答機能無効化（デモ）");
    // もし本当に無効化するなら以下を有効化
    // genBtn.disabled = true;
    // msaiBtn.disabled = true;
  }
}
window.addEventListener('load', () => {
  // デバッグ時は完了をコメントアウトしてボタンを使えるようにする
  // completeMtcAi();
});
