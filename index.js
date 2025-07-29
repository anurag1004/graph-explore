const startBfsBtn = document.getElementById('startBfs');
const startDfsBtn = document.getElementById('startDfs');
const startGameOfLife = document.getElementById('startGameOfLife');
const initGliderGunBtn = document.getElementById('initGliderGun');
const slider = document.getElementById('slider');
const selectedValue = document.getElementById('selectedValue');
const seed = document.getElementById('seed');
// init slider value to resolution
selectedValue.textContent = resolution
slider.value = resolution
const dirs = [[-1,0],[1,0],[0,1],[0,-1]]
const alldirs = [[-1,0],[1,0],[0,1],[0,-1],[-1,-1],[-1,1],[1,-1],[1,1]]
slider.addEventListener('input', function() {
  selectedValue.textContent = slider.value;
  console.log(typeof slider.value)
  resolution = parseInt(slider.value)
  initGrid()
});
seed.addEventListener('click',()=>{
   for(let i=0;i<rows;i++){
      for(let j=0;j<cols;j++){
         const randomValue = Math.round(Math.random());
         if(randomValue==1){
            grid[i][j].clicked()
            selected.push(grid[i][j])
         }
      }
   }
})
initGliderGunBtn.addEventListener('click',()=>{
  initGliderGun()
})
// Add a click event listener to the button
startBfsBtn.addEventListener('click', async function() {
   // console.log(selected)
   queue = [...selected];
   seen = []
   for(let i=0;i<rows;i++){
      seen[i] = []
      for(let j=0;j<cols;j++){
         seen[i][j] = false
      }
   }
   selected.forEach(select=>{
      seen[select.gridX][select.gridY] = true
   })
   // console.log(selected)
   while(queue.length!=0){
      let size = queue.length;
      while(size-->0){
         cell = queue.shift()
         // console.log(cell)
         for(let i=0;i<4;i++){
            let dir = dirs[i]
            let r = cell.gridX + dir[0];
            let c = cell.gridY + dir[1];
            // console.log(r+","+c)
            if(r<0||r>=rows||c<0||c>=cols||seen[r][c]) continue
            queue.push(grid[r][c])
            seen[r][c] = true
            grid[r][c].clicked()
            // console.log(grid[r][c])
            await sleep(2)
         }
      }
   }
});
startDfsBtn.addEventListener('click', async function() {
   stack = [...selected];
   seen = []
   for(let i=0;i<rows;i++){
      seen[i] = []
      for(let j=0;j<cols;j++){
         seen[i][j] = false
      }
   }
   // console.log(selected)
   while(stack.length!=0){
      cell = stack.pop()
      seen[cell.gridX][cell.gridY] = true
      for(let i=0;i<4;i++){
         let dir = dirs[i]
         let r = cell.gridX + dir[0];
         let c = cell.gridY + dir[1];
         // console.log(r+","+c)
         if(r<0||r>=rows||c<0||c>=cols||seen[r][c]) continue
         stack.push(grid[r][c])
         grid[r][c].clicked()
         // console.log(grid[r][c])
         await sleep(1)
      }
   }
});
startGameOfLife.addEventListener('click', async function(){
   // console.log(selected)
   // Any live cell with fewer than two live neighbors dies, as if by underpopulation.
   // Any live cell with two or three live neighbors lives on to the next generation.
   // Any live cell with more than three live neighbors dies, as if by overpopulation.
   // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
   while(true){
      // compute then render
      newGrid = [];  // all available cells
      for(let i=0;i<rows;i++){
         newGrid[i] = []
         for(let j=0;j<cols;j++){
            oldCell = grid[i][j]
            // console.log(grid[i][j])
            // newGrid[i].push(grid[i][j])
            // console.log(grid[i][j].x)
            // clone the cell
            newCell = new cell(oldCell.x, oldCell.y, resolution, resolution, oldCell.gridX, oldCell.gridY)
            if(oldCell.isLive()){
               newCell.makeAlive()
            }

            let cntLiveNeighbors = 0;
            for(let k=0;k<8;k++){
               let dir = alldirs[k]
               let r = i + dir[0];
               let c = j + dir[1];
               // console.log(r+","+c)
               if(r<0||r>=rows||c<0||c>=cols) continue
               if(grid[r][c].isLive()){
                  cntLiveNeighbors+=1
               }
            }
            if(newCell.isLive()){
               if(cntLiveNeighbors < 2){
                  newCell.kill()
               }else if(cntLiveNeighbors == 2 || cntLiveNeighbors == 3){
                  // continue to live
               }else{
                  // > 3
                  newCell.kill()
               }
            }else if(cntLiveNeighbors==3){
               newCell.makeAlive()
            }
            newGrid[i].push(newCell)
         }
      }
      grid = newGrid; 
      await sleep(100)
   }
})
function sleep(ms) {
   return new Promise((res,rej)=>{
      setTimeout(()=>{
         res()
      },ms)
   })
}