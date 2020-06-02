var date = new Date();
let hour = date.getHours()
let minute = date.getMinutes();
// let time = `${hour}:${minute}`;
let time = `21:17`;
console.log(time);

let checkTime = function check() {
    if (Cookies.get('surprise') === 1) window.location.href = "#";
    if (time === '21:17') {
        window.location.href = "917/";
        Cookies.set('surprise', 1, { expires: 1 });
    }
}
setInterval(checkTime, 5000);