let grid = new Array(135);

function setup()
{
    for(let i = 0;i < 135; i++ )
    {
        grid[i] = new Array(60);
    }
    createCanvas(1350, 600);
    for(let i = 0;i < 135; i++)
    {
        for(let j = 0;j < 60; j++)
        {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw()
{
    for(let i = 0; i < 135 ; i++)
    {
        for(let j = 0;j < 60 ; j++)
        {
            if(grid[i][j])
            {
                fill(0);
                rect(i*10,j*10,10,10);
            }
            else
            {
                fill(255);
                rect(i*10,j*10,10,10);
            }
        }
    }
}