class Bola
{
	constructor(x,y,r)
	
    {
		this.image = loadImage("bolabasquete.png");
        var options={
			isStatic:false,			
            restitution:1.1,
            friction:0,
            density:1.25
        }
		
        
        
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r -20)/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var bolaPos=this.body.position;		

			push()
			translate(bolaPos.x, bolaPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			imageMode(CENTER);
            image(this.image, 0, 0, this.r, this.r);
			pop()
			
	}

}