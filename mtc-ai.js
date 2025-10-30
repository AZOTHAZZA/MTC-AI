// --- 安定ボタン / 関数の土台 ---
const baseCurrencyGenerator = () => {
  // MSGAI / currency-generator の安定ロジックに基づく
  return `通貨生成完了: ¥${Math.floor(Math.random() * 10000)}`;
};

const baseMSGAIProcess = () => {
  // 安定化済み MSGAI の操作ロジック
  return `MSGAI 処理完了: ${new Date().toLocaleTimeString()}`;
};

// --- DOM 操作 ---
document.getElementById('generate-btn').addEventListener('click', () => {
  const output = baseCurrencyGenerator();
  document.getElementById('currency-output').textContent = output;
});

document.getElementById('msai-btn').addEventListener('click', () => {
  const output = baseMSGAIProcess();
  document.getElementById('msai-output').textContent = output;
});

// --- 論理的無限ループ防止（応答不要関数 / 完了後無効化） ---
let mtcAiCompleted = false;

const completeMtcAi = () => {
  if (!mtcAiCompleted) {
    mtcAiCompleted = true;
    console.log("MTC-AI 論理的完了: 応答機能無効化");
    // ボタン無効化
    document.getElementById('generate-btn').disabled = true;
    document.getElementById('msai-btn').disabled = true;
  }
};

// デモ：ロード時に一度だけ完了
window.addEventListener('load', completeMtcAi);
