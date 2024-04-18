function arrayFilter(sentence) {
    var result = sentence.split(" ");

    let fourCharacters = [];

    result.forEach(function (indexItem) {
        if (indexItem.length > 3) {
            fourCharacters.push(indexItem);
        };
    })
    let newSentence = fourCharacters.join(" ");
    return newSentence

}

arrayFilter("London is a big city in the United Kingdom");

//TESTS
console.log(arrayFilter("London is a big city in the United Kingdom"));
// console.log(fourCharacters);
// console.log(fourCharacters.join(" "));

