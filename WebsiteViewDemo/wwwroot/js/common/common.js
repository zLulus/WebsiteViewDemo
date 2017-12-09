$(function(){
	$('a').bind('focus', function () { if (this.blur) { this.blur() }; }); // 去除a标签点击时的外部虚线
    var pid = $("#pageid").val();
    $("#mainnav li").eq(pid).addClass("active");	
	

    $("#SearchKey").keydown(function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            $("#SearchBtn").click();
            return false;
        }
    });
    $("#SearchBtn").click(function () {
        var keys = $("#SearchKey").val()
        if (keys == "请输入搜索关键词" || keys == "") {
            alert("请输入搜索关键词");
            $("#SearchKey").focus();
            return;
        }
        //keys = escape(keys);
        //keys = unescape(keys);
        window.location.href = $("#SearchBtn").attr("posturl") + "?key=" + keys;
    })

	goToTop();
})
function goToTop() { //返回顶部
    $('#backTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow'); //慢慢回到页面顶部
        return false;
    });
     var headHeight = 145;
    $(window).scroll(function () {
        /*参考行程天数悬浮导航开始*/
        var scrollTop = $(window).scrollTop();
        var _top=scrollTop-headHeight+3;
        var _top_case=scrollTop-headHeight+14;
        if (scrollTop < headHeight)
        {
        	_top = 1;
        	_top_case=12;
        }
        $('div.navlist').stop().animate({ top: _top });
        $("#CaseMainNav").stop().animate({ top: _top_case });
    });
}