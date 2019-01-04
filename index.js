let cols = 135 ;
let rows = 60 ;

let grid = new Array(cols);

function setup()
{
    for(let i = 0;i < cols; i++ )
    {
        grid[i] = new Array(rows);
    }

    createCanvas(1350, 600);
    
    for(let i = 0;i < cols; i++)
    {
        for(let j = 0;j < rows; j++)
        {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw()
{
    background(0);
    for(let i = 0;i < cols ; i++)
    {
        for(let j = 0;j < rows ; j++)
        {
            if(grid[i][j] == 1)
            {
                fill(255);
                stroke(0);
                rect(i*10,j*10,10,10);
            }
        }
    }
    
    let next = new Array(cols);

    for(let i = 0;i < cols; i++ )
    {
        next[i] = new Array(rows);
    }

    let count = 0; 

    for(let i = 0; i < cols ; i++)
    {
        for(let j = 0; j < rows ; j++)
        {
            let state = grid[i][j];
            count = 0;
            for( let k = -1 ; k < 2; k++)
            {
                for(let l = -1 ; l < 2; l++)
                {
                    let col = (i + k + cols) % cols;
                    let row = (j + l + rows) % rows;
                    count += grid[col][row];
                }
            }
            count -= grid[i][j];

            if (state == 0 && count == 3) {
                next[i][j] = 1;
            } else if (state == 1 && ( count < 2 || count > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }
        }
    }

    grid = next ;
}