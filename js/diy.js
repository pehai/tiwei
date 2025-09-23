$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],

    });
});

      // 監聽第一屏動畫結束事件
document.addEventListener('DOMContentLoaded', function() {
    const firstScreen = document.querySelector('.ly-box01');
    
    // 監聽動畫結束事件
    firstScreen.addEventListener('animationend', function(e) {
        // 確保是最後一個動畫（bounce）結束
        if (e.animationName === 'bounce') {
            setTimeout($.fn.fullpage.moveSectionDown, 1000); // 動畫結束後等待1秒再滾動
        }
    });
});
