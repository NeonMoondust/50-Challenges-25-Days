const argv = process.argv.slice(2);

function percentageXnumber(number, percentage){
    console.log(number * (percentage/100));
}

percentageXnumber(argv[0], argv[1]);