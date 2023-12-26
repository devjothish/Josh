const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Nahhh, this is !!! 2 more days for 4 months🥹";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWpoMW1iem1pN2N6MHlvZ3d2cXgzMWo0czZrOHd3YzJycnA4NTBmcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BxUJ8T9oMzFcsE4dAv/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
