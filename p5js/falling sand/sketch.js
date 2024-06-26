let col 
let row 
let w = 10



function make2DArray(column,rows){
  let arr = new Array(column)
  for(let i = 0; i < arr.length; i++)
    arr[i] = new Array(rows)
  
  
  for(let i = 0; i < col; i++)
    for(let j = 0; j < row; j++)
      arr[i][j] = 0
    
  return arr
}

function setup() {
  createCanvas(400, 400);
  
  
  col = width / w
  row = height / w
  grid = make2DArray(col,row)

  
  
  
}



function draw() {
  background(0);
  
    next_grid = make2DArray(col,row)
  
  for(let i = 0; i < col; i++)
    for(let j = 0; j < row; j++){
      stroke(255)
      fill(grid[i][j]*255)
      let x = i * w
      let y = j * w
      square(x,y,w)
    }
  
  
    for(let i = 0; i < col; i++)
      for(let j = 0; j < row; j++)
        if(grid[i][j] == 1){
          
          
          if(j == row -1 || grid[i][j+1] == 1)
            next_grid[i][j] = 1 
          else 
            next_grid[i][j+1] = 1
          
          
        }
          
        
      
    
  grid = next_grid
}

function mouseDragged(){
  let mouseCol = floor(mouseX / w)
  let mouseRow = floor(mouseY / w)
  
  if(mouseCol >= 0 && mouseCol <= col-1 && mouseRow >= 0 && mouseRow <= row-1)
  grid[mouseCol][mouseRow] = 1
}