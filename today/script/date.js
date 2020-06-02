var date = new Date();
let hour = date.getHours()
let minute = date.getMinutes();
let time = `${hour}:${minute}`;
console.log(time);

let checkTime = function check() {
    if (time === '21:17') {
        window.location.href = "917/";
    }
}

setInterval(checkTime, 5000);