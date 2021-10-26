const btn = document.querySelector('.game__actions-btn');
const score = document.querySelector('.game__actions-score');
const board = document.querySelector('.game__board');
const timer = document.querySelector('.game__actions-timer');
const actions = document.querySelector('.game__actions');
const popuptext = document.querySelector('.popuptext');

for(i = 0; i < 100; i++){
  let box = document.createElement('div');
  box.className = 'game__board-box';
  board.appendChild(box);  
}

const popupFunc = () => {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const boxes = document.querySelectorAll('.game__board-box');

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let time = 59;
let clickCount = 0;
let startClick = 0;

const startClikcFunc = () => {
  startClick++;
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
      if(time < 10){
        time =`0${time}`;
      }
      if(time < 1){
        popupFunc()
        popuptext.innerHTML = `
        <h1>Nice try!!!</h1>
        <h3>Youor score is : ${clickCount}</h3>
        <input class="game__actions-reload" type="button" onclick="window.location.reload();" value="Try again" />`;
        timer.style.display = 'none'
        btn.style.display = 'none'
        score.style.display = 'none'
        board.innerHTML =`
          <video loop width='700' height='500' autoplay>
            <source src="./video/video.mp4" type="video/mp4">
          </video>`
      }
    }, 1000)
  }
  
  if(startClick === 1 ){
    setTimeout(showSeconds)
  }

  randBox.addEventListener("click", startClikcFunc);
  randBox.addEventListener("click", boxClikcFunc);
}

btn.addEventListener("click", startClikcFunc);







