function similarArrays(array1, array2){
    return array1.filter(number => {return array2.includes(number)});
}

console.log(similarArrays([1,2,3,4],[1,4,5,6,9,10,16,12,3,12]));