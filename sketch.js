let rows;
let cols;
let resolution = 10
let grid = []
let selected = []

function mousePressed(){
  for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
      if(mouseX >= grid[i][j].x && mouseX <= grid[i][j].x+resolution && mouseY>=grid[i][j].y && mouseY<=grid[i][j].y+resolution){
        if(grid[i][j].isLive()){
          grid[i][j].kill();
        }else{
          grid[i][j].clicked()
        }
      }
    }
  }
}
function setup() {
  console.log("setup...")
  createCanvas(1000, 1000);
  initGrid()
}
function initGrid(){
  cols = Math.ceil(width/resolution)
  rows = Math.ceil(height/resolution)
  grid = []
  for(let i=0;i<rows;i++){
    grid[i] = []
    for(let j=0;j<cols;j++){
      let x = i*resolution
      let y = j*resolution
      grid[i].push(new cell(x,y,resolution, resolution,i,j))
    }
  }
}
function draw() {
  background(49);
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
      grid[i][j].display()
    }
  }
}