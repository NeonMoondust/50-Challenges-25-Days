const argv = process.argv.slice(2);

function wildSquare(sides){
    // let sides_aux = sides;
    let square = '';
    for(let i = 1; i <= sides; i++){
        for(let j = 1; j <= sides; j++){
            if(i == 1 || i == sides || j == 1 || j == sides){
                square += '*';
                continue;
            }
            square += ' ';
        }
        square += '\n';
    }
    console.log(square);
}

wildSquare(10);