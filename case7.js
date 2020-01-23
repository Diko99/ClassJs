/*
perintah: tentukan berapa jumlah uang pecahan, samakan dengan uang pecahan yang ada di Indonesia
input: 72500
output: 50000, 20000, 2000, 200. 200, 100
*/



let int = [55000]
let output = [52000, 200000,10000]
let res = []



for (let i = 0; i < int.length; i++) {
    for (let a = 0; a < output.length; a++) {
        if(int[i] > output[a]) {
            res.push(output[a])
            let x = int[i] - output[a]  
            output.splice(a, 1, x)
        }  else {
            console.log('Uangnya kelebihan Boss => ' + output[a])
        }             
    }
}
console.log(" uang awal = > Rp." + int.join()) 
console.log( " ---  Dipecah menjadi --- " + res.join(' | Rp.'))