$(function () {
    UpdateSize();
    $("#Tabs li").hover(function () {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        if (_index > 0) {
            $(".contentpanel").show();
            $(".close-right").show();
            $(".contentpanel>.mainbox").eq(_index).show().siblings().hide();
        }
        else {
            $(".contentpanel").hide();
            $(".close-right").hide();
            $(".mainbox").hide();
        }
    }, function () { 
        
    })
    $(".close-right").click(function () {
        $(".contentpanel").hide();
        $(".close-right").hide();
        $(".mainbox").hide();
    })
})
$(window).resize(function() {
  UpdateSize();
});

function UpdateSize(){	
	var _width= parseFloat($(document).width());
	var _height=parseFloat($(window).height());
	if(_width<1200) _width=1200;
	if(_height<656) _height=656;
	$("body").css({"width":_width+"px","height":_height+"px"});
}