class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
      this.visibility = 255;
    }

    score(){
      if (this.visibility<0 && this.visibility>=-1005){
        score++
      }
    }

    display(){

      if (this.body.speed<3){
        super.display();
        
      }

      else {
        World.remove(world, this.body);
        this.visibility-=5;
        tint(255, this.visibility)

      }
    }
  
  };