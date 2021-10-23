const btn = document.querySelector('.game__actions-btn');
const score = document.querySelector('.game__actions-score');
const board = document.querySelector('.game__board');

for(i = 0; i < 100; i++){
  let box = document.createElement('div');
  box.className = 'game__board-box';
  board.appendChild(box);  
}

const boxes = document.querySelectorAll('.game__board-box');

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let clickCount = 0;
const startClikcFunc = () => {
  btn.removeEventListener("click", startClikcFunc);
  const randIndex = randomInteger(0, (boxes.length-1));
  const randBox = boxes[randIndex];

  randBox.style.backgroundColor = 'blue';

  const boxClikcFunc = () => {
    randBox.removeEventListener("click", startClikcFunc);
    randBox.style.backgroundColor = 'white';
    clickCount++;
    score.innerText =`Youor score is : ${clickCount}`;
    randBox.removeEventListener("click", boxClikcFunc);
  }
  randBox.addEventListener("click", startClikcFunc);
  randBox.addEventListener("click", boxClikcFunc);
}


btn.addEventListener("click", startClikcFunc);

  
  // randBox.class.add()
    

  // `
  // <div class="game__board-box_blue"></div>`
  // const celectBlock = () => {
  //   let randBlock = Math.floor((Math.random() * (100 - 1)) + 1);
  //   ball.style.transform = `translate(${randX}px, ${randY}px)`;
  // };

  // let clickCount = 0;
  // ball.addEventListener("mousedown", () => {
  //   clickCount++;
  //   score.innerText =`Youor score is : ${clickCount}`;
  //   if (clickCount === 50){
  //     wind.innerHTML =`
  //     <h1>YOU WIN!!!</h1>
  //     <input class="game__actions-reload" type="button" onclick="window.location.reload();" value="Try again" />`;
  //     score.innerText ='GAME OWER';
  //   }
  //   ball.style.backgroundColor = 'red';
  // });
  // ball.addEventListener("mouseup", () => {
  //   ball.style.backgroundColor = 'green';
  // });

  // setInterval(ballMoving, 1000);







