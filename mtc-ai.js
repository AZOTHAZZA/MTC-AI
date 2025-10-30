// 出力エリア取得
const output = document.getElementById("output");

// ボタンイベント
document.getElementById("generateCurrency").addEventListener("click", async () => {
  const result = await generateCurrency();  // MSGAI 外部関数呼び出し
  output.innerHTML = `<p>${result}</p>`;
});

document.getElementById("processMSGAI").addEventListener("click", async () => {
  const result = await processMSGAI();  // MSGAI 外部関数呼び出し
  output.innerHTML = `<p>${result}</p>`;
});

document.getElementById("callAPI").addEventListener("click", async () => {
  const result = await callExternalAPI();  // API/LLM 外部関数呼び出し
  output.innerHTML = `<p>${result}</p>`;
});
