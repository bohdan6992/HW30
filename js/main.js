const btn = document.querySelector('.game__actions-btn');
const score = document.querySelector('.game__actions-score');
const board = document.querySelector('.game__board');
const timer = document.querySelector('.game__actions-timer');

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

let time = 59;

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

  const showSeconds = () => {
    setInterval(() =>{
      timer.innerText =`00:${time}`;
      time--;
      if(time === 0){
        board.innerText = 'GAME OWER'
      }
    }, 1000)
  }
  //////
  if(clickCount == 1 ){
    showSeconds()
  }else if (clickCount > 1 ){
    setTimeout(showSeconds, 1000000)
    console.log(clickCount)
  }
  /////////
  randBox.addEventListener("click", startClikcFunc);
  randBox.addEventListener("click", boxClikcFunc);
}


btn.addEventListener("click", startClikcFunc);
console.log(clickCount)






