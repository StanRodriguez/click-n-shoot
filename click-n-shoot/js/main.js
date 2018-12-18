let points = 0;
let clip = 7;
const classes = ["bad-guy", "bad-guy-front", "bad-guy-appear"];
const badGuys = [];
const $container = document.getElementsByClassName("container")[0];
const $bullet = document.getElementsByClassName("bullet")[0];
const shoot = new Audio("../assets/shoot.mp3");
const death = new Audio("../assets/death.mp3");
const emptyClip = new Audio("../assets/emptyClip.mp3");
const reload = new Audio("../assets/reload.mp3");
const $points = document.getElementsByClassName("points")[0];

const createBadGuy = (x = -80, dx = 5, className) => {
  // const y = Math.floor(Math.random() * 800);
  // console.log(y);
  const y = 600;
  const badGuy = document.createElement("div");
  badGuy.classList.add(className);
  $container.appendChild(badGuy);
  //   const $badGuy = document.getElementsByClassName("bad-guy")[0];

  //   let x = -80;
  //   let dx = 5;

  // badGuy.style.display = "none";
  // badGuy.style.left = x + "px";
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
badGuys.push(createBadGuy(-70, 10, "bad-guy-front"));
badGuys.push(createBadGuy(-70, 10, "bad-guy"));
// badGuys.push(createBadGuy(-70, 15));
// badGuys.push(createBadGuy(-70, 20));
// badGuys.push(createBadGuy(-70, 25));
// badGuys.push(createBadGuy(-70, 5));

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
document.body.addEventListener("keydown", e => {
  e.preventDefault();
  if (e.key == "r") {
    reload.play();
    clip = 7;
  }
});
