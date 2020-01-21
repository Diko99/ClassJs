/* Mengembalikan kata benar ketika membaca kata dari belakang maupun depan hasilnya sama
ex case:
kodok: dibaca dari depan kodok dibaca dari belakang kodok = benar
kaca: dibaca dari depan kaca dibaca dari belakang acak = salah
output yang diharapkan:
input kodok output benar
input kaca output salah */
let string = "malam"
let stringLength = string.length
let stringToArray = string.split('')


let res = []

for (let i = stringLength; i > 0; i--) {
    res.push(stringToArray[i -1])
}

let out = res.join('')
console.log(" hasil akhir => " + res.join(''));

if (out == string) {
    console.log(true);
}else{
    console.log(false);
}
