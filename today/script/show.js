function show(element) {
    let elem = document.getElementById(element);
    if (element == 'phone') {
        $(elem).removeClass('none');
        $(`#show${element}`).addClass('none');
        return;
    };
    $(elem).removeClass('none');
    $(elem).addClass('show');
    $(`#show${element}`).addClass('none');
    if ((element == 4) || (element == 5)) {
        $('html,body').animate({
            scrollTop: window.scrollY + 200
        });
        return;
    }
    document.getElementById(`${element}`).scrollIntoView({
        behavior: 'smooth'
    });
}

function show7() {
    $('#show7, #yay7').removeClass('none');
    $('#elem7').addClass('none');
}
function show9() {
    $('#show9, #yay9').removeClass('none');
    $('#elem9').addClass('none');
}
function show10() {
    $('#show10').removeClass('none');
    $('#elem10').addClass('none');
}