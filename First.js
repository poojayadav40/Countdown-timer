const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

// Time constants in milliseconds
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  // Taking inputs from userr
  const enteredDay = prompt("Enter Day (DD)", "00").padStart(2, "0");
  const enteredMonth = prompt("Enter Month (MM)", "00").padStart(2, "0");
  const enteredYear = prompt("Enter Year (YYYY)", "0000");
  const enteredHour = prompt("Enter Hour in 24-hr format (0-23)", "11").padStart(2, "0");
  const enteredMinute = prompt("Enter Minute (0-59)", "00").padStart(2, "0");

  // Construct target Date string formatted as: MM/DD/YYYY HH:MM:00
  const targetDateString = `${enteredMonth}/${enteredDay}/${enteredYear} ${enteredHour}:${enteredMinute}:00`;
  const targetTime = new Date(targetDateString).getTime();

  // Run interval every 1000ms (1 second)
  const intervalId = setInterval(() => {
    const today = new Date().getTime();
    const difference = targetTime - today;

    // Stop timer when target time is reached
    if (difference <= 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Time is Up";
      clearInterval(intervalId);
      return;
    }

    // Calculating remaining time
    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);

    // Updating DOM
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;
  }, 1000);
};

timerFunction();