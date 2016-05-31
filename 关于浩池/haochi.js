$(function(){
   


	var oDiv = $('.fencai_slide')
	var oUlBig =$('.fencai_slide .oUlplay');
    var aBigLi =$('.oUlplay li');
    var oDivSmall =$('.fencai_slide ._navs');
    var aLiSmall = $('._navs a');
    var oPre=$('.left');
    var oNext=$('.right');
    var now = 0;
    aLiSmall.each(function(e){
     	$(this).click(function(){
     		now=e;
	     	tab();
    	});
    });

   var timer = setInterval(function(){
    	now++;
    	if(now<5){
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
    	if(now<5){
    		tab();
    	}else{
    		now=0;
    		tab();
    	}
    }, 2000); //滚动间隔时间设置
    });


    oPre.click(function() {
            now--;
            if (now == -1) {
                now = aBigLi.length-3;
            }
            tab();
            console.log(now);
    });

    oNext.click(function() {
        now++;
        if (now == aBigLi.length-2) {
            now = 0;
        }
        tab();
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





});