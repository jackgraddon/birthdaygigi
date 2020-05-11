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