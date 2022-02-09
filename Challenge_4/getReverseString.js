const argv = process.argv.slice(2);

function getReverseWord(word){
    let iterator = 1;
    let reversed_word = '';
    
    while(iterator){
        if(word[iterator - 1] === undefined) break;
        reversed_word = word[iterator - 1] + reversed_word;
        iterator++;
    }
    console.log(reversed_word);
}

getReverseWord(argv[0]);