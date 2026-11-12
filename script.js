
document.addEventListener("DOMContentLoaded", () => {

  // Reveal elements while scrolling
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  // Falling hearts and flowers
  const particles = document.getElementById("particles");
  const symbols = ["♡", "✿", "♥", "✧", "🌸"];

  function createParticle() {
    if (!particles) return;

    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.fontSize = (12 + Math.random() * 14) + "px";
    particle.style.animationDuration = (6 + Math.random() * 7) + "s";

    particles.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 14000);
  }

  setInterval(createParticle, 550);

  // Birthday gift surprise
  const giftButton = document.getElementById("giftButton");
  const giftMessage = document.getElementById("giftMessage");

  if (giftButton && giftMessage) {
    giftButton.addEventListener("click", () => {
      giftMessage.classList.add("show");
      giftButton.querySelector(".gift-box").textContent = "💝";
      giftButton.querySelector("small").textContent = "SURPRISE OPENED!";

      // Confetti effect
      for (let i = 0; i < 35; i++) {
        createConfetti();
      }
    });
  }

  function createConfetti() {
    const confetti = document.createElement("span");
    const colors = ["#f3a9c7", "#ffd77d", "#ffffff", "#b9a2ff"];

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-15px";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.borderRadius = "2px";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.zIndex = "99";
    confetti.style.pointerEvents = "none";
    confetti.style.transition = "transform 2.5s ease, opacity 2.5s ease";

    document.body.appendChild(confetti);

    requestAnimationFrame(() => {
      confetti.style.transform =
        `translate(${Math.random() * 160 - 80}px, ${window.innerHeight + 50}px) rotate(${Math.random() * 700}deg)`;
      confetti.style.opacity = "0";
    });

    setTimeout(() => confetti.remove(), 2700);
  }

  // Background birthday music
  const musicToggle = document.getElementById("musicToggle");
  const birthdayMusic = document.getElementById("birthdayMusic");

  if (musicToggle && birthdayMusic) {
    musicToggle.addEventListener("click", async () => {
      if (birthdayMusic.paused) {
        try {
          await birthdayMusic.play();
          musicToggle.innerHTML = '♫ <span>Pause music</span>';
        } catch (error) {
          musicToggle.innerHTML = '♫ <span>Music unavailable</span>';
        }
      } else {
        birthdayMusic.pause();
        musicToggle.innerHTML = '♫ <span>Play music</span>';
      }
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});
