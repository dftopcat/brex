
// time below in seconds, mintes and hours
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;
//set the target countdown date and time for brexit
let countDown = new Date('Mar 29, 2019 23:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S BREXIT TIME!;
      //}

    }, second)