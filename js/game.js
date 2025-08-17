// images for the game
let cardData;
if (window.location.pathname.endsWith("easy.html")) {
  cardData = [
    {
      alien: "Diamondhead",
      image: "assets/easy/DiamondHead.jpg",
      alt: "Diamondhead",
    },
    {
      alien: "FourArms",
      image: "assets/easy/FourArms.jpg",
      alt: "FourArms",
    },
    {
      alien: "GhostFreak",
      image: "assets/easy/GhostFreak.jpg",
      alt: "GhostFreak",
    },
    {
      alien: "GreyMatter",
      image: "assets/easy/GreyMatter.jpg",
      alt: "GreyMatter",
    },
    {
      alien: "HeatBlast",
      image: "assets/easy/HeatBlast.jpg",
      alt: "HeatBlast",
    },
    {
      alien: "Upgrade",
      image: "assets/easy/Upgrade.jpg",
      alt: "Upgrade",
    },
    {
      alien: "Stinkfly",
      image: "assets/easy/Stinkfly.jpg",
      alt: "Stinkfly",
    },
    {
      alien: "XLR8",
      image: "assets/easy/XLR8.jpg",
      alt: "XLR8",
    },
  ];
}
if (window.location.pathname.endsWith("medium.html")) {
  cardData = [
    {
      alien: "AlienX",
      image: "assets/medium/AlienX.jpg",
      alt: "AlienX",
    },
    {
      alien: "Ben",
      image: "assets/medium/Ben.jpg",
      alt: "Ben",
    },
    {
      alien: "BigChill",
      image: "assets/medium/BigChill.jpg",
      alt: "BigChill",
    },
    {
      alien: "BrainStorm",
      image: "assets/medium/BrainStorm.jpg",
      alt: "BrainStorm",
    },
    {
      alien: "CannonBall",
      image: "assets/medium/CannonBall.jpg",
      alt: "CannonBall",
    },
    {
      alien: "ChromaStone",
      image: "assets/medium/ChromaStone.jpg",
      alt: "ChromaStone",
    },
    {
      alien: "EchoEcho",
      image: "assets/medium/EchoEcho.jpg",
      alt: "EchoEcho",
    },
    {
      alien: "Goop",
      image: "assets/medium/Goop.jpg",
      alt: "Goop",
    },
    {
      alien: "Humungousaur",
      image: "assets/medium/Humungousaur.jpg",
      alt: "Humungousaur",
    },
    {
      alien: "Jetray",
      image: "assets/medium/Jetray.jpg",
      alt: "Jetray",
    },
    {
      alien: "LodeStar",
      image: "assets/medium/LodeStar.jpg",
      alt: "LodeStar",
    },
    {
      alien: "Nanomech",
      image: "assets/medium/Nanomech.jpg",
      alt: "Nanomech",
    },
    {
      alien: "Rath",
      image: "assets/medium/Rath.jpg",
      alt: "Rath",
    },
    {
      alien: "SpiderMonkey",
      image: "assets/medium/SpiderMonkey.jpg",
      alt: "SpiderMonkey",
    },
    {
      alien: "SwampFire",
      image: "assets/medium/SwampFire.jpg",
      alt: "SwampFire",
    },
    {
      alien: "UpChuck",
      image: "assets/medium/UpChuck.jpg",
      alt: "UpChuck",
    },
    {
      alien: "Waybig",
      image: "assets/medium/Waybig.jpg",
      alt: "Waybig",
    },
    {
      alien: "wildVine",
      image: "assets/medium/wildVine.jpg",
      alt: "wildVine",
    },
  ];
}
if (window.location.pathname.endsWith("hard.html")) {
  cardData = [
    {
      alien: "Aggregor",
      image: "assets/hard/Aggregor.jpg",
      alt: "Aggregor",
    },
    {
      alien: "Albedo",
      image: "assets/hard/Albedo.jpg",
      alt: "Albedo",
    },
    {
      alien: "AmpFibian",
      image: "assets/hard/AmpFibian.jpg",
      alt: "AmpFibian",
    },
    {
      alien: "Anderias",
      image: "assets/hard/Anderias.jpg",
      alt: "Anderias",
    },
    {
      alien: "Argit",
      image: "assets/hard/Argit.jpg",
      alt: "Argit",
    },
    {
      alien: "Azmuth",
      image: "assets/hard/Azmuth.jpg",
      alt: "Azmuth",
    },
    {
      alien: "Ben",
      image: "assets/hard/Ben.jpg",
      alt: "Ben",
    },
    {
      alien: "BigChill",
      image: "assets/hard/BigChill.jpg",
      alt: "BigChill",
    },
    {
      alien: "CannonBall",
      image: "assets/hard/CannonBall.jpg",
      alt: "CannonBall",
    },
    {
      alien: "Chamalien",
      image: "assets/hard/Chamalien.jpg",
      alt: "Chamalien",
    },
    {
      alien: "Charmcaster",
      image: "assets/hard/Charmcaster.jpg",
      alt: "Charmcaster",
    },
    {
      alien: "ChildChill",
      image: "assets/hard/ChildChill.jpg",
      alt: "ChildChill",
    },
    {
      alien: "Cooper",
      image: "assets/hard/Cooper.jpg",
      alt: "Cooper",
    },
    {
      alien: "Darkstar",
      image: "assets/hard/Darkstar.jpg",
      alt: "Darkstar",
    },
    {
      alien: "EchoEcho",
      image: "assets/hard/EchoEcho.jpg",
      alt: "EchoEcho",
    },
    {
      alien: "Eunice",
      image: "assets/hard/Eunice.jpg",
      alt: "Eunice",
    },
    {
      alien: "GhostFreak",
      image: "assets/hard/GhostFreak.jpg",
      alt: "GhostFreak",
    },
    {
      alien: "Gwen",
      image: "assets/hard/Gwen.jpg",
      alt: "Gwen",
    },
    {
      alien: "HighBreed",
      image: "assets/hard/HighBreed.jpg",
      alt: "HighBreed",
    },
    {
      alien: "Humungousaur",
      image: "assets/hard/Humungousaur.jpg",
      alt: "Humungousaur",
    },
    {
      alien: "Julie",
      image: "assets/hard/Julie.jpg",
      alt: "Julie",
    },
    {
      alien: "Kevin",
      image: "assets/hard/Kevin.jpg",
      alt: "Kevin",
    },
    {
      alien: "KevinLevin",
      image: "assets/hard/KevinLevin.jpg",
      alt: "KevinLevin",
    },
    {
      alien: "PAndor",
      image: "assets/hard/PAndor.jpg",
      alt: "PAndor",
    },
    {
      alien: "Paradox",
      image: "assets/hard/Paradox.jpg",
      alt: "Paradox",
    },
    {
      alien: "SpiderMonkey",
      image: "assets/hard/SpiderMonkey.jpg",
      alt: "SpiderMonkey",
    },
    {
      alien: "Sunny",
      image: "assets/hard/Sunny.jpg",
      alt: "Sunny",
    },
    {
      alien: "SwampFire",
      image: "assets/hard/SwampFire.jpg",
      alt: "SwampFire",
    },
    {
      alien: "TerraSpin",
      image: "assets/hard/TerraSpin.jpg",
      alt: "TerraSpin",
    },
    {
      alien: "Vilgax",
      image: "assets/hard/Vilgax.jpg",
      alt: "Vilgax",
    },
    {
      alien: "VreedleBrothers",
      image: "assets/hard/VreedleBrothers.jpg",
      alt: "VreedleBrothers",
    },
    {
      alien: "WaterHazard",
      image: "assets/hard/WaterHazard.jpg",
      alt: "WaterHazard",
    },
  ];
}

let blocksContainer = document.querySelector("#gameBlocks");
let deuration = 700;

// Duplicate the cards to make pairs
const gameCards = [...cardData, ...cardData];

// function to shuffle the cards
function shuffle(array) {
  let current = array.length,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    [array[current], array[random]] = [array[random], array[current]];
  }

  return array;
}
shuffle(gameCards);

// creating the game cards design
gameCards.forEach((card) => {
  const gameBlock = document.createElement("div");
  gameBlock.classList.add("game-block");
  gameBlock.setAttribute("card-alien", card.alien);

  const front = document.createElement("div");
  front.classList.add("face", "front");

  const back = document.createElement("div");
  back.classList.add("face", "back");
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = card.alt;
  back.appendChild(img);

  gameBlock.appendChild(front);
  gameBlock.appendChild(back);

  blocksContainer.appendChild(gameBlock);

  gameBlock.addEventListener("click", function () {
    if (
      !this.classList.contains("is-flipped") &&
      !this.classList.contains("has-match")
    ) {
      flipBlock(this);
    }
  });
});

//   stop clicking function
function stopclicking() {
  blocksContainer.classList.add("no-clicking");
  setTimeout(() => {
    blocksContainer.classList.remove("no-clicking");
  }, deuration);
}

//   check matching blocks function
function checkMatchingBlocks(firstBlock, secondBlock) {
  if (
    firstBlock.getAttribute("card-alien") ===
    secondBlock.getAttribute("card-alien")
  ) {
    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");
    checkForWin();
  } else {
    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, deuration);
  }
  checkForWin();
}

function flipBlock(block) {
  if (
    block.classList.contains("is-flipped") ||
    blocksContainer.classList.contains("no-clicking")
  ) {
    return;
  }

  block.classList.add("is-flipped");

  const flippedBlocks = document.querySelectorAll(
    ".is-flipped:not(.has-match)"
  );

  if (flippedBlocks.length === 2) {
    stopclicking();
    checkMatchingBlocks(flippedBlocks[0], flippedBlocks[1]);
  }
}
