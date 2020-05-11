function claim(element) {
    let elem = document.getElementById(element);
    $(`#${element}`).addClass('pulse');
    setTimeout(()=> {
        elem.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    }, 1000)
}