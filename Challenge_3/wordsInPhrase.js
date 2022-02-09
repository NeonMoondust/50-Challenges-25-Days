const argv = process.argv.slice(2);

function wordsInPhrase(phrase, given_word){
    let count = 0;
    const array_phrase = phrase.toLowerCase().split('').map(word => {
        if(!(word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122 ) && (word.charCodeAt(0) != 32)) word = '';
        return word;
    }).join('').trim().split(' ');
    array_phrase.forEach(word => {if(word === given_word) count++;});
    console.log(count);
}

wordsInPhrase(argv[0], argv[1]);