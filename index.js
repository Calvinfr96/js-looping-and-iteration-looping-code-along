// Code your solutions in this file
function writeCards(nameArray, event) {
    let cardArray = [];
    for (let i = 0; i < nameArray.length; i++) {
        cardArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return cardArray
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}