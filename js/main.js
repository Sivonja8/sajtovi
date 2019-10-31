$(document).ready(function(){

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $('.js_copy').click(function(){
        if(execCopy($(this).next().text())){
            alert('コピーしました');
        }
        else {
            alert('このブラウザでは対応していません');
        }
        return false;
    });
});


function execCopy(string){
    var temp = document.createElement('textarea');
    temp.value = string;
    temp.selectionStart = 0;
    temp.selectionEnd = temp.value.length;
    var s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';
    document.body.appendChild(temp);
    temp.focus();
    var result = document.execCommand('copy');
    temp.blur();
    document.body.removeChild(temp);
    return result;
}