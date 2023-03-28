const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();

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

function modifyEmojis(command, emoji) {
  switch (command) {
    case "push":
      if (emoji) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";
        renderEmojis();
      }
      break;
    case "unshift":
      if (emoji) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";
        renderEmojis();
      }
      break;
    case "pop":
      myEmojis.pop();
      renderEmojis();
      break;
    case "shift":
      myEmojis.shift();
      renderEmojis();
      break;
  }
}
