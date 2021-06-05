class snow {


    constructor(x,y,r){

     var options = {
  
         'density':0.5,
         'friction':1,
         'isStatic':false
         }

         this.x=x;
         this.y=y;
         this.r=r;
         this.body = Bodies.circle(this.x, this.y, (this.r-10)/2, options)
         World.add(world,this.body);
         this.image = loadImage("snow4.webp")
    }

    display()
	{
			var pos=this.body.position;		
			
            push()

			translate(pos.x, pos.y);

			imageMode(CENTER)
			
			image(this.image,0,0,this.r,this.r)
			

			pop()
	}


}