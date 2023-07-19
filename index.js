// Code your solutions in this file
function writeCards(names){
    let returnArray = []
    for(let i = 0; i < names.length; i++){
        returnArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return returnArray
}
function countDown(number){
    let t = number
    while(t !== -1){
        console.log(t)
        t--
    }
}