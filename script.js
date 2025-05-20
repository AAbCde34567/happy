// ✅ Firebase 設定（你的專案）
const firebaseConfig = {
  apiKey: "AIzaSyArXvTtaLXlTUH-K6AEY6ajYQFq9DyJZbg",
  authDomain: "gogogo-c5b38.firebaseapp.com",
  databaseURL: "https://gogogo-c5b38-default-rtdb.firebaseio.com",
  projectId: "gogogo-c5b38",
  storageBucket: "gogogo-c5b38.firebasestorage.app",
  messagingSenderId: "224764421013",
  appId: "1:224764421013:web:125e0e90a49d70d0bd8c9c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ 題目資料
const questions = [
  {
    q: "早期物資缺乏時，人們會將吃剩的糯米飯與蘿蔔絲混合，蒸煮後切片香煎。這道點心不僅是惜物的智慧，更是年節常見的美味。請問這是什麼？",
    options: ["芋頭糕", "碗粿", "蘿蔔糕", "發糕"],
    answer: "蘿蔔糕"
  },
  {
    q: "相傳這種點心是清朝時期，一位糕餅師傅為了解決糕餅保存不易的問題，將鳳梨餡改良後製成。它口感酥鬆、內餡酸甜，成為台灣的代表性伴手禮。請問這是什麼？",
    options: ["太陽餅", "鳳梨酥", "牛舌餅", "綠豆椪"],
    answer: "鳳梨酥"
  },
  {
    q: "這種點心據說源於客家文化，在清明時節常見，人們會採摘鼠麴草或艾草，與糯米粉混合製成外皮，內餡通常包著蘿蔔絲乾、香菇等鹹料，帶有獨特的草本香氣。請問這是什麼？",
    options: ["麻糬", "草仔粿", "紅龜粿", "艾草糕"],
    answer: "草仔粿"
  },
  {
    q: "這種夏季消暑聖品，是將一種名為「愛玉子」的果實洗製而成，凝固後晶瑩剔透，常搭配檸檬、糖水食用，口感滑嫩清爽。請問這是什麼？",
    options: ["仙草", "豆花", "愛玉", "粉圓"],
    answer: "愛玉"
  },
  {
    q: "在台灣廟會或喜慶場合，常能看到這種點心。它以糯米粉製成，通常染成紅色，外型常塑成龜狀或桃形，內餡多為豆沙或花生，象徵著吉祥與長壽。請問這是什麼？",
    options: ["麻糬", "鳳片糕", "紅龜粿", "雙糕潤"],
    answer: "紅龜粿"
  },
  {
    q: "這道甜點源自福建泉州，經由移民傳入台灣。它以黃豆製成，口感滑順，通常搭配糖水、花生、紅豆或粉圓等配料，是台灣街頭巷尾常見的平民甜品。請問這是什麼？",
    options: ["仙草", "杏仁豆腐", "豆花", "豆腐乳"],
    answer: "豆花"
  },
  {
    q: "在早期的農村社會，人們常用糯米製作這種點心，口感Q彈有嚼勁。它常被用來當作祭祀的供品，或是節慶時的點心，現今也有許多不同口味的變化。請問這是什麼？",
    options: ["湯圓", "潤餅", "麻糬", "碗粿"],
    answer: "麻糬"
  },
  {
    q: "這種點心發源於台中，相傳是由一位糕餅師傅發明，因其形狀像太陽且內餡層次分明而得名。它外皮酥脆，內餡香甜麥芽糖，是台中代表性的糕點之一。請問這是什麼？",
    options: ["鳳梨酥", "太陽餅", "奶油酥餅", "月餅"],
    answer: "太陽餅"
  },
  {
    q: "這種消暑點心，將曬乾的植物熬煮後，加入澱粉凝固而成，呈現深褐色。口感滑嫩，常搭配煉乳、芋圓或珍珠食用，尤其在夏天備受歡迎。請問這是什麼？",
    options: ["愛玉", "豆花", "仙草", "米苔目"],
    answer: "仙草"
  },
  {
    q: "這種點心據說源自清朝時期，人們將芋頭蒸熟搗成泥，加入糖和麵粉製成，油炸後外酥內軟，香氣濃郁。它在許多糕餅店或夜市都能見到。請問這是什麼？",
    options: ["芋圓", "芋頭酥", "地瓜球", "芋籤粿"],
    answer: "芋頭酥"
  }
];

let current = 0;
let score = 0;
// ✅ 新增：設定每回合的題目數量
const questionsPerRound = 7;
// ✅ 新增：儲存當前回合的問題列表，用於隨機選取
let currentRoundQuestions = [];

const startScreen = document.getElementById('startScreen');
const startBtn = document.getElementById('startBtn');
const leaderboardEl = document.getElementById('leaderboard');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');
const endScreen = document.getElementById('endScreen');
const quiz = document.getElementById('quiz');
const playAgainBtn = document.getElementById('playAgainBtn');

// ✅ 新增：洗牌函數 (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 載入問題
function loadQuestion() {
  // 從當前回合的問題列表中取出問題
  const q = currentRoundQuestions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = '';
  resultEl.textContent = '';
  nextBtn.style.display = 'none';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.className = 'option';
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

// 檢查答案
function checkAnswer(selected) {
  // 從當前回合的問題列表中檢查答案
  const correct = currentRoundQuestions[current].answer;
  if (selected === correct) {
    resultEl.textContent = '✅ 答對了！';
    score++;
  } else {
    resultEl.textContent = `❌ 答錯了！正確答案是 ${correct}`;
  }
  // 禁用所有選項按鈕，防止重複點擊
  Array.from(optionsEl.children).forEach(button => {
    button.disabled = true;
  });
  nextBtn.style.display = 'inline-block';
}

// 下一題按鈕事件
nextBtn.onclick = () => {
  current++;
  // ✅ 修改：判斷是否達到每回合的題目數量
  if (current < questionsPerRound && current < currentRoundQuestions.length) {
    loadQuestion();
  } else {
    showEndScreen();
  }
};

// 顯示結束畫面
function showEndScreen() {
  quiz.style.display = 'none';
  endScreen.style.display = 'block';
  document.getElementById('scoreDisplay').textContent = `你的總分：${score} 分`;
  document.getElementById('playerName').value = ''; // 清空輸入框
}

// 提交分數
function submitScore() {
  const name = document.getElementById('playerName').value;
  if (!name) return alert('請輸入名字！');
  db.ref('scores').push({ name, score, timestamp: firebase.database.ServerValue.TIMESTAMP }); // 儲存分數和時間戳
  alert('分數已提交！');
  // 顯示排行榜並重置遊戲
  loadLeaderboard();
  resetGame();
}

// 載入排行榜
function loadLeaderboard() {
  leaderboardEl.innerHTML = ''; // 清空現有的排行榜列表
  db.ref('scores').orderByChild('score').limitToLast(5).on('value', (snapshot) => { // 取得分數前五名
    const scores = [];
    snapshot.forEach((childSnapshot) => {
      scores.push(childSnapshot.val());
    });
    scores.sort((a, b) => b.score - a.score); // 確保分數從高到低排列

    leaderboardEl.innerHTML = ''; // 在數據回來後再次清空，確保不會有重複

    scores.forEach((s, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${s.name} - ${s.score} 分`;
      leaderboardEl.appendChild(li);
    });
  });
}

// 重置遊戲
function resetGame() {
  score = 0;
  current = 0;
  // ✅ 新增：每次重置遊戲時，重新隨機選擇並設定本回合的問題
  currentRoundQuestions = shuffleArray([...questions]).slice(0, questionsPerRound);

  endScreen.style.display = 'none';
  startScreen.style.display = 'block'; // 返回開始畫面
  quiz.style.display = 'none';
  loadLeaderboard(); // 重載排行榜
}

// 開始遊戲按鈕事件
startBtn.onclick = () => {
  // ✅ 新增：開始遊戲前，先設定本回合的問題
  currentRoundQuestions = shuffleArray([...questions]).slice(0, questionsPerRound);

  startScreen.style.display = 'none';
  quiz.style.display = 'block';
  loadQuestion();
};

// 再玩一次按鈕事件
playAgainBtn.onclick = () => {
  resetGame();
};

// 初始載入：顯示開始頁面和排行榜
loadLeaderboard();
startScreen.style.display = 'block';
quiz.style.display = 'none';
endScreen.style.display = 'none';