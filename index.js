const randomEmojisList = [
  "👨‍💻",
  "⛷",
  "🍲",
  "🐶",
  "🐱",
  "🐠",
  "🥞",
  "🥓",
  "🏄‍♀️",
  "🎸",
  "🏊",
  "🎸",
  "🎣",
  "🛰",
  "🎥",
  "🗺",
  "✈️",
  "🌕",
  "🦜",
  "🐎",
  "🍤",
  "🌮",
  "🍕",
  "🥑",
  "🧀",
  "🥗",
];

const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");
let myEmojis = [];

//check for emojis in local storage, if they're there, show them, if not, get some random emojis
const localEmojis = localStorage.getItem("myEmojis");
if (localEmojis === "[]" || !localEmojis) {
  getRandomEmojis();
} else {
  myEmojis = JSON.parse(localStorage.getItem("myEmojis"));
  renderEmojis();
}

pushBtn.addEventListener("click", function () {
  modifyEmojis("push", emojiInput.value);
});

unshiftBtn.addEventListener("click", function () {
  modifyEmojis("unshift", emojiInput.value);
});

popBtn.addEventListener("click", function () {
  modifyEmojis("pop");
});

shiftBtn.addEventListener("click", function () {
  modifyEmojis("shift");
});

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

function modifyEmojis(command, emoji) {
  switch (command) {
    case "push":
      if (emoji) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";
      }
      break;
    case "unshift":
      if (emoji) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";
      }
      break;
    case "pop":
      myEmojis.pop();
      break;
    case "shift":
      myEmojis.shift();
      break;
  }
  renderEmojis();
  recordEmojis();
}

//returns 3 random emojis from the emojisList, and replace the emojis list
function getRandomEmojis() {
  myEmojis = [];
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.round(Math.random() * randomEmojisList.length);
    myEmojis.push(randomEmojisList[randomIndex]);
  }
  renderEmojis();
  recordEmojis();
}

//record the current myEmojis array to local storage
function recordEmojis() {
  localStorage.setItem("myEmojis", JSON.stringify(myEmojis));
}
