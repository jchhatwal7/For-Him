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

    letter.classList.toggle("open");

    // stop blinking once opened
    const front = letter.querySelector(".letter-front");
    front.style.animation = "none";

    // create burst hearts
    for (let i = 0; i < 8; i++) {
      const heart = document.createElement("div");
      heart.classList.add("burst-heart");
      heart.innerText = "💖";

      heart.style.left = (window.innerWidth / 2 - 20 + (Math.random() * 100 - 50)) + "px";
      heart.style.top = (window.innerHeight / 2) + "px";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1500);
    }

  });
});
