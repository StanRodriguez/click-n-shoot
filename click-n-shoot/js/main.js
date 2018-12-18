let points = 0;
const badGuys = [];
const $container = document.getElementsByClassName("container")[0];
const $bullet = document.getElementsByClassName("bullet")[0];
const createBadGuy = (x = -80, dx = 5) => {
  const y = Math.floor(Math.random() * 600);
  console.log(y);

  const badGuy = document.createElement("div");
  badGuy.classList.add("bad-guy");
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
    console.log(5);
  });
  badGuy.addEventListener("click", e => {
    badGuy.classList.add("bad-guy-dying");
    points++;
    console.log(e);
    setTimeout(() => {
      badGuy.remove();
    }, 1500);
  });
  // return setInterval(appear, 250);
};
badGuys.push(createBadGuy(-70, 10));
badGuys.push(createBadGuy(-70, 15));
badGuys.push(createBadGuy(-70, 20));
badGuys.push(createBadGuy(-70, 25));
badGuys.push(createBadGuy(-70, 5));

console.log(badGuys);
$container.addEventListener("click", e => {
  $bullet.style.left = e.x + "px";

  $bullet.style.top = e.y + "px";
  setTimeout(() => {
    $bullet.style.left = "50%";
    // $bullet.style.top = "0";
    $bullet.style.top = "100%";
    // $bullet.style.bottom = 0 + "px";
  }, 100);
  console.log(e);
});

// const $badGuy = document.getElementsByClassName("bad-guy")[0];
// $badGuy.style.animation = "badGuy 3s 2s forwards";
// $badGuy.style.WebkitAnimation = "badGuy 3s 2s forwards";
