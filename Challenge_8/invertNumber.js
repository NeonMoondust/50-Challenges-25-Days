const argv = process.argv.slice(2);

function invertNumber(number){
    let to_return_array = [];
    if(number.toString().split('')[0] === '-'){
        to_return_array.push('-');
        number *= -1;
    }
    number.toString().split('').forEach((number, index, array) => { to_return_array.push(array[array.length - index - 1])});
    return Number(to_return_array.join(''));
}

console.log(invertNumber(+argv[0]));