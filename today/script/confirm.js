function claim(element) {
    let elem = document.getElementById(element);
    $(`#${element}`).addClass('pulse');
    elem.innerHTML = 'Claiming';
    setTimeout(() => {
        elem.innerHTML = 'Claiming.';
    }, 250)
    setTimeout(() => {
        elem.innerHTML = 'Claiming..';
    }, 500)
    setTimeout(() => {
        elem.innerHTML = 'Claiming...';
    }, 750)
    setTimeout(() => {
        elem.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
        $(`#${element}`).attr('onclick', `claimed('${element}')`);
    }, 1000);
    setTimeout(()=> {
        $(`#${element}`).removeClass('pulse');
    }, 2000);
}

function claimed(element) {
    let elem = document.getElementById(element);
    elem.innerHTML = `You've already claimed this!`;
    setTimeout(() => {
        elem.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    }, 2000)
}