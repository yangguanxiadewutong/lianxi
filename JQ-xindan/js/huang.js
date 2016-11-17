function getstyle(obj,fang){
	if(window.getComputedStyle){
		return getComputedStyle(obj)[fang];
	}else {
		return obj.currentStyle[fang];
	}
}

function move(obj,fang,mu,fun,a){
	clearInterval(obj.time);
	obj.time = setInterval(function (){
		var now = getstyle(obj,fang);
		//console.log(now);
		if(fang == "opacity"){
			now = now * 100;
		}
		now = parseInt(now);
		//console.log(now);
		if(now == mu){
			clearInterval(obj.time);
			fun && fun();             //  重点：若是fan不是undefined,则返回回调函数。
			return;
		}
		
		if(a == undefined){
			var speed = (mu - now)/7;                         //这他喵的都是套路啊。。。
			speed = (speed > 0)? Math.ceil(speed) : Math.floor(speed);  //这他喵的都是套路啊。。。
		}else {
			var speed = a;
		}
		
		if(fang == "opacity"){
			obj.style.opacity = (now + speed) / 100 ;
			obj.style.filter = "alpha(opacity=" + now + speed + ")";
		}else{
			obj.style[fang] = now + speed + "px";
		}
		
	},80);
}
function gun(obj,fang,mu){
	clearInterval(obj.time);
	obj.time = setInterval(function (){
		var now = parseInt(obj[fang]);//
		console.log(now);
		if(now == mu){
			clearInterval(obj.time);
			return;
		}
		var speed = (mu - now)/7;                       
		speed = (speed > 0)? Math.ceil(speed) : Math.floor(speed); 
		 
		console.log(speed);
		document.body.scrollTop = now + speed;
		document.documentElement.scrollTop = now + speed;
	},50);
}


function yidong(obj,fang,speed,fun){
	var now = getstyle(obj,fang);
	now = parseInt(now);//1360,660
	console.log(now);
	if(fang == "left"){
		if(!(now <= 0 && speed < 0) && !(now >= 1320 && speed >0)){
			obj.style[fang] = now + speed + "px";
		}
	}
	if(fang == "top"){
		if(!(now <= 0 && speed < 0) && !(now >= 610 && speed >0)){
			obj.style[fang] = now + speed + "px";
		}
	}
	obj.innerHTML = parseInt(obj.style[fang]);
}


function duo(obj,objt,fun){
	clearInterval(obj.time);
	
	obj.time = setInterval(function (){
		//console.log(now);
		for(var key in objt){
			var lock = false;
			var fang = key;
			var mu = objt[key];
			var now = getstyle(obj,fang);
			if(fang == "opacity"){
				now = now * 100;
			}
			now = parseInt(now);
			//console.log(now);
			if(now != mu){
				lock = true;
			}else {
				continue;
			}
			
			var speed = (mu - now)/7;                         //这他喵的都是套路啊。。。
			speed = (speed > 0)? Math.ceil(speed) : Math.floor(speed);  //这他喵的都是套路啊。。。
			
			if(fang == "opacity"){
				obj.style.opacity = (now + speed) / 100 ;
				obj.style.filter = "alpha(opacity=" + now + speed + ")";
			}else{
				obj.style[fang] = now + speed + "px";
			}
		}	
		console.log(obj.style["height"],mu,now,speed);
		if(lock == false){
			clearInterval(obj.time);
			fun && fun();
		}
		
		
	},80);
}


function jiaodu(obj,mu,a,fun){
	clearInterval(obj.time);
	var now = 0;
	obj.time = setInterval(function (){
		var speed = a;
		obj.style.webkitTransform = "rotate(" + now + speed + "deg)";
		if((mu == now - 2)){
			clearInterval(obj.time);
			fun && fun();             //  重点：若是fan不是undefined,则返回回调函数。
			return;
		}
		now = now + speed;
		//console.log(obj.style.webkitTransform);
	},30);
}

function changergba(obj,mu,a,b,c,x,fun){
	clearInterval(obj.time);
	var now = x;
	obj.time = setInterval(function (){
		if(now == mu){
			clearInterval(obj.time);
			fun && fun();             //  重点：若是fan不是undefined,则返回回调函数。
			return;
		}
		if(mu == 1){
			var speed = 0.1; 
		}else {
			var speed = -0.1;
		}
		now = now + speed;
		//console.log(now);
		obj.style.background = "rgba(" + a + "," + b + "," + c + "," + now + ")";
		now = now.toFixed(1);
		now = Number(now);
	},30);
}