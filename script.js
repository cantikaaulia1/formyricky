// Musik
const song = document.getElementById('birthdaySong');
const musicBtn = document.getElementById('musicBtn');

window.addEventListener('DOMContentLoaded', () => {
  song.muted = false;
  song.volume = 0.6;
  song.play().catch(() => {
    musicBtn.textContent = '▶️ Putar Musik';
  });

  // Confetti awal
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
});

// Tombol toggle
function toggleMusic() {
  if (song.paused) {
    song.play();
    musicBtn.textContent = '🔊 Matikan Musik';
  } else {
    song.pause();
    musicBtn.textContent = '▶️ Putar Musik';
  }
}

// Slider foto bucin
let current = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);
