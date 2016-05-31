$(function(){
	// $('#fullpage').fullpage({

	// });
	window.scrollReveal = new scrollReveal(
		reset:true;
	);

	// $('.span').toggle(function(){
	// 	$('.head-d').addClass('show');
		
	// },function(){
	// 	$('.head-d').removeClass('show');
	// });
	$('.span').click(function(){
		$('.head-d').slideToggle();
	})
	var oDiv = $('.playbox')
	var oUlBig =$('.playbox .oUlplay');
    var aBigLi =$('.oUlplay li');
    var oDivSmall =$('.playbox .smalltitle');
    var aLiSmall = $('.smalltitle li');
    var now = 0;
    aLiSmall.each(function(e){
     	$(this).click(function(){
     		now=e;
	     	tab();
    	});
    });
   var timer = setInterval(function(){
    	now++;
    	if(now<3){
    		tab();
    	}else{
    		now=0;
    		tab();
    	}
    }, 2000); //滚动间隔时间设置
    oDiv.mouseover(function() {
        clearInterval(timer);
    });
    oDiv.mouseout(function() {
        timer = setInterval(function(){
    	now++;
    	if(now<3){
    		tab();
    	}else{
    		now=0;
    		tab();
    	}
    }, 2000); ; //滚动间隔时间设置
    });
    function tab(){
    	aLiSmall.each(function(){
     		aLiSmall.removeClass();
     	});
     	$('.smalltitle li:eq('+now+')').addClass('thistitle');
     	startMove(oUlBig, 'left', -(now * aBigLi[0].offsetWidth));
    }
    function startMove(obj, att, add) {
	    clearInterval(obj.timer)
	    obj.timer = setInterval(function() {
	        var cutt = Math.round(parseFloat(obj.css(att)));
	        // alert(cutt);
	        var speed = (add - cutt) / 8;
	        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	        if (cutt == add) {
	            clearInterval(obj.timer)
	        } else {
	             obj.css(att,cutt+speed+'px');
	        }
	    }, 30)
	}	   
	//移动1	   
	var i=0
	setInterval(function(){
	   i++
	   if(i%2==0){
	      $('#ul').animate({left:'0'},1000);
	     
	   }else{
	     	$('#ul').animate({left:'-646px'},1000);
	   }
	},4000)


	$('#ul li').each(function(i){
		$(this).hover(function(){
			$('.yc:eq('+i+')').animate({top:'-40px'});
		},function(){
			$('.yc:eq('+i+')').animate({top:'298px'});
		});
	});
	
	//移动2
	var n=0
	setInterval(function(){
	   n++;
	   if(n%2==0){
	      $('.ul-l ul').animate({left:'0'},1000);
	     
	   }else{
	     	$('.ul-l ul').animate({left:'-610px'},1000);
	   }
	},4000)

	$('.ul-l li').each(function(i){
		$(this).hover(function(){
			$('.tm:eq('+i+')').animate({top:'0px'});
			$('.ul-l h3').toggleClass('down');
		},function(){
			$('.tm:eq('+i+')').animate({top:'298px'});
			$('.ul-l h3').toggleClass('show');
		});
	});

	// 内容三
	var n=0
	setInterval(function(){
	n++;
	if(n>24){
	  n=24
	}
	$('._ban .js span:eq(0)').html(n);
	$('._ban .js span:eq(0)').css('fontSize','50px');
	},100)
	

	var a=0
	setInterval(function(){
	a++;
	if(a>3000){
	  a=3000
	}
	$('._ban .js span:eq(1)').html(a);
	$('._ban .js span:eq(1)').css('fontSize','50px');
	},1)

	var b=0
	setInterval(function(){
	b++;
	if(b>300){
	  b=300
	}
	$('._ban .js span:eq(2)').html(b);
	$('._ban .js span:eq(2)').css('fontSize','50px');
	},10)

	var c=0
	setInterval(function(){
	c++;
	if(c>100){
	  c=100
	}
	$('._ban .js span:eq(3)').html(c);
	$('._ban .js span:eq(3)').css('fontSize','50px');
	},10)	

	// 侧边	
		$('.cebian_dh .qq').hover(function(){

	  $('.cebian_dh .yc1').animate({'width':'250px'})
	 }, function(){
	    $('.cebian_dh .yc1').animate({'width':'0px'})
	}) 

	  $('.cebian_dh .dianhua').hover(function(){

	  $('.cebian_dh .yc2').animate({'width':'250px'})
	 }, function(){
	    $('.cebian_dh .yc2').animate({'width':'0px'})
	})


	  $('.cebian_dh .shouji').hover(function(){

	  $('.cebian_dh .yc3').animate({'width':'250px'})
	 }, function(){
	    $('.cebian_dh .yc3').animate({'width':'0px'})
	})


	  $('.bds_more').mouseover(function(){
	  		$('._sharedisplay').css('display','block');
	  });
	  $('.bds_more').mouseout(function(){
	  		$('._sharedisplay').css('display','none');
	  });
});

