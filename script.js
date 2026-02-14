document.querySelectorAll(".letter").forEach(letter => {
  letter.addEventListener("click", () => {

    // toggle open content
    letter.classList.toggle("open");

    // stop blinking
    const front = letter.querySelector(".letter-front");
    front.style.animation = "none";

   const rect = front.getBoundingClientRect();
for (let i = 0; i < 15; i++) {
  const heart = document.createElement("div");
  heart.classList.add("burst-heart");
  heart.innerText = "💖";

  // random directions
  const x = (Math.random() - 0.5) * 200 + "px"; // left/right
  const y = -(Math.random() * 200 + 50) + "px";  // upward

  // start at center of front button
heart.style.left = front.offsetWidth / 2 + "px";
heart.style.top = front.offsetHeight / 2 + "px";


  // assign CSS variables for animation
  heart.style.setProperty("--x", x);
  heart.style.setProperty("--y", y);

  letter.appendChild(heart);

  setTimeout(() => heart.remove(), 1600);
}


  });
});

// Floating hearts on page load
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Create hearts continuously
setInterval(createFloatingHeart, 600);


