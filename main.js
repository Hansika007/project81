canvas = document.getElementById("myCanvas");
color="red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 4; 
ctx.arc(500, 250, 40 ,0 ,2*Math.PI);
ctx.stroke(); 

color="black";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 4; 
ctx.arc(400, 250, 40 ,0 ,2*Math.PI);
ctx.stroke(); 

color="blue";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 4; 
ctx.arc(305, 250, 40 ,0 ,2*Math.PI);
ctx.stroke(); 

color="yellow";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 4; 
ctx.arc(360, 290, 40 ,0 ,2*Math.PI);
ctx.stroke();

color="green";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 4; 
ctx.arc(460, 290, 40 ,0 ,2*Math.PI);
ctx.stroke(); 