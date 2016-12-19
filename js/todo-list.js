$(function(){
	var add=$(".add");
	var backarr=["url(img/1.jpg)","url(img/10.jpg)","url(img/3.jpg)","url(img/4.jpg)","url(img/5.jpg)","url(img/8.jpg)","url(img/9.jpg)"];
	var r;
	var del=$(".delete");
	var input=$("input")
	var tijiao=$(".tijiao")
	var todo=[];
	var tan=$(".tan")
	add.on("touchend",function(){
		tan.addClass("active")
	})
	 if(localStorage.x){
	        todo=JSON.parse(localStorage.x);
	        for(var i=0;i<todo.length;i++){
	        	var c=(todo[i].state)?"done":"";
	            $("<li  class='"+c+"'><div class='content' >"+todo[i].name+"</div><div class='re'></div><div class='delete'></div></li>").appendTo($(".ul"));
	            var r= Math.floor((Math.random()*backarr.length));
	            $(".ul li").css("background",backarr[r]) 
	        }
	    }
//	    tan.on("touchend","tijiao",function(){
//	    	tan.removeClass("active")
//	    })
	    tijiao.on("touchend",function(){
	        var v=$.trim(input.val());
	        if(!v){
	        	return;
	        }
	        var todos={
	        	name:v,
	        	state:0
	        };
	        todo.push(todos);
	        localStorage.x=JSON.stringify(todo);
	        $("<li class='"+c+"'><div class='content'>"+v+"</div><div class='re'></div><div class='delete'></div></li>").appendTo($(".ul"));
	        $(".ul li").css("background",backarr[r]) 
	        input.val("");
	        $(".tan").removeClass("active");
	    })
//	    var re=$(".re");
//	    re.on("touchend",function(){
//	    	$(this).closest("li").addClass("done")
//				todo[$(this).closest("li").index()].state=1;
//				localStorage.x=JSON.stringify(todo);
//	    })
	    $(".ul").on('touchend','.re',function(e){
	        var li=$(this).closest('li');
	        var n=li.index();
	        $(".ul").find('li').eq(n).addClass("done");
	        todo[$(this).closest("li").index()].state=1;
			localStorage.x=JSON.stringify(todo);
	        
	    });
	    var start;
	    $(".ul").on("touchstart","li",function(e){
			start=e.originalEvent.changedTouches[0].clientX;
		})
		$(".ul").on("touchend","li",function(e){
		    var end=e.originalEvent.changedTouches[0].clientX;
            if(end-start<-50){
				$(this).removeClass("done")
				todo[$(this).index()].state=0;
				localStorage.x=JSON.stringify(todo);
			}
		})
//		 $(".delete").on("touchend",function(){
//	        var li=$(this).closest("li")
//	        var index=li.index();
//	        todo.splice(index,1);
//	        li.delay(800).queue(function(){
//	            $(this).remove().dequeue();
//	        })
//	        localStorage.x=JSON.stringify(todo);
//	    })
		$(".ul").on('touchend','.delete',function(e){
	        var li=$(this).closest('li');
	        var m=li.index();
	       $(".ul").find('li').eq(m).remove();
	        todo.splice(m,1)
	        localStorage.x=JSON.stringify(todo);
	        
	    });
	    var divs=$(".footer div");
	    divs.on("touchend",function(){
	        $(".ul").find("li").show();
	        var role=$(this).attr("data-role");
	        if(role=="com"){
	            $(".ul").find("li:not(.done)").hide();
	        }
	        if(role=="rem"){
	            $(".ul").find("li.done").hide();
	        }
	        if(role=="all"){
	           $(".ul").find("li").show();
	        }
	    })
	    var menu=$(".menu").on("touchend",function(){
	    	$(".side").addClass("active2");
	    })
	    var but=$("button").on("touchend",function(){
	    	$(".side").removeClass("active2");
	    })
})
