/* Membandingkan nilai rudi dan ani
rudi punya nilai:
sejarah: 8
matematika: 7
sosiologi: 6
kewarganegaran: 9

ani punya nilai:
sejarah: 5
matematika: 8
sosiologi: 9
kewarganegaran: 6
perintah: jika nilai salah satu murid lebih tinggi maka akan mendapatkan nilai 1
output yang diharapkan:
[rudi => 2, ani => 2] */

let nilaiR = [8, 7, 6, 9]
let nilaiA = [5, 8, 9, 6]
let stringLength = nilaiR.length

let res = []    
let rudi = 0;
let ani = 0;

for (let i = 0; i < stringLength; i++) {
    if (nilaiR[i] > nilaiA[i]) {
        rudi++
    }else{
        ani++;
    }
}

console.log(rudi, ani)






