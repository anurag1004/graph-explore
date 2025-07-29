function cell(x, y, w, h, gridX, gridY){
    this.gridX = gridX;
    this.gridY = gridY;
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.deadColor = color('rgba(0,0,0,0.5)')
    this.aliveColor = color('rgba(0,200,50,0.8)')
    this.color = this.deadColor
    this.isAlive = false
    this.display = ()=>{
      stroke(color('rgba(0,0,0,0.35)'))
      fill(this.color)
      rect(this.x,this.y,this.width, this.height)
    }
    this.clicked = ()=>{
      this.makeAlive()
      selected.push(this)
      // console.log(selected)
    }
    this.makeAlive = ()=>{
      this.color = this.aliveColor
      this.isAlive = true;
    }
    this.kill = ()=>{
      this.color = this.deadColor
      this.isAlive = false;
      // remove from selected arr
      selected = selected.filter(cell=>this!=cell)
      // console.log(selected)
    }
    this.isLive = ()=>{
      return this.isAlive;
    }
    
  }