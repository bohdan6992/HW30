
const main = document.querySelector('.timer__main-clock')
const btn = document.querySelector('.play-btn')
let time = document.querySelector('.time-inp');


btn.addEventListener('click', () => {
  time = document.querySelector('.time-inp').value;

  let dateInp = time.split(':');

  let hoursInp = dateInp[0];
  hoursInp  = Number(hoursInp * 3600);


  let minutesInp =  dateInp[1];
  minutesInp  = Number(minutesInp * 60);

  let timeInp = hoursInp + minutesInp;

  const dateNow = new Date();

  let hoursNow = dateNow.getHours();
  hoursNow *= 3600;

  let minutesNow =  dateNow.getMinutes();
  minutesNow *= 60;

  let timeNow = hoursNow + minutesNow;

  let timeResult = timeInp - timeNow;

  let hoursResult = Math.floor((timeResult) / 60 / 60);
  console.log(hoursResult);
  let minuteResult =  Math.floor((timeResult) / 60) - (hoursResult * 60);
  let secondsResult = 0;

  const showSecond = () => {

    let formattedTime = hoursResult + ':' + minuteResult + ':' + secondsResult;
    main.innerText = formattedTime;
    secondsResult--;
    if(secondsResult <= 0 && minuteResult > 0){
      minuteResult--;
      secondsResult = 60;
    }else if(minuteResult <= 0 && hoursResult > 0){
      hoursResult--;
      minuteResult = 59;
      secondsResult = 60;
    }else if(hoursResult <= 0 && minuteResult <= 0 && secondsResult <= 0){
      main.innerText = 'End';
      clearInterval(timer);
    }
  };
  const timer = setInterval(showSecond, 1000);
})






