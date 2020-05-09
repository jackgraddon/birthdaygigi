function hide(element) {
    $(`#${element}`).addClass('animShrinkOut');
    setTimeout(function() {
        $(`#${element}`).addClass('none');
    }, 2000);
}