var t = setTimeout("visualShow()",3000);
	var tnum = 0;
	$(document).ready(function(){
		if($(".slide-item").length>1)
		{
			$(".slide-item").hide();
			$(".slide-item").eq(0).show();
			$(".trigger-item").eq(0).addClass("active");
	
			$(".trigger-item").each(function(index){
				$(".trigger-item").eq(index).mouseenter(function(){
					t = clearTimeout(t);
					tnum=index;
					setDesign();
				});
			});
			$(".trigger-item").mouseleave(function(){
				t = setTimeout("visualShow()",3000);
			});
			$(".main-slide .prev").click(function(){
				if(tnum > 0)
				{
					tnum--;
				}
				else
				{
					tnum = $(".trigger-item").length-1;
				}
				setDesign();
			});
			$(".main-slide .next").click(function(){
				if(tnum < $(".trigger-item").length-1)
				{
					tnum++;
				}
				else
				{
					tnum = 0;
				}
				setDesign();
			});
			$(".inpic-tab").mouseenter(function(){
				$(".main-slide .prev,.main-slide .next").show();
			});
			$(".inpic-tab").mouseleave(function(){
				$(".main-slide .prev,.main-slide .next").hide();
			});
			$(".main-slide .prev,.main-slide .next").hover(function(){t = clearTimeout(t);},function(){t = setTimeout("visualShow()",3000);});
		}
		else
		{
			$(".trigger-item").hide();
			$(".main-slide .prev,.main-slide .next").hide();
		}
	});

	function visualShow()
	{
		if(tnum < $(".trigger-item").length-1)
		{
			tnum++;
		}
		else
		{
			tnum = 0;
		}
		setDesign();
		t = setTimeout("visualShow()",5000);
	}
	function setDesign()
	{
		$(".slide-item").stop(false,true).fadeOut(1000);
		$(".slide-item").eq(tnum).stop(true,true).fadeIn(1000);
		$(".trigger-item").removeClass("active");
		$(".trigger-item").eq(tnum).addClass("active");
		
		var img_height=parseFloat($(".slide-item").eq(tnum).find("img").height());
		var _top=0;
		if(img_height==0) img_height=500;
		if(img_height<500) 
		{
			_top=(500-img_height)/2;
		}
		$(".inpic-tab").css({"height":img_height+"px"});
		$(".slide-item").eq(tnum).find("img").css({"margin-top":_top+"px"});
	}