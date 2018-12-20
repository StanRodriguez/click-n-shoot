let points = 0;
let clip = 5;
let life = 100;
let difficulty = 3000;

const badGuys = ["bad-guy", "bad-guy-right", "bad-guy-alley", "bad-guy-car"];
const $container = document.getElementsByClassName("container")[0];
const $bullet = document.getElementsByClassName("bullet")[0];
const shoot = new Audio("../assets/shoot.mp3");
const death = new Audio("../assets/death.mp3");
const emptyClip = new Audio("../assets/emptyClip.mp3");
const reload = new Audio("../assets/reload.mp3");

const $level = document.getElementsByClassName("level")[0];
const $points = document.getElementsByClassName("points")[0];

//create a random number
const randomize = length => {
  return Math.floor(Math.random() * length);
};

//move the guy horizontally
const moveBadGuy = (move, increment, interval, badGuy) => {
  return setInterval(() => {
    badGuy.style.left = move + "px";
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
      start = 100;
      x = 1;
      y = 400 + randomize(250);
      break;
    case "bad-guy-right":
      badGuy.classList.add("bad-guy-right");
      start = 900;
      x = -1;
      y = 400 + randomize(250);
      break;
    case "bad-guy-alley":
      x = 80;
      y = 100;
      break;
  }

  badGuy.style.top = y + "px";
  //generate the random movement
  let int = moveBadGuy(start, randomize(40 * x), 200, badGuy);
  $container.appendChild(badGuy);

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
    clip--;
    shoot.play();

    $bullet.style.left = e.x + "px";

    $bullet.style.top = e.y + "px";
    $bullet.style.opacity = 0;

    setTimeout(() => {
      $bullet.style.opacity = 1;

      $bullet.style.left = "50%";
      // $bullet.style.top = "0";
      $bullet.style.top = "100%";
      // $bullet.style.bottom = 0 + "px";
    }, 100);
  }
};
const levelCheck = () => {
  if (difficulty > 2000) {
    $level.textContent = "Level 2";
  } else if (difficulty > 1500) {
    $level.textContent = "Level 3";
  } else if (difficulty > 1000) {
    $level.textContent = "Level 4";
  }
};
const generation = () => {
  levelCheck();
  createBadGuy();
  if (difficulty > 2500) {
    difficulty -= 50;
  } else if (difficulty > 2000) {
    difficulty -= 40;
  } else if (difficulty > 1500) {
    difficulty -= 30;
  } else if (difficulty > 1000) {
    difficulty -= 10;
  }
  console.log(difficulty);

  setTimeout(generation, difficulty);
};

setTimeout(generation, difficulty);

$container.addEventListener("click", e => {
  toShoot(e);
});

//reload
document.body.addEventListener("keydown", e => {
  e.preventDefault();
  if (e.key == "r") {
    reload.play();
    clip = 7;
  }
});

//check if enemies are shooting you and reduce health
const checkIfShooting = () => {
  const $shootingGuys = document.getElementsByClassName("bad-guy-shooting");
  // const $feedback = document.getElementsByClassName("feedback")[0];
  // $feedback.style.opacity = 0;
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
