$(document).bind('keyup', function(e){
    if(e.which==220) {
      // "\"
      let i = 1;
      let n = 12;
      while (i <= n) {
          $(`#${i}`).removeClass('none');
          i++;
      }
    }
});