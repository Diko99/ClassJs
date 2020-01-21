// change the word of selamat pagi to silimit pagi with a vocal Alphabet array vocal = let vocal = ["a","i","u","e","o"]


let form = document.getElementById('form')
let input = document.getElementById('input').value
let submit = document.getElementById('change')
let h1 = document.getElementsByClassName('h1')[0]


function ubahTeks(){
    let string = "selamat pagi semoga ";
    let stringLength = string.length
    let stringToArray = string.split("")
    let vocal = ["a","i","u","e","o"]
    
    let result = []
    
    
    for (let i = 0; i < stringLength; i++) {
        result.push(stringToArray[i])
        for (let a = 0; a < vocal.length; a++) {
            if (vocal[a] == stringToArray[i]) {
                result.splice(i)
                result.push("e")            
            }                
        }
        
    }
    
    
    
    
    document.write(result.join(" "))
    console.log(result);
    
    
        



}

ubahTeks()




