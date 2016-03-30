// draw functions go here

// generic square-drawing function
function drawRect(xpos, ypos, width, height, color, side) {

	ctx.beginPath();
	ctx.rect(xpos, ypos, width, height);
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
	ctx.stroke();
	if (buttonArr[side] && cooldown[side] > 0) {
		ctx.fillStyle = color;
		ctx.fill();
	}
	ctx.closePath();

	// square animation
	/*
	if (cooldown[side] > 0 && collisions[side]) {
		var factor = 0.8 + (1/cooldown[side]);
		ctx.beginPath();
		ctx.rect(xpos, ypos, width, height*factor);
		ctx.strokeStyle = color;
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}
	*/
}

function drawTrack(xpos, ypos, width, height, side) {

	var grd=ctx.createLinearGradient(0,0,200,0);
	grd.addColorStop(0,"gray");
	grd.addColorStop(1,"white");
	ctx.beginPath();
	ctx.rect(xpos, ypos, width, height);
	ctx.strokeStyle = grd;
	// we can use this code for a new animation
	
	if (cooldown[side] > 0 && collisions[side]) {
		ctx.fillStyle = "rgba(255,255,255,0.2)";
		ctx.fill();
	}
	ctx.lineWidth = 0.2;
	ctx.stroke();

	/*
	for (i=1; i<beatsToCenter; i++) {

		// draw beat marks
		if (side == 3) {
			ctx.beginPath();
			ctx.rect(xpos, ypos, (distancePerBeat * i), height);
			ctx.strokeStyle = grd;
			ctx.lineWidth = 0.2;
			ctx.stroke();
		}

		if (side == 0) {
			ctx.beginPath();
			ctx.rect(xpos, ypos, width, (distancePerBeat * i));
			ctx.strokeStyle = grd;
			ctx.lineWidth = 0.2;
			ctx.stroke();
		}
	}
	*/
}

// draw the catcher
function drawCatcher() {

	/*
	// right rect
	ctx.beginPath();
	ctx.rect(x + radius - overlap, y - (rectHeight/2), rectWidth, rectHeight);
	ctx.strokeStyle = "blue";
	ctx.lineWidth = 2;
	ctx.stroke();
	if (buttonArr[1] && cooldown[1] > 0) {
		ctx.fillStyle = "blue";
		ctx.fill();
	}
	ctx.closePath();

	// square animation
	
	if (cooldown[1] > 0 && collisions[1]) {
		var factor = 0.8 + (1/cooldown[1]);
		ctx.beginPath();
		//ctx.rect(x + radius - overlap, y - ((rectHeight*factor)/2), rectWidth*factor, rectHeight*factor);
		ctx.rect(x + radius - overlap, y - ((rectHeight*factor)/2), rectWidth*factor, rectHeight*factor);
		ctx.strokeStyle = "blue";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = "blue";
		ctx.fill();
		ctx.closePath();
	}
	

	// bottom rect
	ctx.beginPath();
	ctx.rect(x - (rectHeight/2), y + radius - overlap, rectHeight, rectWidth);
	ctx.strokeStyle = "green";
	ctx.lineWidth = 2;
	ctx.stroke();
	if (buttonArr[2] && cooldown[2] > 0) {
		ctx.fillStyle = "green";
		ctx.fill();
	}
	ctx.closePath();
	*/

	// square animation
	/*
	if (cooldown[2] > 0) {
		var factor = 0.8 + (1/cooldown[2]);
		ctx.beginPath();
		//ctx.rect(x + radius - overlap, y - ((rectHeight*factor)/2), rectWidth*factor, rectHeight*factor);
		ctx.rect(x - ((rectHeight*factor)/2), y + radius - overlap, rectHeight*factor, rectWidth*factor);
		ctx.strokeStyle = "green";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = "green";
		ctx.fill();
		ctx.closePath();
	}
	*/

	// left rect
	/*
	ctx.beginPath();
	ctx.rect(x - radius - rectWidth + overlap, y - (rectHeight/2), rectWidth, rectHeight);
	ctx.strokeStyle = "yellow";
	ctx.lineWidth = 2;
	ctx.stroke();
	if (buttonArr[3] && cooldown[3] > 0) {
		ctx.fillStyle = "yellow";
		ctx.fill();
	}
	ctx.closePath();
	*/

	// square animation
	/*
	if (cooldown[3] > 0) {
		var factor = 0.8 + (1/cooldown[3]);
		ctx.beginPath();
		//ctx.rect(x + radius - overlap, y - ((rectHeight*factor)/2), rectWidth*factor, rectHeight*factor);
		ctx.rect(x - radius - (rectWidth*factor) + overlap, y - ((rectHeight*factor)/2), rectWidth*factor, rectHeight*factor);
		ctx.strokeStyle = "yellow";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = "yellow";
		ctx.fill();
		ctx.closePath();
	}
	*/

	// top rect
	/*
	ctx.beginPath();
	ctx.rect(x - (rectHeight/2), y - radius - rectWidth + overlap, rectHeight, rectWidth);
	ctx.strokeStyle = "red";
	ctx.lineWidth = 2;
	ctx.stroke();
	if (buttonArr[0] && cooldown[0] > 0) {
		ctx.fillStyle = "red";
		ctx.fill();
	}
	ctx.closePath();
	*/

	// square animation
	/*
	if (cooldown[0] > 0) {
		var factor = 0.8 + (1/cooldown[0]);
		ctx.beginPath();
		//ctx.rect(x + radius - overlap, y - ((rectHeight*factor)/2), rectWidth*factor, rectHeight*factor);
		ctx.rect(x - ((rectHeight*factor)/2), y - radius - (rectWidth*factor) + overlap, rectHeight*factor, rectWidth*factor);
		ctx.strokeStyle = "red";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.closePath();
	}
	*/

	// circle
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2, false);
	ctx.strokeStyle = "white";
	ctx.lineWidth = 2;
	ctx.stroke();
	//if (/*buttonArr[4] && */cooldown[4] > 0) {
	//	ctx.fillStyle = "white";
	//}
	//else {
		ctx.fillStyle = "black";
	//}
	ctx.fill();
	ctx.closePath();


	// just a fun animation test
	// just kidding, this is awesome! animation for the super power
	/*
	if (cooldown[4] > 0) {
		var factor = 1 + (((70-radius) / 10)/cooldown[4]);
		ctx.beginPath();
		ctx.arc(x, y, radius * factor, 0, Math.PI*2, false);
		ctx.strokeStyle = "white";
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
	}*/


}

// draw the score
function drawScore() {

	ctx.beginPath();
	ctx.rect(0, 5, 145, 30);
	ctx.fillStyle = "#2A3E45";
	ctx.fill();
	ctx.closePath();


	var scoreString = score + "";
	while(scoreString.length < 8) {
		scoreString = " " + scoreString;
	}

	var scoreX = 0;
	var scoreY = 30;

	ctx.font = "30px Courier";
	ctx.fillStyle = "white";
	//for(i=0; i<6; i++) {
	//	if(cooldown[i] > 0) {
	//		ctx.font = "30px Courier";
			//ctx.strokeStyle = "#1EF9FC";
			//scoreX-=2;
			//scoreY--;
	//	}
	//}
	
	ctx.fillText(scoreString, scoreX, scoreY);
}

function drawCombo(combo) {

	ctx.font = "30px Courier";
	ctx.fillStyle = "white";

	var comboString = combo + "";

	ctx.fillText(comboString, 35 - ((comboString.length - 1) * 5), 100);

	ctx.fillText("COMBO!", 0, 130);

}

function drawGameOver() {

	var gameOverTextX = 50;
	var gameOverTextY = 200;

	ctx.font = "80px Courier";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillText("GAME OVER", gameOverTextX, gameOverTextY);

	ctx.font = "20px Courier";
	ctx.fillText("Press <space> to play again.", 100, 250);
}

function deathAnimation(timer) {
	drawTrack(0, y - (rectHeight / 2), x, rectHeight, 3);
	drawTrack(x - (rectHeight / 2), 0, rectHeight, y, 0);
	drawTrack(x, y - (rectHeight / 2), x, rectHeight, 1);
	drawTrack(x - (rectHeight / 2), y, rectHeight, y, 2);

	// draw the squares
	rects.forEach(function(Rect) {

		Rect.draw();
	});
	drawCatcher();

	deathColor = "rgba(255, 255, 0, 0.5)";
	if (timer % 2 == 0) {
		deathColor = "rgba(255, 0, 0, 0.5)";
	}

	ctx.beginPath();
	//ctx.rect(0, 0, 530, 530);
	ctx.arc(x, y, radius * (10 - (timer % 10)), 0, Math.PI*2, false);
	ctx.fillStyle = deathColor;
	ctx.fill();
	ctx.closePath();
}

function drawHealth() {

	var factor = health/1000;
	if (factor > 1) {
		factor = 1;
	}
	var healthBarWidth = 175 * factor;

	// border
	ctx.beginPath();
	ctx.rect(0, 40, 180, 25);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();

	// darkness
	ctx.beginPath();
	ctx.rect(2, 42, 175, 21);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();

	var gb = Math.ceil(255 * factor);
	var gbString = gb.toString();
	var r = Math.floor(255 * (1-factor));
	var rString = r.toString();

	//console.log(gbString);

	// health
	ctx.beginPath();
	ctx.rect(2, 42, healthBarWidth, 21);
	ctx.fillStyle = "rgb(" + rString + "," + gbString + "," + "230" + ")";
	//ctx.fillStyle = "blue";
	ctx.fill();
	ctx.closePath();	
}

// draw an orb at any position
function drawOrb(xpos, ypos, color) {

	ctx.beginPath();
	ctx.arc(xpos, ypos, orbRadius, 0, Math.PI*2, false);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}