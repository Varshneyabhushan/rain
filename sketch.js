function setup() {
	maxw = windowWidth
	maxh = windowHeight
	createCanvas(windowWidth, windowHeight);
	drops = []
	for(var i=0;i<100;i++){
		var x = new drop(random(maxw),random(maxh/20))
		drops.push(x)
	}
}

function draw() {
	background(0)
	for(var i in drops){
		drops[i].drop()
	}
}