const btn = document.querySelector('.game__actions-btns_btn');
const ball = document.querySelector('.game__window-ball');
const score = document.querySelector('.game__actions-score');
const wind = document.querySelector('.game__window');
const width = wind.clientWidth - ball.clientWidth;
const height = wind.clientHeight - ball.clientHeight;

btn.addEventListener("click", () => {
  const ballMoving = () => {
    let randY = Math.floor((Math.random() * (height - 1)) + 1);
    let randX = Math.floor((Math.random() * (width - 1)) + 1);
    ball.style.transform = `translate(${randX}px, ${randY}px)`;
  };

  let clickCount = 0;
  ball.addEventListener("mousedown", () => {
    clickCount++;
    score.innerText =`Youor score is : ${clickCount}`;
    if (clickCount === 50){
      wind.innerHTML =`
      <h1>YOU WIN!!!</h1>
      <input class="game__actions-reload" type="button" onclick="window.location.reload();" value="Try again" />`;
      score.innerText ='GAME OWER';
    }
    ball.style.backgroundColor = 'red';
  });
  ball.addEventListener("mouseup", () => {
    ball.style.backgroundColor = 'green';
  });

  setInterval(ballMoving, 1000);
});







