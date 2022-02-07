const argv = process.argv.slice(2);


(function multiplicationTable(multiply){
    let to_return_table = '';
    for(let i = 1; i <= 10; i++){
        to_return_table += `${i} + ${multiply} = ${i*multiply}\n`;
    }
    console.log(to_return_table);
})(argv[0]);