/* Red Square */
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

/* Green Circle */
ctx.beginPath();
ctx.arc(240, 190, 20, 0, 2*Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

/* Blue Rectangle Outline */
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();