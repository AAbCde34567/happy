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
        "q": "相傳古代有一位孝子，為醫治臥病在床的母親，四處尋訪良藥。某日夢見神明指點，醒來後在山中發現一種植物，熬煮後給母親服用，母親的病情竟因此好轉。後人為紀念這位孝子，便將這種植物製成甜點，成為夏季消暑聖品。請問這是什麼？",
        "options": ["仙草", "愛玉", "豆花", "粉粿"],
        "answer": "仙草"
    },
    {
        "q": "根據記載，某種傳統點心起源於明朝，最初是為了在科舉考試中幫助考生提神醒腦而發明。這種點心以黃豆為主要原料，經過研磨、過濾、煮沸、凝固等多道工序製成。口感細膩滑潤，通常搭配糖水、花生、紅豆等配料。請問這是什麼？",
        "options": ["仙草", "豆花", "愛玉", "米苔目"],
        "answer": "豆花"
    },
    {
        "q": "台灣特有的一種甜點，據說是由清朝道光年間，一位住在嘉義的富人，偶然發現一種藤蔓植物的果實內部有果膠，經過搓揉後會凝結成凍狀。後來被引進原住民部落，成為他們夏季解渴的飲品。請問這是什麼？",
        "options": ["仙草", "愛玉", "豆花", "粉圓"],
        "answer": "愛玉"
    },
    {
        "q": "某種糕點在台灣傳統習俗中，常用於節慶祭祀或喜慶場合，特別是農曆新年。其名稱與「年年高升」諧音，寓意吉祥。這種糕點以糯米粉為主，可蒸可炸，口感Q彈。請問這是什麼？",
        "options": ["發糕", "紅龜粿", "年糕", "草仔粿"],
        "answer": "年糕"
    },
    {
        "q": "台灣傳統婚禮習俗中，新娘出嫁時，新娘的母親會準備一種甜湯讓新娘和新郎食用，象徵甜甜蜜蜜、早生貴子。這種甜湯通常以糯米製成圓形，形狀飽滿。請問這是什麼？",
        "options": ["湯圓", "元宵", "紅豆湯", "綠豆湯"],
        "answer": "湯圓"
    },
    {
        "q": "台灣清明節掃墓時，人們會準備這種點心祭拜祖先，象徵對祖先的追思與敬意。這種點心外皮呈現草綠色，內餡通常是蘿蔔絲、香菇、蝦米等。請問這是什麼？",
        "options": ["紅龜粿", "草仔粿", "艾草粿", "發粿"],
        "answer": "草仔粿"
    },
    {
        q: "這種點心據說源自清朝時期，人們將芋頭蒸熟搗成泥，加入糖和麵粉製成，油炸後外酥內軟，香氣濃郁。它在許多糕餅店或夜市都能見到。請問這是什麼？",
        options: ["芋圓", "芋頭酥", "地瓜球", "芋籤粿"],
        answer: "芋頭酥"
    },
    {
        "q": "在台灣傳統習俗中，嬰兒出生滿四個月時，會舉辦「收涎」儀式。此時會在嬰兒脖子上掛上多個小餅乾，並請親友替嬰兒收涎。請問這種餅乾通常是什麼形狀，象徵什麼意義？",
        "options": ["圓形，圓滿", "方形，方正", "各式造型，可愛", "中央有孔的圓形，口水不再流"],
        "answer": "中央有孔的圓形，口水不再流"
    },
    {
        "q": "台灣傳統習俗中，當家中有新生兒時，親友會送上「彌月禮」。請問彌月禮中最常見的鹹點是什麼？",
        "options": ["紅龜粿", "油飯", "雞酒", "麻油雞"],
        "answer": "油飯"
    },
    {
        "q": "台灣傳統習俗中，農曆正月十五元宵節時，人們會吃湯圓和猜燈謎。請問吃湯圓的寓意是什麼？",
        "options": ["祈求平安健康", "慶祝豐收", "象徵團圓、圓滿", "驅邪避凶"],
        "answer": "象徵團圓、圓滿"
    },
    {
        "q": "台灣傳統習俗中，新居落成時會舉辦「入厝」儀式。請問入厝時通常會準備什麼，象徵「發財」？",
        "options": ["紅包", "發糕", "鳳梨", "橘子"],
        "answer": "鳳梨"
    },
    {
        "q": "這種麵食點心，外皮鬆軟，內餡包有滷五花肉、酸菜、花生粉等，形狀像虎口，故又稱「虎咬豬」。請問這是什麼？",
        "options": ["潤餅", "割包", "大腸包小腸", "潤餅捲"],
        "answer": "割包"
    },
    {
        "q": "這是一種以麵粉和糖製成的傳統糕點，外形圓胖，蒸熟後表面會裂開，象徵「發財」。通常用於年節祭祀。請問這是什麼？",
        "options": ["發粿", "紅龜粿", "年糕", "壽桃"],
        "answer": "發粿"
    },
    {
        "q": "相傳台灣肉圓的起源，是在日治時期彰化北斗地區，一位名為范萬居的醫師，為了賑濟災民而發明。他將番薯粉和餡料包入蒸熟，方便災民取食。請問這是什麼點心？",
        "options": ["碗粿", "肉圓", "筒仔米糕", "米糕"],
        "answer": "肉圓"
    },
    {
        "q": "據說這種點心起源於中國泉州，隨著移民傳入台灣。早年農村生活不易，人們會將吃剩的菜餚或粗糧加入米漿蒸製，以便保存和食用。這種點心後來演變成台灣常見的小吃。請問這是什麼？",
        "options": ["米糕", "碗粿", "肉粽", "筒仔米糕"],
        "answer": "碗粿"
    },
    {
        "q": "這項點心在清朝時，民間為了祈求好運而發明。人們將麵粉揉成發酵麵團，蒸熟後表面會自然裂開，象徵「發」與「高升」，因此常用於祭祀和節慶。請問這是什麼？",
        "options": ["紅龜粿", "年糕", "發粿", "草仔粿"],
        "answer": "發粿"
    },
    {
        "q": "台灣傳統市場中，常見一種以艾草或鼠麴草製成的點心。據說在清明時節，人們會利用這些植物的藥用價值，將其加入糯米粉中製成糕點，有去濕解毒的功效，同時也作為祭祖的供品。請問這是什麼？",
        "options": ["芋粿巧", "紅龜粿", "草仔粿", "發粿"],
        "answer": "草仔粿"
    },
    {
        "q": "這種點心因其外形酷似烏龜而得名。烏龜在傳統文化中象徵長壽與吉祥，因此在許多重要節慶如壽宴、喜慶或神明誕辰時，常被用來祭祀或分送親友，以祈求福壽綿延。請問這是什麼？",
        "options": ["發粿", "紅龜粿", "年糕", "壽桃"],
        "answer": "紅龜粿"
    },
    {
        "q": "相傳在明末清初時期，鄭成功部隊來台後，因水土不服、氣候炎熱，不少士兵中暑。軍醫發現一種植物熬煮後有消暑解渴的功效，便製成飲品給士兵飲用，後來演變成廣受歡迎的甜品。請問這是什麼？",
        "options": ["愛玉", "仙草", "楊桃汁", "青草茶"],
        "answer": "仙草"
    },
    {
        "q": "這項甜點的由來與早期台灣山區的植物生態有關。相傳一位原住民婦女在溪邊洗手時，發現一種植物的果實被搓揉後會凝結成凍狀，後來經過改良，成為台灣特有的消暑聖品。請問這是什麼？",
        "options": ["仙草", "愛玉", "粉圓", "豆花"],
        "answer": "愛玉"
    },
    {
        "q": "據說這種點心起源於中國北方，後隨移民傳入台灣。在古代，人們為了在農忙時節快速充飢，會將米粉加入芋頭蒸煮，切塊後方便攜帶，是農民的點心。請問這是什麼？",
        "options": ["芋頭糕", "芋粿巧", "草仔粿", "蘿蔔糕"],
        "answer": "芋頭糕"
    },
    {
        "q": "這項台灣傳統早餐的由來，與早年節慶祭祀的習慣有關。人們將米和蘿蔔磨成漿後蒸煮，切片後可煎可蒸，在年節時分享給親友，象徵好彩頭。請問這是什麼？",
        "options": ["碗粿", "米糕", "蘿蔔糕", "發粿"],
        "answer": "蘿蔔糕"
    },
    {
        "q": "在古代，人們會將吃剩的滷肉夾入蒸製的麵皮中食用，象徵把一年的壞運「割」掉，迎向好運。後來演變成台灣的特色小吃。請問這是什麼？",
        "options": ["潤餅", "大腸包小腸", "潤餅捲", "割包"],
        "answer": "割包"
    },
    {
        "q": "這項點心據說源自中國，在台灣早期農業社會中，是相當普及的點心。人們會將糯米粉製成麵糰，包入花生或芝麻餡，蒸熟後沾上花生粉，象徵團圓、圓滿。請問這是什麼？",
        "options": ["湯圓", "元宵", "麻糬", "紅圓"],
        "answer": "麻糬"
    },
    {
        "q": "這種甜點是台中地區的特色名產。相傳在日治時期，一位餅鋪老闆為了讓大家吃到便宜又好吃的餅，改良了傳統的麥芽餅，並因其形狀如太陽般圓潤而得名。請問這是什麼？",
        "options": ["鳳梨酥", "蛋黃酥", "太陽餅", "芋頭酥"],
        "answer": "太陽餅"
    },
    {
        "q": "這項點心據傳起源於中國，後傳入台灣。早年台灣民間會將冬瓜或鳳梨製成果醬作為餡料，包入酥皮中烘烤。隨著時代演進，鳳梨因其台語諧音「旺來」而成為主要的吉祥餡料。請問這是什麼？",
        "options": ["太陽餅", "綠豆糕", "鳳梨酥", "牛軋糖"],
        "answer": "鳳梨酥"
    },
    {
        "q": "這種小吃據說是在台灣光復初期，因物資缺乏，人們為了不浪費豬血，將豬血加入糯米蒸製而成。後來發現這種組合口感獨特，成為台灣夜市的經典美味。請問這是什麼？",
        "options": ["米腸", "糯米腸", "豬血糕", "大腸包小腸"],
        "answer": "豬血糕"
    },
    {
        "q": "台灣常見的夜市小吃，以玉米澱粉或太白粉製成，口感Q彈，常加入刨冰或甜湯中。據說在早年，這種點心是為了增加甜品的飽足感而發明的。請問這是什麼？",
        "options": ["地瓜圓", "芋圓", "粉圓", "珍珠"],
        "answer": "粉圓"
    },
    {
        "q": "據說這種傳統甜點起源於中國福建，後隨移民傳入台灣。早年人們會用綠豆磨成粉，加入糖和油製成小糕點，方便攜帶和保存，是夏季消暑的點心。請問這是什麼？",
        "options": ["鳳梨酥", "太陽餅", "綠豆糕", "花生糖"],
        "answer": "綠豆糕"
    },
    {
        "q": "這項點心是台灣常見的早餐或點心。據說在早期農業社會，婦女會將麵粉和雞蛋混合，倒入專用的模具中烘烤，方便給家人快速製作早餐。請問這是什麼？",
        "options": ["鬆餅", "鯛魚燒", "雞蛋糕", "銅鑼燒"],
        "answer": "雞蛋糕"
    },
    {
        "q": "這種甜點因其形狀像車輪而得名。相傳在日本時代，有日本商人引進這種製作方式，後來在台灣改良，成為台灣夜市常見的點心，內餡豐富多樣。請問這是什麼？",
        "options": ["鯛魚燒", "紅豆餅", "車輪餅", "雞蛋糕"],
        "answer": "車輪餅"
    },
    {
        "q": "這種冰品的由來，與台灣的日治時期有關。日本人將其刨冰技術帶入台灣，結合台灣本地的各種食材，如紅豆、綠豆、芋圓等，創造出獨具特色的消暑聖品。請問這是什麼？",
        "options": ["雪花冰", "綿綿冰", "八寶冰", "泡泡冰"],
        "answer": "八寶冰"
    },
    {
        "q": "台灣常見的甜點，將蒸熟的芋頭搗成泥，加入糖和太白粉，揉成不規則的塊狀後蒸煮或油炸。據說這種吃法是早期台灣人為了善用盛產的芋頭而發明的。請問這是什麼？",
        "options": ["芋泥球", "芋頭糕", "芋粿巧", "芋圓"],
        "answer": "芋圓"
    },
    {
        "q": "這種傳統糕點在台灣客家庄相當普遍。早期客家人為了在農忙時方便攜帶，將糯米粉和芋頭製成這種不規則形狀的糕點，方便食用。請問這是什麼？",
        "options": ["芋圓", "芋頭糕", "芋粿巧", "麻糬"],
        "answer": "芋粿巧"
    },
    {
        "q": "這是一種傳統的米食點心，將米漿加入黃梔子水製成，呈現自然的黃色，口感Q彈滑順。據說在早期，人們會利用天然植物的染色效果，讓點心更加美觀，同時也方便保存。請問這是什麼？",
        "options": ["愛玉", "仙草", "粉粿", "涼圓"],
        "answer": "粉粿"
    },
    {
        "q": "在台灣，有一種傳統糕點因其製作過程需反覆揉捏，象徵著「黏錢」的吉祥寓意，因此常用於開店或年節時。它的口感Q彈，通常以花生粉或芝麻粉為內餡。請問這是什麼？",
        "options": ["麻荖", "花生糖", "米荖", "麻糬"],
        "answer": "麻荖"
    },
    {
        "q": "這種點心相傳與早期台灣先民的生活智慧有關。人們在物資缺乏時，會將番薯（地瓜）切塊油炸，再裹上糖漿，不僅能延長保存，也讓食材變廢為寶，成為一道簡單又美味的甜點。請問這是什麼？",
        "options": ["地瓜球", "炸地瓜", "拔絲地瓜", "地瓜酥"],
        "answer": "拔絲地瓜"
    }
];

let current = 0;
let score = 0;
const questionsPerRound = 5;
let currentRoundQuestions = []; // 儲存當前回合的問題列表，用於隨機選取

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

// ✅ 洗牌函數 (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ✅ 挑選不重複答案的題目
function selectUniqueAnswerQuestions(allQuestions, count) {
    const selectedQuestions = [];
    const usedAnswers = new Set();
    const shuffledQuestions = shuffleArray([...allQuestions]); // 先洗牌

    for (const q of shuffledQuestions) {
        if (!usedAnswers.has(q.answer)) {
            selectedQuestions.push(q);
            usedAnswers.add(q.answer);
            if (selectedQuestions.length === count) {
                break;
            }
        }
    }
    // 如果題目數量不足，可能需要調整題目池或降低要求
    if (selectedQuestions.length < count) {
        console.warn("題目庫中不重複答案的題目不足，可能無法生成指定數量的題目。");
    }
    return selectedQuestions;
}


// 載入問題
function loadQuestion() {
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
    const correct = currentRoundQuestions[current].answer;
    if (selected === correct) {
        resultEl.textContent = '✅ 答對了！';
        score++;
    } else {
        resultEl.textContent = `❌ 答錯了！正確答案是 ${correct}`;
    }
    Array.from(optionsEl.children).forEach(button => {
        button.disabled = true;
    });
    nextBtn.style.display = 'inline-block';
}

// 下一題按鈕事件
nextBtn.onclick = () => {
    current++;
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
    document.getElementById('playerName').value = '';
}

// 提交分數
function submitScore() {
    const name = document.getElementById('playerName').value;
    if (!name) return alert('請輸入名字！');
    db.ref('scores').push({ name, score, timestamp: firebase.database.ServerValue.TIMESTAMP });
    alert('分數已提交！');
    loadLeaderboard();
    resetGame();
}

// 載入排行榜
function loadLeaderboard() {
    leaderboardEl.innerHTML = '';
    db.ref('scores').orderByChild('score').limitToLast(5).on('value', (snapshot) => {
        const scores = [];
        snapshot.forEach((childSnapshot) => {
            scores.push(childSnapshot.val());
        });
        scores.sort((a, b) => b.score - a.score);

        leaderboardEl.innerHTML = '';

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
    // ✅ 使用新的函數來選擇不重複答案的題目
    currentRoundQuestions = selectUniqueAnswerQuestions(questions, questionsPerRound);

    endScreen.style.display = 'none';
    startScreen.style.display = 'block';
    quiz.style.display = 'none';
    loadLeaderboard();
}

// 開始遊戲按鈕事件
startBtn.onclick = () => {
    // ✅ 開始遊戲前，選擇不重複答案的題目
    currentRoundQuestions = selectUniqueAnswerQuestions(questions, questionsPerRound);

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