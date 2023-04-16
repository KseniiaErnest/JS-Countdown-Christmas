'use strict'

function christmasCountDown() {
  const christmasDate = new Date('December 25, 2023 00:00');
  const now = new Date();
  const diff = christmasDate - now;

  const msInSecond = 1000; // how many milliseconds in a second
  const msInMinute = 60 * 1000; // how many milliseconds in a minute
  const msInHour = 60 * 60 * 1000; // how many milliseconds in an hour
  const msInDay = 24 * 60 * 60 * 1000; // how many milliseconds in a day/24 hours

  const displayDay = Math.floor(diff / msInDay);
  document.querySelector('.days').textContent = displayDay;

  const displayHour = Math.floor((diff % msInDay) / msInHour);
  document.querySelector('.hours').textContent = displayHour;

  const displayMinutes = Math.floor((diff % msInHour) / msInMinute);
  document.querySelector('.minutes').textContent = displayMinutes;

  const displaySeconds = Math.floor((diff % msInMinute) / msInSecond);
  document.querySelector('.seconds').textContent = displaySeconds;

  // we need to fix a bug - clockdown goes - direction; it does not stop at 0;
  if (diff <= 0) {
    document.querySelector('.days').textContent = 0;
    document.querySelector('.hours').textContent = 0;
    document.querySelector('.minutes').textContent = 0;
    document.querySelector('.seconds').textContent = 0;
    clearInterval(intervalId);
    merryChristmas()
}

}

let intervalId = setInterval(christmasCountDown, 1000);

// Once the clockdown reached zero (0), the heading text changes function

function merryChristmas() {
  const heading = document.querySelector('h1');
  heading.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!!!';
  heading.classList.add('christmas-heading-red');
}


const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
document.querySelector('#myAudio').play();

button.addEventListener('dblclick', () => {
  document.querySelector('#myAudio').pause();
})

});
