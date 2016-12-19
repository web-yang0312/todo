$(function(){
	var add=$(".add");
	var del=$(".delete");
	var input=$("input");
	var todo=[];
	 if(localStorage.x){
	        todo=JSON.parse(localStorage.x);
	        for(var i=0;i<todo.length;i++){
	        	var c=(todo[i].state)?"done":"";
	            $("<li  class='"+c+"'><div class='content'>"+todo[i].name+"</div><div class='delete'>x</div></li>").appendTo($(".ul"));
	        }
	    }
	 
	    add.on("touchend",function(){
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
	        $("<li class='"+c+"'><div class='content'>"+v+"</div><div class='delete'>x</div></li>").appendTo($(".ul"));
	        input.val("");
	    })
	    var start;
	    $("ul").on("touchstart","li",function(e){
			start=e.originalEvent.changedTouches[0].clientX;
		})
		$("ul").on("touchend","li",function(e){
		    var end=e.originalEvent.changedTouches[0].clientX;
            if(end-start>50){
				$(this).addClass("done")
				todo[$(this).index()].state=1;
				localStorage.x=JSON.stringify(todo);
			}
            if(end-start<-50){
				$(this).removeClass("done")
				todo[$(this).index()].state=0;
				localStorage.x=JSON.stringify(todo);
			}
		})
	 
})
