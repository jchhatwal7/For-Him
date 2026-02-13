document.querySelectorAll(".letter").forEach(letter => {
  letter.addEventListener("click", () => {
    letter.classList.toggle("open");
  });
});
