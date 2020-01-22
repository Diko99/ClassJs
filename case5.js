/* case 4 (array & integer)
menghapus nilai yang sama
data: [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]
perintah: jika kita menemukan nilai yang sama maka hapus nilai tersebut dan sisakan satu nilai yang tersisa
output yang diharapkan:
[23, 45, 67, 90, 1, 6, 12, 43] */


let data = [10, 8, 2, 1, 3, 2, 0]
let dataLength = data.length

let res = []

for (let i = 0; i < dataLength; i++) {
  if (res.indexOf(data[i]) == -1) {
    res.push(data[i])
  }    
}
console.log("remove array duplicate => " + res.join(" | "))

function sortNumber(a, b) {
  return a - b;
}

var numArray = [res.sort(sortNumber)];
res.push(numArray)

console.log(res);
