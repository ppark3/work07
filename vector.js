var svg = document.getElementById("svg");
var clear = document.getElementById("clear");
var lastX = -1;
var lastY = -1;

var shape = function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", 10);
	c1.setAttribute("fill", "red");
	svg.appendChild(c1);
	if (lastX == -1){
		lastX = x;
		lastY = y;
	}
	else{
		var c2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
		c2.setAttribute("x1", lastX);
		c2.setAttribute("y1", lastY);
		c2.setAttribute("x2", x);
		c2.setAttribute("y2", y);
		c2.setAttribute("stroke", "black");
		svg.appendChild(c2);
		lastX = x;
		lastY = y;
	}
}

var erase = function(){
	while(svg.lastChild){
		svg.removeChild(svg.lastChild);
	}
	lastX = -1;
	lastY = -1;
}

svg.addEventListener("click", shape);
clear.addEventListener("click", erase);