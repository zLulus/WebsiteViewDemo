/**
 * jQuery jslides 1.1.0
 *
 * http://www.cactussoft.cn
 *
 * Copyright (c) 2009 - 2013 Jerry
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
$(function(){
	var numpic = $('#slides_news li').size()-1;
	var nownow = 0;
	var inout = 0;
	var TT = 0;
	var SPEED = 5000;
	$('#slides_news li').eq(0).siblings('li').css({'display':'none'});
	var ulstart = '<div id="pagination_news"><div class="pbox"><div class="plist">',
		ulcontent = '',
		ulend = '</div></div></div>';
	ADDLI();
	var pagination_news = $('#pagination_news span');
	var pagination_newswidth = $('#pagination_news').width();
	//$('#pagination_news').css('margin-left',(470-pagination_newswidth))	
	pagination_news.eq(0).addClass('current')		
	function ADDLI(){
		//var lilicount = numpic + 1;
		for(var i = 0; i <= numpic; i++){
			ulcontent += '<span>' + (i+1) + '</span>';
			//ulcontent += '<span></span>';
		}		
		$('#slides_news').after(ulstart + ulcontent + ulend);	
	}

	pagination_news.on('click',DOTCHANGE)	
	function DOTCHANGE(){		
		var changenow = $(this).index();		
		$('#slides_news li').eq(nownow).css('z-index','9');
		$('#slides_news li').eq(changenow).css({'z-index':'8'}).show();
		pagination_news.eq(changenow).addClass('current').siblings('span').removeClass('current');
		$('#slides_news li').eq(nownow).fadeOut(400,function(){$('#slides_news li').eq(changenow).fadeIn(500);});
		nownow = changenow;
	}
	
	pagination_news.mouseenter(function(){
		inout = 1;
	})
	
	pagination_news.mouseleave(function(){
		inout = 0;
	})
	
	function GOGO(){
		
		var NN = nownow+1;
		
		if( inout == 1 ){
			} else {
			if(nownow < numpic){
			$('#slides_news li').eq(nownow).css('z-index','9');
			$('#slides_news li').eq(NN).css({'z-index':'8'}).show();
			pagination_news.eq(NN).addClass('current').siblings('span').removeClass('current');
			$('#slides_news li').eq(nownow).fadeOut(400,function(){$('#slides_news li').eq(NN).fadeIn(500);});
			nownow += 1;

		}else{
			NN = 0;
			$('#slides_news li').eq(nownow).css('z-index','9');
			$('#slides_news li').eq(NN).stop(true,true).css({'z-index':'8'}).show();
			$('#slides_news li').eq(nownow).fadeOut(400,function(){$('#slides_news li').eq(0).fadeIn(500);});
			pagination_news.eq(NN).addClass('current').siblings('span').removeClass('current');
			nownow=0;
			}
		}
		TT = setTimeout(GOGO, SPEED);
	}
	
	TT = setTimeout(GOGO, SPEED); 

})