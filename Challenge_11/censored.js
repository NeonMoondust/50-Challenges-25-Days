const argv = process.argv.slice(2);

function censored(word, search){
    if(word === undefined || search === undefined){
        if(word !== undefined && search === undefined) return 'No se puede hacer la busqueda';
        if(word === undefined && search !== undefined) return 'No se puede leer el texto';
        return 'No se puede leer el texto ni la busqueda';
    }
    return word.replaceAll(search, '[-CENSORED-]');
}

console.log(censored(argv[0], argv[1]));