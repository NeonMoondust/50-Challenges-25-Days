const argv = process.argv.slice(2);

function magicStairs(levels){
    let stair = '';

    for(let i = 1; i <= levels; i++){
        for(let j = 1; j <= i; j++){
            stair += '[-]';
        }
        stair += '\n';
    }
    return stair;
}

console.log(magicStairs(+argv[0]));