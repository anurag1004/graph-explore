function initGliderGun(){
    // set resolution
    resolution = 10
    selectedValue.textContent = resolution
    // rerun the setup
    initGrid()
    // harcoded cell vals
    const initCells = [
        {
            "gridX": 11,
            "gridY": 17
        },
        {
            "gridX": 11,
            "gridY": 18
        },
        {
            "gridX": 12,
            "gridY": 18
        },
        {
            "gridX": 12,
            "gridY": 17
        },
        {
            "gridX": 21,
            "gridY": 17
        },
        {
            "gridX": 21,
            "gridY": 18
        },
        {
            "gridX": 21,
            "gridY": 19
        },
        {
            "gridX": 22,
            "gridY": 20
        },
        {
            "gridX": 22,
            "gridY": 16
        },
        {
            "gridX": 23,
            "gridY": 15
        },
        {
            "gridX": 24,
            "gridY": 15
        },
        {
            "gridX": 23,
            "gridY": 21
        },
        {
            "gridX": 24,
            "gridY": 21
        },
        {
            "gridX": 25,
            "gridY": 18
        },
        {
            "gridX": 26,
            "gridY": 16
        },
        {
            "gridX": 27,
            "gridY": 17
        },
        {
            "gridX": 27,
            "gridY": 18
        },
        {
            "gridX": 27,
            "gridY": 19
        },
        {
            "gridX": 26,
            "gridY": 20
        },
        {
            "gridX": 28,
            "gridY": 18
        },
        {
            "gridX": 31,
            "gridY": 17
        },
        {
            "gridX": 31,
            "gridY": 16
        },
        {
            "gridX": 31,
            "gridY": 15
        },
        {
            "gridX": 32,
            "gridY": 15
        },
        {
            "gridX": 32,
            "gridY": 16
        },
        {
            "gridX": 32,
            "gridY": 17
        },
        {
            "gridX": 33,
            "gridY": 18
        },
        {
            "gridX": 33,
            "gridY": 14
        },
        {
            "gridX": 35,
            "gridY": 14
        },
        {
            "gridX": 35,
            "gridY": 13
        },
        {
            "gridX": 35,
            "gridY": 18
        },
        {
            "gridX": 35,
            "gridY": 19
        },
        {
            "gridX": 45,
            "gridY": 15
        },
        {
            "gridX": 45,
            "gridY": 16
        },
        {
            "gridX": 46,
            "gridY": 16
        },
        {
            "gridX": 46,
            "gridY": 15
        }
    ]
    // load cells
    initCells.forEach(cell=>{
     grid[cell.gridX][cell.gridY].makeAlive()
    })
}