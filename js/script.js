const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
const layerCount = 3;
const speeds = [0.05, 0.1, 0.2];
const baseStarCount = 50;
let shootingStar = null;
let energyPulses = [];

// Ben 10 color scheme
const ben10Colors = [
  "#00ff00", // Omnitrix green
  "#ffffff", // White
  "#00cc00", // Darker green
  "#88ff88", // Light green
  "#004400", // Dark green
];

// Generate Ben 10 themed star colors
function getBen10StarColor() {
  const rand = Math.random();
  if (rand < 0.6) {
    return "#ffffff"; // Most stars are white
  } else if (rand < 0.8) {
    return "#00ff00"; // Some green stars
  } else {
    return ben10Colors[Math.floor(Math.random() * ben10Colors.length)];
  }
}

// Resize the canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars();
}

// Create the starfield
function createStars() {
  stars = [];
  const scalingFactor = Math.max(canvas.width, canvas.height) / 1000;
  for (let i = 0; i < layerCount; i++) {
    const starCount = Math.floor(baseStarCount * scalingFactor * (i + 1));
    for (let j = 0; j < starCount; j++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (i + 1) + 0.5,
        speed: speeds[i],
        opacity: Math.random(),
        baseOpacity: Math.random() * 0.5 + 0.5,
        layer: i,
        color: getBen10StarColor(),
        glowIntensity: Math.random() * 0.5 + 0.5,
      });
    }
  }
}

// Create energy pulse effect
function createEnergyPulse() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  energyPulses.push({
    x: centerX,
    y: centerY,
    radius: 0,
    maxRadius: Math.max(canvas.width, canvas.height),
    opacity: 1,
    speed: 3,
  });
}

// Update energy pulses
function updateEnergyPulses() {
  energyPulses.forEach((pulse, index) => {
    pulse.radius += pulse.speed;
    pulse.opacity = Math.max(0, 1 - pulse.radius / pulse.maxRadius);

    if (pulse.opacity <= 0) {
      energyPulses.splice(index, 1);
    }
  });
}

// Update star positions and simulate twinkling
function updateStars() {
  stars.forEach((star) => {
    star.y -= star.speed;
    star.opacity =
      star.baseOpacity + Math.sin(Date.now() * 0.001 * star.speed) * 0.3;

    // Add extra glow to green stars
    if (star.color.includes("00ff00") || star.color.includes("00cc00")) {
      star.opacity = Math.min(1, star.opacity + 0.2);
    }

    if (star.y < 0) {
      star.y = canvas.height;
      star.x = Math.random() * canvas.width;
    }
  });
}

// Draw the stars
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ben 10 themed background gradient
  const gradient = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 8,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width
  );
  gradient.addColorStop(0, "rgba(0, 50, 0, 0.8)"); // Dark green center
  gradient.addColorStop(0.5, "rgba(0, 20, 0, 0.6)"); // Darker green
  gradient.addColorStop(1, "rgba(0, 0, 0, 1)"); // Black edges
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw energy pulses
  energyPulses.forEach((pulse) => {
    ctx.beginPath();
    ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0, 255, 0, ${pulse.opacity * 0.3})`;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  });

  // Draw stars with Ben 10 effects
  stars.forEach((star) => {
    // Draw glow effect for special stars
    if (star.color !== "#ffffff") {
      ctx.shadowColor = star.color;
      ctx.shadowBlur = 10 * star.glowIntensity;
    } else {
      ctx.shadowBlur = 0;
    }

    ctx.fillStyle =
      star.color === "#ffffff"
        ? `rgba(255, 255, 255, ${star.opacity})`
        : star.color.replace(")", `, ${star.opacity})`).replace("rgb", "rgba");

    ctx.fillRect(star.x, star.y, star.size, star.size);

    // Reset shadow
    ctx.shadowBlur = 0;
  });
}

// Initialize a Ben 10 themed shooting star
function createShootingStar() {
  const startX = Math.random() * canvas.width;
  const startY = Math.random() * canvas.height;
  const angle = Math.random() * Math.PI * 2;
  const length = Math.random() * 300 + 100;
  const speed = Math.random() * 4 + 2;

  shootingStar = {
    x: startX,
    y: startY,
    length: length,
    speed: speed,
    opacity: 1,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed,
    color: Math.random() < 0.7 ? "#00ff00" : "#ffffff",
  };

  const nextAppearance = Math.random() * 15000 + 10000;
  setTimeout(createShootingStar, nextAppearance);
}

// Update shooting star position
function updateShootingStar() {
  if (!shootingStar) return;

  shootingStar.x += shootingStar.dx;
  shootingStar.y += shootingStar.dy;
  shootingStar.opacity -= 0.01;

  if (
    shootingStar.opacity <= 0 ||
    shootingStar.x < 0 ||
    shootingStar.x > canvas.width ||
    shootingStar.y < 0 ||
    shootingStar.y > canvas.height
  ) {
    shootingStar = null;
  }
}

// Draw the Ben 10 themed shooting star
function drawShootingStar() {
  if (!shootingStar) return;

  const gradient = ctx.createLinearGradient(
    shootingStar.x,
    shootingStar.y,
    shootingStar.x - shootingStar.dx * shootingStar.length,
    shootingStar.y - shootingStar.dy * shootingStar.length
  );

  const color =
    shootingStar.color === "#00ff00" ? "0, 255, 0" : "255, 255, 255";
  gradient.addColorStop(0, `rgba(${color}, ${shootingStar.opacity})`);
  gradient.addColorStop(1, `rgba(${color}, 0)`);

  ctx.beginPath();
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 3;
  ctx.shadowColor = shootingStar.color;
  ctx.shadowBlur = 15;
  ctx.moveTo(shootingStar.x, shootingStar.y);
  ctx.lineTo(
    shootingStar.x - shootingStar.dx * shootingStar.length,
    shootingStar.y - shootingStar.dy * shootingStar.length
  );
  ctx.stroke();
  ctx.closePath();
  ctx.shadowBlur = 0;
}

// Animation loop
function animate() {
  updateStars();
  updateShootingStar();
  updateEnergyPulses();
  drawStars();
  drawShootingStar();
  requestAnimationFrame(animate);
}

// Create periodic energy pulses
function startEnergyPulses() {
  createEnergyPulse();
  setTimeout(startEnergyPulses, Math.random() * 8000 + 5000);
}

// Handle resizing
window.addEventListener("resize", resizeCanvas);

// Initialize
resizeCanvas();
createStars();
setTimeout(createShootingStar, Math.random() * 10000 + 5000);
setTimeout(startEnergyPulses, 3000);
animate();

const playBtn = document.getElementById("play-btn");
const logoImg = document.getElementById("logo");
const benCharImg = document.querySelector(".char-ben");
const alienCharImg = document.querySelector(".char-alien");
let currentIndex = 0;
const levelsLogos = ["ben_10", "Ben_10_Omnitrix", "ben_10_ultimate_alien"];
const alienChars = [
  "char-alien",
  "char-alien-omnitrix",
  "char-alien-ultimatrix",
];
const benChars = [
  "char-ben",
  "char-ben-omnitrix",
  "char-ben-ultimatrix",
  "char-ben",
];

if (logoImg) {
  logoImg.addEventListener("click", () => {
    const projectName = window.location.pathname.split("/")[1];
    const isGitHubPages = window.location.hostname.includes("github.io");
    const projectRoot = isGitHubPages ? `/${projectName}/` : "/";
    window.location.href = projectRoot;
  });
}

if (playBtn) {
  document.querySelector(".pressione").addEventListener("click", function (e) {
    const img = this;
    const button = img.parentElement;
    // منع النقر المتكرر أثناء التحول
    if (button.classList.contains("transforming")) return;
    button.classList.add("transforming");

    // 1. إنشاء الفقاعات الخضراء
    createBubbles(button);

    // 2. تطبيق تأثير التحول
    alienCharImg.classList.remove("easgo");
    benCharImg.classList.remove("easgo");
    img.classList.add("transform-effect");
    alienCharImg.classList.add("cartoon-fly-out");
    benCharImg.classList.add("cartoon-fly-out");

    // 3. تغيير الصورة بعد انتهاء التحول
    setTimeout(() => {
      alienCharImg.classList.add("easgo");
      benCharImg.classList.add("easgo");
      img.classList.remove("transform-effect");
      alienCharImg.classList.remove("cartoon-fly-out");
      benCharImg.classList.remove("cartoon-fly-out");
      currentIndex = (currentIndex + 1) % levelsLogos.length;
      img.src = `assets/${levelsLogos[currentIndex]}.png`;
      alienCharImg.src = `assets/${alienChars[currentIndex]}.png`;
      benCharImg.src = `assets/${benChars[currentIndex]}.png`;
      img.style.opacity = 1;
      button.classList.remove("transforming");
    }, 1500); // يجب أن يتطابق هذا مع مدة animation الـCSS
  });

  function createBubbles(container) {
    for (let i = 0; i < 15; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // وضع عشوائي للفقاعات
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.opacity = Math.random();
      bubble.style.width = `${10 + Math.random() * 20}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.animationDelay = `${Math.random() * 0.5}s`;

      container.appendChild(bubble);

      // إزالة الفقاعة بعد انتهاء animation
      setTimeout(() => {
        bubble.remove();
      }, 1000);
    }
  }
  const projectName = window.location.pathname.split("/")[1];
  const isGitHubPages = window.location.hostname.includes("github.io");
  const projectRoot = isGitHubPages ? `/${projectName}/` : "/";

  playBtn.addEventListener("click", () => {
    let level =
      currentIndex === 0 ? "easy" : currentIndex === 1 ? "medium" : "hard";
    window.location.href = `${projectRoot}${level}.html`;
  });
}
