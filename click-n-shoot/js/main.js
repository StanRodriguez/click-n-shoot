let points = 0;
const bullets = 5;
let clip = bullets;
let life = 100;
let difficulty = 3000;

const badGuys = ["bad-guy", "bad-guy-right", "bad-guy-alley"];

const shoot = new Audio("../assets/shoot.mp3");
const death = new Audio("../assets/death.mp3");
const emptyClip = new Audio("../assets/emptyClip.mp3");
const reload = new Audio("../assets/reload2.mp3");
let die = new Audio("../assets/game-over.mp3");

const $level = document.getElementsByClassName("level")[0];
const $points = document.getElementsByClassName("score-amount")[0];
const $gameOver = document.getElementsByClassName("game-over")[0];
const $container = document.getElementsByClassName("container-fluid")[0];
const $bullet = document.getElementsByClassName("bullet")[0];
const $landing = document.getElementsByClassName("landing")[0];
const $clip = document.getElementsByClassName("clip-amount")[0];

setTimeout(() => {
  $clip.textContent = "X " + clip;
  $landing.style.animation = "blink 2s forwards";
  $landing.addEventListener("animationend", () => {
    $landing.style.display = "none";
  });
}, 1500);

//create a random number
const randomize = length => {
  return Math.floor(Math.random() * length);
};

//move the guy horizontally
const moveBadGuy = (move, increment, interval, badGuy) => {
  return setInterval(() => {
    badGuy.style.left = move + "%";
    move += increment;
  }, interval);
};

//main function for creating the enemies
const createBadGuy = () => {
  let x;
  let y;
  let start;
  const className = badGuys[randomize(badGuys.length)];
  const badGuy = document.createElement("div");
  badGuy.classList.add("bad-guy");

  switch (className) {
    case "bad-guy":
      start = 1;
      x = 1;
      // y = 400 ;
      y = 60 + randomize(26);
      break;
    case "bad-guy-right":
      badGuy.classList.add("bad-guy-right");
      start = 95;
      x = -1;
      y = 60 + randomize(26);
      break;
    case "bad-guy-alley":
      start = 8;
      x = 0;
      y = 13;
      break;
  }

  badGuy.style.top = y + "%";
  //generate the random movement
  let int = moveBadGuy(start, randomize(5 * x), 200, badGuy);
  $container.appendChild(badGuy);

  console.log(badGuy.style.left);
  //wait three seconds before start to shooting
  setTimeout(() => {
    badGuy.classList.add("bad-guy-shooting");
    clearInterval(int);
  }, 3000);

  badGuy.addEventListener("click", () => {
    toKill(badGuy);
  });
};
//to kill the enemy, get points, change the gif and remove the element
const toKill = badGuy => {
  if (clip === 0) {
    emptyClip.play();
  } else {
    badGuy.classList.remove("bad-guy-shooting");
    badGuy.classList.add("bad-guy-dying");

    points += 100;
    $points.textContent = points;
    shoot.play();

    death.play();
    setTimeout(() => {
      badGuy.remove();
    }, 500);
  }
};

//shooting animation
const toShoot = e => {
  if (clip === 0) {
    emptyClip.play();
  } else {
    --clip;
    $clip.textContent = "X " + clip;
    shoot.play();

    $bullet.style.left = e.x + "px";

    $bullet.style.top = e.y + "px";
    $bullet.style.opacity = 0;

    setTimeout(() => {
      $bullet.style.opacity = 1;

      $bullet.style.left = "50%";
      $bullet.style.top = "100%";
    }, 100);
  }
};

//Change the label on the screen
const levelCheck = () => {
  if (difficulty > 2500) {
    $level.textContent = "1";
  } else if (difficulty > 2000) {
    $level.textContent = "2";
  } else if (difficulty > 1500) {
    $level.textContent = "3";
  } else if (difficulty > 1000) {
    $level.textContent = "4";
  }
};

//Generate random guys (each time a little bit more faster)
const generation = () => {
  levelCheck();
  createBadGuy();
  if (difficulty > 2500) {
    difficulty -= 100;
  } else if (difficulty > 2000) {
    difficulty -= 70;
  } else if (difficulty > 1500) {
    difficulty -= 30;
  } else if (difficulty > 1000) {
    difficulty -= 10;
  }
  console.log(difficulty);

  setTimeout(() => {
    generation();
  }, difficulty);
};

setTimeout(() => {
  generation();
}, difficulty);

$container.addEventListener("click", e => {
  toShoot(e);
});
//Game over Handler
const gameOver = () => {
  if (life <= 0) {
    // $gameOver.style.display = "block";
    document.getElementsByClassName("result")[0].textContent =
      "Your score:" + points;
    if (die) {
      die.play();
    }
    die = null;
  }
};
setInterval(gameOver, 200);

//reload
document.body.addEventListener("keydown", e => {
  e.preventDefault();
  if (e.key == "r") {
    reload.play();
    setTimeout(() => {
      clip = bullets;
      $clip.textContent = "X " + clip;
    }, 2000);
  }
});

//check if enemies are shooting you and reduce health
const checkIfShooting = () => {
  const $shootingGuys = document.getElementsByClassName("bad-guy-shooting");
  $container.style.animation = null;
  if ($shootingGuys.length) {
    $container.style.animation = "changeOpacity 0.8s infinite";
    life -= $shootingGuys.length;

    $lifeBar = document.getElementById("life");
    $lifeBar.textContent = life + "%";
    $lifeBar.style.width = life + "%";
    if (life < 15) {
      $lifeBar.classList.add("bg-danger");
    } else if (life < 50) {
      $lifeBar.classList.add("bg-warning");
    }
  }
};

setInterval(checkIfShooting, 100);

document
  .getElementsByClassName("try-again")[0]
  .addEventListener("click", () => {
    location.reload();
  });
