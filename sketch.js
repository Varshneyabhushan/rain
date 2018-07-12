function setup() {
	maxw = windowWidth
	maxh = windowHeight
	createCanvas(windowWidth, windowHeight);
	drops = []
	for(var i=0;i<100;i++){
		var x = new drop(random(maxw),random(maxh))
		drops.push(x)
	}
}

function draw() {
	background(0)
	for(var i in drops){
		drops[i].drop()
	}
}

function drop(x,y){
	this.x0 = x
	this.y0 = y
	this.dx = 2
	this.dy = 20
	this.time = 0
	
	this.drop = function(){
		this.time += 1
		this.y = this.y0 + this.dy*this.time
		this.x = this.x0 + this.dx*this.time
		this.checkEnd()
		this.show()
	}
 
	this.show =function(){
		fill(255, 200, 200, 100)
		rect(this.x, this.y, 2, 20)
	}

	this.checkEnd = function(){
		if(this.y > maxh){
			this.x0 = random(maxw)
			this.time = 0
		}
	}
}