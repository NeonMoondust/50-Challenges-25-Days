const argv = process.argv.slice(2);

function oddBetween(number_1, number_2){
    let number_aux = number_2, count = 0;
    if(number_1 > number_2){
        number_2 = number_1;
        number_1 = number_aux;
    }
    for(number_aux = number_1 + 1; number_aux < number_2; number_aux++){
        if(number_aux % 2 != 0) count++;
    }
    return count;
}

console.log(oddBetween(+argv[0], +argv[1]));