const argv = process.argv.slice(2);

function palindrome(word){
    return(word === word.split('').reverse().join(''));
}

console.log(palindrome(argv[0]));