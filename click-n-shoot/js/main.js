let points = 0;
let clip = 5;
let life = 100;
const classes = ["bad-guy", "bad-guy-front", "bad-guy-appear"];
const badGuys = [];
const $container = document.getElementsByClassName("container")[0];
const $bullet = document.getElementsByClassName("bullet")[0];
const shoot = new Audio("../assets/shoot.mp3");
const death = new Audio("../assets/death.mp3");
const emptyClip = new Audio("../assets/emptyClip.mp3");
const reload = new Audio("../assets/reload.mp3");
const $points = document.getElementsByClassName("points")[0];

const createBadGuy = par => {
  let [x, y, className] = par;
  // const y = Math.floor(Math.random() * 800);
  // console.log(y);
  if (!y) {
    y = 600;
  }

  console.log(x, y, className);
  const badGuy = document.createElement("div");
  badGuy.classList.add(className);
  $container.appendChild(badGuy);
  //   const $badGuy = document.getElementsByClassName("bad-guy")[0];

  //   let x = -80;
  //   let dx = 5;

  // badGuy.style.display = "none";
  badGuy.style.left = x + "px";
  badGuy.style.top = y + "px";
  badGuy.life = 5;
  // const appear = () => {
  //   if (x > 0) {
  //     badGuy.style.display = "block";
  //   }
  //   x += dx;
  //   badGuy.style.left = x + "px";
  // };
  badGuy.addEventListener("animationend", () => {
    badGuy.classList.add("bad-guy-shooting");
  });
  badGuy.addEventListener("click", e => {
    if (clip === 0) {
      emptyClip.play();
    } else {
      badGuy.classList.remove("bad-guy-shooting");
      badGuy.classList.add("bad-guy-dying");

      points++;
      $points.textContent = points;
      shoot.play();

      death.play();
      setTimeout(() => {
        badGuy.remove();
      }, 1500);
    }
  });
  // return setInterval(appear, 250);
};
badGuys.push(createBadGuy([70, null, "bad-guy-front"]));
badGuys.push(createBadGuy([70, 10, "bad-guy-ally"]));
// badGuys.push(createBadGuy(-70, null, "bad-guy-car"));
// badGuys.push(createBadGuy(-70, null, "bad-guy-right"));

// console.log(badGuys);
$container.addEventListener("click", e => {
  if (clip === 0) {
    emptyClip.play();
  } else {
    clip--;
    shoot.play();

    $bullet.style.left = e.x + "px";

    $bullet.style.top = e.y + "px";

    setTimeout(() => {
      $bullet.style.left = "50%";
      // $bullet.style.top = "0";
      $bullet.style.top = "100%";
      // $bullet.style.bottom = 0 + "px";
    }, 100);
  }
});

// const $badGuy = document.getElementsByClassName("bad-guy")[0];
// $badGuy.style.animation = "badGuy 3s 2s forwards";
// $badGuy.style.WebkitAnimation = "badGuy 3s 2s forwards";

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
