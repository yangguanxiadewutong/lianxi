function cotc_lunbo(){
	var i = 0;
	$('.cotc_lunbo:eq(0) li').eq(0).clone().appendTo('.cotc_lunbo:eq(0)');
	$('.cotc_dian:eq(0) li').eq(0).addClass('lunbg');
	var countlun = $('.cotc_lunbo:eq(0) li').length;
	var time = setInterval(function (){
		i++;
		yidong();
	},3000);
	
	function yidong(){
		var chang = $('.cotc_lunbo:eq(0) li').width();
		if(i < 0){
			var shu = -1 * chang * (countlun - 1);
			$('.cotc_lunbo:eq(0)').css('left',shu);//属性值这里可以只填数字
			i = countlun - 2;
		}
		if(i >= countlun){
			$('.cotc_lunbo:eq(0)').css('left','0px');
			i = 1;  //需要好好理解的地方
		}
		$('.cotc_dian:eq(0) li').removeClass('lunbg').eq(i).addClass('lunbg');
		if(i == countlun - 1){
			$('.cotc_dian:eq(0) li').removeClass('lunbg').eq(0).addClass('lunbg');
		}
		var yi = -1 * chang * i;
		$('.cotc_lunbo:eq(0)').stop().animate({left:yi},200);
	}
	$('.cotc_dian:eq(0) li').mouseenter(function (){
		i = $(this).index();
		yidong();
	});
	
	$('.cotc_lun:eq(0)').hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval(function (){
			i++;
			yidong();
		},3000)
	});
}

function cotd_lunbo(){
	var i = 0;
	$('.cotd_lunbo li').eq(0).clone().appendTo('.cotd_lunbo');
	$('.cotd_dian li').eq(0).addClass('lunbg');
	var countlun = $('.cotd_lunbo li').length;
	var time = setInterval(function (){
		i++;
		yidong();
	},3000);
	
	function yidong(){
		var chang = $('.cotd_lunbo li').width();
		if(i < 0){
			var shu = -1 * chang * (countlun - 1);
			$('.cotd_lunbo').css('left',shu);//属性值这里可以只填数字
			i = countlun - 2;
		}
		if(i >= countlun){
			$('.cotd_lunbo').css('left','0px');
			i = 1;  //需要好好理解的地方
		}
		$('.cotd_dian li').removeClass('lunbg').eq(i).addClass('lunbg');
		if(i == countlun - 1){
			$('.cotd_dian li').removeClass('lunbg').eq(0).addClass('lunbg');
		}
		var yi = -1 * chang * i;
		$('.cotd_lunbo').stop().animate({left:yi},200);
	}
	$('.cotd_dian li').mouseenter(function (){
		i = $(this).index();
		yidong();
	});
	
	$('.cotd_lun').hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval(function (){
			i++;
			yidong();
		},3000)
	});
}

function cote_lunbo(){
	var i = 0;
	$('.cote_lunbo li').eq(0).clone().appendTo('.cote_lunbo');
	$('.cote_dian li').eq(0).addClass('lunbg');
	var countlun = $('.cote_lunbo li').length;
	var time = setInterval(function (){
		i++;
		yidong();
	},3000);
	
	function yidong(){
		var chang = $('.cote_lunbo li').width();
		if(i < 0){
			var shu = -1 * chang * (countlun - 1);
			$('.cote_lunbo').css('left',shu);//属性值这里可以只填数字
			i = countlun - 2;
		}
		if(i >= countlun){
			$('.cote_lunbo').css('left','0px');
			i = 1;  //需要好好理解的地方
		}
		$('.cote_dian li').removeClass('lunbg').eq(i).addClass('lunbg');
		if(i == countlun - 1){
			$('.cote_dian li').removeClass('lunbg').eq(0).addClass('lunbg');
		}
		var yi = -1 * chang * i;
		$('.cote_lunbo').stop().animate({left:yi},200);
	}
	$('.cote_dian li').mouseenter(function (){
		i = $(this).index();
		yidong();
	});
	
	$('.cote_lun').hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval(function (){
			i++;
			yidong();
		},3000)
	});
}

function cotf_lunbo(){
	var i = 0;
	$('.cotf_lunbo li').eq(0).clone().appendTo('.cotf_lunbo');
	$('.cotf_dian li').eq(0).addClass('lunbg');
	var countlun = $('.cotf_lunbo li').length;
	var time = setInterval(function (){
		i++;
		yidong();
	},3000);
	
	function yidong(){
		var chang = $('.cotf_lunbo li').width();
		if(i < 0){
			var shu = -1 * chang * (countlun - 1);
			$('.cotf_lunbo').css('left',shu);//属性值这里可以只填数字
			i = countlun - 2;
		}
		if(i >= countlun){
			$('.cotf_lunbo').css('left','0px');
			i = 1;  //需要好好理解的地方
		}
		$('.cotf_dian li').removeClass('lunbg').eq(i).addClass('lunbg');
		if(i == countlun - 1){
			$('.cotf_dian li').removeClass('lunbg').eq(0).addClass('lunbg');
		}
		var yi = -1 * chang * i;
		$('.cotf_lunbo').stop().animate({left:yi},200);
	}
	$('.cotf_dian li').mouseenter(function (){
		i = $(this).index();
		yidong();
	});
	
	$('.cotf_lun').hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval(function (){
			i++;
			yidong();
		},3000)
	});
}


function cotg_lunbo(){
	var i = 0;
	$('.cotg_lunbo li').eq(0).clone().appendTo('.cotg_lunbo');
	$('.cotg_dian li').eq(0).addClass('lunbg');
	var countlun = $('.cotg_lunbo li').length;
	var time = setInterval(function (){
		i++;
		yidong();
	},3000);
	
	function yidong(){
		var chang = $('.cotg_lunbo li').width();
		if(i < 0){
			var shu = -1 * chang * (countlun - 1);
			$('.cotg_lunbo').css('left',shu);//属性值这里可以只填数字
			i = countlun - 2;
		}
		if(i >= countlun){
			$('.cotg_lunbo').css('left','0px');
			i = 1;  //需要好好理解的地方
		}
		$('.cotg_dian li').removeClass('lunbg').eq(i).addClass('lunbg');
		if(i == countlun - 1){
			$('.cotg_dian li').removeClass('lunbg').eq(0).addClass('lunbg');
		}
		var yi = -1 * chang * i;
		$('.cotg_lunbo').stop().animate({left:yi},200);
	}
	$('.cotg_dian li').mouseenter(function (){
		i = $(this).index();
		yidong();
	});
	
	$('.cotg_lun').hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval(function (){
			i++;
			yidong();
		},3000)
	});
}

function cb_lunbo(){
	var i = 0;
	$('.cb_lunbbo li').eq(0).clone().appendTo('.cb_lunbbo');
	$('.cb_dian li').eq(0).addClass('cbbg');
	var countlun = $('.cb_lunbbo li').length;
	var time = setInterval(function (){
		i++;
		yidong();
	},3000);
	
	function yidong(){
		var chang = $('.cb_lunbbo li').width();
		if(i < 0){
			var shu = -1 * chang * (countlun - 1);
			$('.cb_lunbbo').css('left',shu);//属性值这里可以只填数字
			i = countlun - 2;
		}
		if(i >= countlun){
			$('.cb_lunbbo').css('left','0px');
			i = 1;  //需要好好理解的地方
		}
		$('.cb_dian li').removeClass('cbbg').eq(i).addClass('cbbg');
		if(i == countlun - 1){
			$('.cb_dian li').removeClass('cbbg').eq(0).addClass('cbbg');
		}
		var yi = -1 * chang * i;
		$('.cb_lunbbo').stop().animate({left:yi},200);
	}
	$('.cb_dian li').mouseenter(function (){
		i = $(this).index();
		yidong();
	});
	
	$('.cbbut_right').hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval(function (){
			i++;
			yidong();
		},3000)
	});
}

function ca_luna(){
	var i = 0;
	$('.lunaadj li').eq(0).addClass('addliang');
	var time = setInterval(function (){
		i++;
		yidong();
	},4000);
	function yidong(){
		var counts = $('.lunaax li').length;
		if(i >= counts){
			i = 0;
		}
		$('.lunaadj li').finish().removeClass('addliang').eq(i).addClass('addliang');
		$('.lunaax li').finish().removeClass('addshan').fadeOut(50).eq(i).fadeIn(1000);
	}
	
	$('.lunaadj li').mouseenter(function (){
		i = $(this).index();
		yidong();
	});
	
	$('.lunaa').hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval(function (){
			i++;
			yidong();
		},4000)
	});
}


function ca_lunab(){
	var i = 0;
	$('.lunabx li').eq(0).clone().appendTo('.lunabx');
	$('.lunabj li').eq(0).addClass('addyan');
	var countlun = $('.lunabx li').length;
	var time = setInterval(function (){
		i++;
		yidong();
	},3000);
	
	function yidong(){
		var chang = $('.lunabx li').width();
		if(i < 0){
			var shu = -1 * chang * (countlun - 1);
			$('.lunabx').css('left',shu);//属性值这里可以只填数字
			i = countlun - 2;
		}
		if(i >= countlun){
			$('.lunabx').css('left','0px');
			i = 1;  //需要好好理解的地方
		}
		$('.lunabj li').removeClass('addyan').eq(i).addClass('addyan');
		if(i == countlun - 1){
			$('.lunabj li').removeClass('addyan').eq(0).addClass('addyan');
		}
		var yi = -1 * chang * i;
		$('.lunabx').stop().animate({left:yi},200);
	}
	$('.lunabj li').mouseenter(function (){
		i = $(this).index();
		yidong();
	});
	
	$('.lunab').hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval(function (){
			i++;
			yidong();
		},3000)
	});
}
