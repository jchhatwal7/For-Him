document.querySelectorAll(".letter").forEach(letter => {
  letter.addEventListener("click", () => {

    // toggle open content
    letter.classList.toggle("open");

    // stop blinking
    const front = letter.querySelector(".letter-front");
    front.style.animation = "none";

    // generate hearts
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.classList.add("burst-heart");
      heart.innerText = "💖";

      // get position of letter front
      const rect = front.getBoundingClientRect();
      const x = (Math.random() - 0.5) * 200; // left/right
      const y = -(Math.random() * 200 + 50); // up

      // start at center of the front button
      heart.style.position = "absolute";
      heart.style.left = front.offsetLeft + front.offsetWidth / 2 + "px";
      heart.style.top = front.offsetTop + front.offsetHeight / 2 + "px";

      // animate transform and opacity
      heart.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
      setTimeout(() => {
        heart.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
        heart.style.opacity = 0;
      }, 50);

      letter.appendChild(heart);

      // remove after animation
      setTimeout(() => heart.remove(), 1600);
    }

  });
});
