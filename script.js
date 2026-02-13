document.querySelectorAll(".letter").forEach(letter => {
  letter.addEventListener("click", () => {

    // toggle open content
    letter.classList.toggle("open");

    // stop blinking
    const front = letter.querySelector(".letter-front");
    front.style.animation = "none";

    // generate hearts
    const rect = front.getBoundingClientRect();
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.classList.add("burst-heart");
      heart.innerText = "💖";

      // random direction
      const x = (Math.random() - 0.5) * 200 + "px"; // -100 to +100
      const y = -(Math.random() * 200 + 50) + "px"; // -50 to -250 upward

      heart.style.left = front.offsetLeft + front.offsetWidth / 2 + "px";
      heart.style.top = front.offsetTop + front.offsetHeight / 2 + "px";

      heart.style.setProperty("--x", x);
      heart.style.setProperty("--y", y);

      letter.appendChild(heart);

      setTimeout(() => heart.remove(), 1500);
    }

  });
});

});

