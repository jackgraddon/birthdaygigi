var date = new Date();
let hour = date.getHours()
let minute = date.getMinutes();
// let time = `${hour}:${minute}`;
let time = `21:17`;
console.log(time);

let checkTime = function check() {
    if (Cookies.get('surprise') != '1') {
        if (time === '21:17') {
            window.open('917/');
            clearInterval(check917);
        }
    } else {
        console.log(Cookies.get('surprise'));
        clearInterval(check917);
    }
}
let check917 = setInterval(checkTime, 5000);