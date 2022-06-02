jQuery(document).ready(function($) {

	var timer;
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp =0;
    var circle = $("#circle");
   
    $(document).mousemove(function(e){
    	circle.addClass('moving');
        mouseX = e.pageX - 160;
        mouseY = e.pageY - 160; 
        clearTimeout(timer);
        timer=setTimeout(mouseStopped,3000);   
    });
    
    var loop = setInterval(function(){
       xp += ((mouseX - xp)/6);
       yp += ((mouseY - yp)/6);
       circle.css({left: xp +'px', top: yp +'px'});  // 
    }, 30);

});