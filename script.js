const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const typedText = document.querySelector("[data-typed-phrases]");

if (typedText && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const phrases = typedText.dataset.typedPhrases.split("|");
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let deleting = false;

  function animateTyping() {
    const phrase = phrases[phraseIndex];

    if (deleting) {
      characterIndex -= 1;
    } else {
      characterIndex += 1;
    }

    typedText.textContent = phrase.slice(0, characterIndex);

    let delay = deleting ? 48 : 92;

    if (!deleting && characterIndex === phrase.length) {
      deleting = true;
      delay = 1350;
    } else if (deleting && characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 320;
    }

    window.setTimeout(animateTyping, delay);
  }

  window.setTimeout(animateTyping, 900);
}
