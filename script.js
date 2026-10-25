const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const typedText = document.querySelector("[data-typed-phrases]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typedText && !reduceMotion) {
  const phrases = typedText.dataset.typedPhrases.split("|");
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let deleting = true;

  function animateTyping() {
    const phrase = phrases[phraseIndex];

    characterIndex += deleting ? -1 : 1;
    typedText.textContent = phrase.slice(0, characterIndex);

    let delay = deleting ? 52 : 92;

    if (deleting && characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 320;
    } else if (!deleting && characterIndex === phrase.length) {
      deleting = true;
      delay = 1350;
    }

    window.setTimeout(animateTyping, delay);
  }

  window.setTimeout(animateTyping, 1050);
}
