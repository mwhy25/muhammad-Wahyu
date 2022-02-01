var content = 'Hi... My name is Wahyu! I am Web Developer that gonna make your dream website come true';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('#coba').each(function(i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});