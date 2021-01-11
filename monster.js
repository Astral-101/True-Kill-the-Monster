class Monster {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/Monster-01.png");
      World.add(world, this.body);
    }

    score(){
        if (this.visibility<0 && this.visibility>=-1005){
          score++
        }
      }

    display(){

      if (this.body.speed<3){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        fill("brown");
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
        
      }

      else {
        World.remove(world, this.body);
        this.visibility-=5;
        tint(255, this.visibility)

      }
    }
  };