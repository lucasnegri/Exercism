// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

 export class Size{
    constructor(width = 80, height = 60){
        this.width = width;
        this.height = height;
    }
    resize(newWidth, newHeight){
      this.width = newWidth;
      this.height = newHeight;
    }
  }
  
  export class Position{
    constructor(x=0, y=0){
      this.x = x;
      this.y = y;
    }
    move(newX, newY){
      this.x = newX;
      this.y= newY;
    }
  }
  
  export class ProgramWindow{
    constructor(){
      this.screenSize = new Size(800,600);
      this.size = new Size();
      this.position = new Position();
    }
    resize(size){
      const width = size.width > 0 ? size.width : 1;
      const height = size.height > 0 ? size.height : 1;
      this.size.width = Math.min(width, this.screenSize.width -this.position.x)
      this.size.height = Math.min(height, this.screenSize.height - this.position.y)
    }
      move(newPosition) {
      if(newPosition.x < 0) newPosition.x = 0
      if(newPosition.y < 0) newPosition.y = 0
      if(newPosition.x + this.size.width > this.screenSize.width) 
        newPosition.x = this.screenSize.width - this.size.width
      if(newPosition.y + this.size.height > this.screenSize.height) 
        newPosition.y = this.screenSize.height - this.size.height
      this.position.x = newPosition.x
      this.position.y = newPosition.y
    }
  }
  
  export function changeWindow(win) {
    win.size.width = 400
    win.size.height = 300
    win.position.x = 100
    win.position.y = 150
    return win
  }