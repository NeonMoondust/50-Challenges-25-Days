const argv = process.argv.slice(2);

function minusEight(number){
    let to_return = `--- Del ${number} al 0 ---\n`;
    while(number > 0){
        to_return += `- n°${number}\n`;
        number -= 8;
    }
    to_return += `- n°0\n`;
    to_return += `--- FIN ---`;
    return to_return;
}

console.log(minusEight(+argv[0]));