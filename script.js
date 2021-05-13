
	
	document.getElementById("ptocke").style.display = "none";
	document.getElementById("pcas").style.display = "none";
	document.getElementById("plives").style.display = "none";
	document.getElementById("canvas").style.display = "none";
	document.getElementById("restart").style.display = "none";
	document.getElementById("button4").style.display = "none";
	document.getElementById("restart2").style.display = "none";

	
	function restart(){
		location.reload()
	}
	
	function drawIt() {
	
	document.getElementById("tocke").style.background = "#000000";
	document.getElementById("cas").style.background = "#000000";
		    document.addEventListener('keydown', onKeyDown);
	document.addEventListener('keyup', onKeyUp);

	var count0=0;
	var count=0;
    var x = 630;
    var y = 600;
    var dx = 1;
    var dy = 2;
    var width = 1500;
    var height = 700;
	var tocke = 0;
	var sekunde;
	var sekundeI;
	var minuteI;
	var intTimer;
	var izpisTimer;
	var start=true;
	var intt;
	var lives=3;
	var run=true;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
	var paddlex = 600;
	var paddleh = 8;
	var paddlew = 120;
	var rightDown = false;
	var leftDown = false;
	var minX = canvas.offsetLeft;
	var rows = 10; 
	var coll = 5;
    var bwidth = (width/coll) - 1;
    var bheight = 20;
    var padding = 2;
	var uli=0;
    var bricks = new Array(rows);
  for (i=0; i < rows; i++) {
    bricks[i] = new Array(coll);
    for (j=0; j < coll; j++) {
      bricks[i][j] = 1;
    }
  }
	
	
	
	
    document.getElementById("button").onclick = function init() {
					document.getElementById("canvas").style.display = "block";
					document.getElementById("pozdrav").style.display = "none";
                    document.getElementById("button").style.display = "none";
                    


                    document.getElementById("tocke").innerHTML = tocke;
                    sekunde = 0;
                    izpisTimer = "00:00";
					
					document.getElementById("pcas").style.display = "block";
					document.getElementById("plives").style.display = "block";
                    function timer() {
					if(start==true){
                        sekunde++;

                        sekundeI = ((sekundeI = (sekunde % 60)) > 9) ? sekundeI : "0" + sekundeI;
                        minuteI = ((minuteI = Math.floor(sekunde / 60)) > 9) ? minuteI : "0" + minuteI;
                        izpisTimer = minuteI + ":" + sekundeI;

                        document.getElementById("cas").innerHTML = izpisTimer;
						}
						else{
						if(lives>0){
							var img = document.getElementById("srcek");
							lives--; 
							start=true; 

							switch (lives) {
								case 1:
									document.getElementById("srcek2").style.display = "none";
									break;
								case 2:
									document.getElementById("srcek3").style.display = "none";
									break;
								default: 
									
									break;
							}
						}							
						if(lives<1){clearInterval(intt);
							document.getElementById("canvas").style.display = "none";
							document.getElementById("restart").style.display = "block";
							document.getElementById("tocke2").innerHTML = tocke;
							document.getElementById("cas2").innerHTML = izpisTimer;
							document.getElementById("tocke2").style.background = "#b8aec8";
							document.getElementById("tocke2").style.background.opacity = "0.1";
							document.getElementById("cas2").style.background = "#b8aec8";
							document.getElementById("cas2").style.background.opacity = "0.1";
							document.getElementById("button4").style.display = "block";
							document.getElementById("srcek1").style.display = "none";
							clearInterval(intTimer);
							start=false;
							
							
							document.getElementById("pcas").style.display = "none";
							document.getElementById("plives").style.display = "none";
							document.getElementById("ptocke").style.display = "none";
							
					sekunde=0;
					
					document.getElementById("cas").innerHTML = izpisTimer;}
					}
                    }
                    intTimer = setInterval(timer, 1000);
					
						intt=setInterval(draw, 5);
						return intt;
						
						
                }

		

	
	
		
		
        
		
    
	
	
	
	function onKeyDown(evt) {
		if(uli==0){
		  if (evt.keyCode == 39)rightDown = true;
		  else if (evt.keyCode == 37) leftDown = true;
		}
	}

	function onKeyUp(evt) {
		  if (evt.keyCode == 39) rightDown = false;
		  else if (evt.keyCode == 37) leftDown = false;
		}
	
		
    function draw() {
		document.getElementById("ptocke").style.display = "block";
        ctx.clearRect(0, 0, 1500, 700);
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2, true); 
		ctx.fillStyle = "#e31717"; //zogica
		ctx.fill();
		
        ctx.closePath();
		
		
		
		
		if (rightDown&&paddlex<width-paddlew) 
			paddlex += 5;
		else if (leftDown&&paddlex>1) 
				paddlex -= 5;
		ctx.beginPath();
		ctx.rect(paddlex, height-paddleh-20, paddlew, paddleh);
		ctx.closePath();
		ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        if (x + dx > width-5)
            dx = -1; 
        if (x + dx < 6)
            dx = 1; 
        if (y + dy > height-5){
			dy = -2; 
			start=false;
			
			if (x > paddlex && x < paddlex + paddlew){
				dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
				dy = -dy;
				start=true;
			}
			else if (y + dy > height-5){
			
			clearInterval(intTimer);
			}
		}
        if (y + dy < 5)
            dy = 2;
	
		if(x+dx>paddlex&&x+dx<paddlex+paddlew&&y+dy>height-paddleh-20) {
			dx = 4 * ((x-(paddlex+paddlew/2))/paddlew);
			dy = -dy;
			}
		
		
	
        x += dx;
        y += dy;
	
		
					
					count0=0;
		for (i=0; i < rows; i++) {
			for (j=0; j < coll; j++) {
				if (bricks[i][j] == 1) {
					ctx.beginPath();
					ctx.rect((j * (bwidth + padding)) + padding-2,
							(i * (bheight + padding)) + padding,
							bwidth, bheight);
					ctx.fillStyle = "#f29249"; //bricks
					ctx.fill();
					ctx.closePath();

				}
				
				if(bricks[i][j]==0){
					count0++;
					
				}
				
				var rowheight = bheight + padding ; 
				var colwidth = bwidth + padding ;
				var row = Math.floor(y/rowheight);
				var col = Math.floor(x/colwidth);
				
				if (y < rows * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
					dy = -dy; bricks[row][col] = 0;
					tocke += 1; 
					document.getElementById("tocke").innerHTML = tocke;	
				}
				
					
				
					
				
				
				
				
				
			}
		}
		
		if(count0==(rows*coll)){
			clearInterval(intTimer);
			clearInterval(draw);
			document.getElementById("cas3").innerHTML = izpisTimer;
			document.getElementById("cas3").style.background = "blue";
			document.getElementById("cas3").style.background.opacity = "0.1";
			
			
			document.getElementById("tocke3").innerHTML = tocke;
			document.getElementById("tocke3").style.background = "#b8aec8";
			document.getElementById("tocke3").style.background.opacity = "0.1";
			document.getElementById("restart2").style.display = "block";
			document.getElementById("canvas").style.display = "none";

			
							
							
							
							document.getElementById("button4").style.display = "block";
							document.getElementById("srcek1").style.display = "none";
							
							start=false;
							
							
							document.getElementById("pcas").style.display = "none";
							document.getElementById("plives").style.display = "none";
							document.getElementById("ptocke").style.display = "none";
		}
		
	

		
    }

    
}