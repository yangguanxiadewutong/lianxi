function xuan(data){
	$('.xuan_u1_li:lt(-1),.xuan_u2spac li').mouseenter(function (){
		var ye = $(this).index();
		$('.xuan li').removeClass('addborder');
		$('.xuan_u1_li').css('background','#f7f7f7');
		$('.yin').css('background','');
		$('.yitb,.yiz_ul,.spac1y,.spac1z').empty();
		$('.xuan_bei').css({left:3});
		if(ye == 0 || ye == 2){$(this).find('.xuan_bei').css({left:4});}
		if(ye == 1 || ye == 3){$(this).find('.xuan_bei').css({left:7});}
		$('.yinbox').css('top','-10px');
		
		var zheight = $(this).outerHeight();
		var ztop = $(this).position().top;
		$('.zhegai,.zhegai2').hide();
		$('.zhegai').css({height:zheight,top:ztop});
		if($(this).parent().hasClass('xuan_u2spac')){
			ye += 4;
			$('.yinbox').css('top','-19px');
			$('.xuan_u2 li').css('background','#f7f7f7');
			$('.zhegai2').show().css({height:zheight,top:ztop});
		}else {
			$('.xuan_u2 li').css('background','');
			$('.zhegai').show().css({height:zheight,top:ztop});
		}
		$(this).css('background','white').addClass('addborder');
		//console.log(ye);
		showy(data,ye);
		$('.yinbox').show();
		$('.yiz_ul li').hover(function (){
			$(this).find('img').css('top',-40);
		},function (){
			$(this).find('img').css('top',0);
		});
	})
	$('.xuan').mouseleave(function (){
		$('.yinbox').hide();
		$('.xuan_bei').css({left:3});
		$('.xuan li').css('background','').removeClass('addborder');
		$(this).css('background','');
		$('.zhegai,.zhegai2').hide();
	});
}
	
	function showy(data,i){   //显示.yinbox隐藏框里的内容
		var obj = data[i];
		var theType = obj.type;
		var messageArr = obj.message;
		$.each(messageArr,function (index,val){//该数组中有7个对象——tr,即该函数遍历7遍
		var objTr = val;
		var th = objTr.one;
		var tdArr = objTr.two;
		var liArr = objTr.three;
		$('<tr></tr>').appendTo('.yitb');
		$('<th>' + th + '</th>').appendTo('.yitb tr:eq(-1)');
		$('<td></td>').insertAfter('th:eq(-1)');  //$('<td></td>').appendTo('.yitb tr:eq(-1)');
		$.each(tdArr,function (index,val){
			var objTd = val;
			var a1Arr = objTd.two1;
			var a2Arr = objTd.two2;
			$('<a></a>').appendTo('.yitb td:eq(-1)');
			if(a1Arr != undefined){
				$.each(a1Arr,function (index,val){
					var objA1 = val;
					var name = objA1.two1a;
					var address = objA1.two1b;
					$('.yitb a:eq(-1)').append('' + name + '').attr('href','' + address + '').css('color','#666');
				});
			}else if(a2Arr != undefined){
				$.each(a2Arr,function (index,val){
					var objA2 = val;
					var name = objA2.two1a;
					var address = objA2.two1b;
					$('.yitb a:eq(-1)').append('' + name + '').attr('href','' + address + '').css('color','#f80');
				});
			}
			if(tdArr.length != (index + 1)){
				$('<b>|</b>').insertAfter('.yitb a:eq(-1)');  //$('<b>|</b>').appendTo('.yitb td:eq(-1)');
			}
		});
			//console.log(liArr.length);
			if(liArr != undefined){
				$.each(liArr,function (index,val){
					var objTu = val;
					var tuArr = objTu.three1;
					var spArr = objTu.three2;
					if(tuArr != undefined){
						$('<li></li>').appendTo('.yiz_ul');
						$.each(tuArr,function (index,val){
							var objnow = val;
							var tuAddress = objnow.three1a;
							var aAddress = objnow.three1b;
							$('<a></a>').appendTo('.yiz_ul li:eq(-1)').attr('href','' + aAddress + '');
							$('<img>').appendTo('.yiz_ul a:eq(-1)').attr('src','' + tuAddress + '');
						});
					}
					if(spArr != undefined){
						$.each(spArr,function (index,val){
							var objspacial = val;
							var tuAddress = objspacial.three1a;
							var lianAddress = objspacial.three1b;
							var spac = objspacial.three1c;
							$('.yin').css('background','url(' + tuAddress + ')');
							if(spac == 'spac1'){
								$('<div><a></a></div>').appendTo('.yin').addClass('spac1z');
							}
							$('<div><a></a></div>').appendTo('.yin').addClass('spac1y');
							$('[class*=spac1]').find('a').attr('href','' + lianAddress + '');
						});
					}
				});
			}
		});
	}



