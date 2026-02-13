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
  heart.style.left = front.offsetLeft + front.offsetWidth / 2 + "px";
  heart.style.top = front.offsetTop + front.offsetHeight / 2 + "px";

  // assign CSS variables for animation
  heart.style.setProperty("--x", x);
  heart.style.setProperty("--y", y);

  letter.appendChild(heart);

  setTimeout(() => heart.remove(), 1600);
}


  });
});

