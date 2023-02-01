const hiraganaCharacters = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん", 
    "が","ざ","だ","ば","ぱ",
    "ぎ","じ","ぢ","び","ぴ",
    "ぐ","ず","づ","ぶ","ぷ",
    "げ","ぜ","で","べ","ぺ",
    "ご","ぞ","ど","ぼ","ぽ"
];
const hiraganaPronounciations = {
    "あ": "a",
    "い": "i",
    "う": "u",
    "え": "e",
    "お": "o",
    "か": "ka",
    "き": "ki",
    "く": "ku",
    "け": "ke",
    "こ": "ko",
    "さ": "sa",
    "し": "shi",
    "す": "su",
    "せ": "se",
    "そ": "so",
    "た": "ta",
    "ち": "chi",
    "つ": "tsu",
    "て": "te",
    "と": "to",
    "な": "na",
    "に": "ni",
    "ぬ": "nu",
    "ね": "ne",
    "の": "no",
    "は": "ha",
    "ひ": "hi",
    "ふ": "fu",
    "へ": "he",
    "ほ": "ho",
    "ま": "ma",
    "み": "mi",
    "む": "mu",
    "め": "me",
    "も": "mo",
    "や": "ya",
    "ゆ": "yu",
    "よ": "yo",
    "ら": "ra",
    "り": "ri",
    "る": "ru",
    "れ": "re",
    "ろ": "ro",
    "わ": "wa",
    "を": "wo",
    "ん": "n",
    "が": "ga",
    "ざ": "za",
    "だ": "da",
    "ば": "ba",
    "ぱ": "pa",
    "ぎ": "gi",
    "じ": "ji",
    "ぢ": "ji",
    "び": "bi",
    "ぴ": "pi",
    "ぐ": "gu",
    "ず": "zu",
    "づ": "zu",
    "ぶ": "bu",
    "ぷ": "pu",
    "げ": "ge",
    "ぜ": "ze",
    "で": "de",
    "べ": "be",
    "ぺ": "pe",
    "ご": "go",
    "ぞ": "zo",
    "ど": "do",
    "ぼ": "bo",
    "ぽ": "po"
};

const katakanaCharacters = [
    "ア", "イ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ヤ", "ユ", "ヨ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ワ", "ヲ", "ン",
    "ガ", "ザ", "ダ", "バ", "パ",
    "ギ", "ジ", "ヂ", "ビ", "ピ",
    "グ", "ズ", "ヅ", "ブ", "プ",
    "ゲ", "ゼ", "デ", "ベ", "ペ",
    "ゴ", "ゾ", "ド", "ボ", "ポ"
];
const katakanaPronounciations = {
    "ア": "a",
    "イ": "i",
    "ウ": "u",
    "エ": "e",
    "オ": "o",
    "カ": "ka",
    "キ": "ki",
    "ク": "ku",
    "ケ": "ke",
    "コ": "ko",
    "サ": "sa",
    "シ": "shi",
    "ス": "su",
    "セ": "se",
    "ソ": "so",
    "タ": "ta",
    "チ": "chi",
    "ツ": "tsu",
    "テ": "te",
    "ト": "to",
    "ナ": "na",
    "ニ": "ni",
    "ヌ": "nu",
    "ネ": "ne",
    "ノ": "no",
    "ハ": "ha",
    "ヒ": "hi",
    "フ": "fu",
    "ヘ": "he",
    "ホ": "ho",
    "マ": "ma",
    "ミ": "mi",
    "ム": "mu",
    "メ": "me",
    "モ": "mo",
    "ヤ": "ya",
    "ユ": "yu",
    "ヨ": "yo",
    "ラ": "ra",
    "リ": "ri",
    "ル": "ru",
    "レ": "re",
    "ロ": "ro",
    "ワ": "wa",
    "ヲ": "wo",
    "ン": "n",
    "ガ": "ga",
    "ザ": "za",
    "ダ": "da",
    "バ": "ba",
    "パ": "pa",
    "ギ": "gi",
    "ジ": "ji",
    "ヂ": "ji",
    "ビ": "bi",
    "ピ": "pi",
    "グ": "gu",
    "ズ": "zu",
    "ヅ": "zu",
    "ブ": "bu",
    "プ": "pu",
    "ゲ": "ge",
    "ゼ": "ze",
    "デ": "de",
    "ベ": "be",
    "ペ": "pe",
    "ゴ": "go",
    "ゾ": "zo",
    "ド": "do",
    "ボ": "bo",
    "ポ": "po"
};

    let characters = hiraganaCharacters;
    let pronounciations = hiraganaPronounciations;
    let currentCharacter = "";
    let currentPronounciation = "";

    const hiraganaButton = document.getElementById("hiragana-button");
    hiraganaButton.addEventListener("click", () => {
        characters = hiraganaCharacters;
        pronounciations = hiraganaPronounciations;
        updateCharacter();
    });

    const katakanaButton = document.getElementById("katakana-button");
    katakanaButton.addEventListener("click", () => {
        characters = katakanaCharacters;
        pronounciations = katakanaPronounciations;
        updateCharacter();
    });

    function updateCharacter() {
      // Select a random character
        let randomIndex = Math.floor(Math.random() * characters.length);
            currentCharacter = characters[randomIndex];
            currentPronounciation = pronounciations[currentCharacter];

      // Display the character
        const characterContainer = document.getElementById("character-container");
        characterContainer.textContent = currentCharacter;
        const pronounciationElement = document.getElementById("pronounciation");
        pronounciationElement.textContent = currentPronounciation;

      // Check the answer
        const form = document.getElementById("form");
        const resultElement = document.getElementById("result");
        form.addEventListener("input", (event) => {
            const answer = event.target.value;
            if (answer === currentPronounciation) {
                // Update the character
                randomIndex = Math.floor(Math.random() * characters.length);
                currentCharacter = characters[randomIndex];
                currentPronounciation = pronounciations[currentCharacter];
                characterContainer.textContent = currentCharacter;
                pronounciationElement.textContent = currentPronounciation;
                document.getElementById("answer").value = "";
            }
        });
    }

updateCharacter();