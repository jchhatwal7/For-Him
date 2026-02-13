document.querySelectorAll(".letter").forEach(letter => {
  letter.addEventListener("click", () => {
    letter.classList.toggle("open");
  });
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 18 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 500);


document.querySelectorAll(".letter").forEach(letter => {
  letter.addEventListener("click", () => {

    // toggle the letter open
    letter.classList.toggle("open");

    // stop blinking
    const front = letter.querySelector(".letter-front");
    front.style.animation = "none";

    // create multiple hearts randomly from letter
    const rect = front.getBoundingClientRect(); // position of the button
    for (let i = 0; i < 15; i++) { // more hearts
      const heart = document.createElement("div");
      heart.classList.add("burst-heart");
      heart.innerText = "💖";

      // random position inside the letter-front
      heart.style.left = rect.left + Math.random() * rect.width + "px";
      heart.style.top = rect.top + Math.random() * rect.height + "px";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 1500);
    }

  });
});
