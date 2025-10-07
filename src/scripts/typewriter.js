export function typewriterEffect() {
  const words = ["Front-End", "Back-End", "Fullstack"];
  const element = document.getElementById("typewriter");
  const textSpan = element ? element.querySelector(".text") : null;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 150;

  function typeEffect() {
    const currentWord = words[wordIndex];
    textSpan
      ? (textSpan.textContent = currentWord.substring(0, charIndex))
      : "";

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      delay = 150 - Math.random() * 40;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      delay = 60;
    } else {
      isDeleting = !isDeleting;
      delay = isDeleting ? 1000 : 1100;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();
}