var date = new Date();
let month = date.getMonth();
let day = date.getDate()
console.log('Month', month);
console.log('Day', day);

let header = document.getElementById('header');

if ((month < 5) || (month >= 7)) {
    header.innerHTML = `It isn't your birthday yet, silly!`;
} else if ((month > 5) && (month < 7)) {
    header.innerHTML = `You already had your birthday!`;
} else if (month = 5) {
    switch (day) {
        case 1:
            header.innerHTML = `So close! You're almost there!`;
            break;
        case 2:
            header.innerHTML = `So excited! You will be 16 tomorrow!!!!`;
            break;
        case 3:
            window.location.href = 'today/';
            break;
        default:
            header.innerHTML = `You already had your birthday!`;
            break;
    }
}