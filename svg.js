var svg = document.getElementById("svg");
var swedebutton = document.getElementById("sweden");
var sokorbutton = document.getElementById("south_korea");
var swedenlist = [7,6,1];
var sokorlist = [5,8,4];

var update = function(e){
    var data = [];
    if(this.getAttribute("id") == "sweden"){
	data = swedenlist;
    }
    else{
	data = sokorlist;
    }
    var circs = d3.selectAll("circle");
    circs.data(data);
    circs.attr("r",function(d){return d*10;});
}

swedebutton.addEventListener("click",update);
sokorbutton.addEventListener("click",update);

