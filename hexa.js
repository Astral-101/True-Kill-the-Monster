class Hexa {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/Superhero-01.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("brown");
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
    }
  };