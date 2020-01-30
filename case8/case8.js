let score = 0;  
let mulaiMain = 0;  

// buat variabel untuk memanggil id dari file index.html supaya bisa dipanggil pada javascript 

let Spem            = document.getElementById('scorePemain')
let stGame          = document.getElementById('starGame')
let cola            = document.getElementById('b1')
let colb            = document.getElementById('b2')
let colc            = document.getElementById('b3')
let tambahPoint     = document.getElementById('JumlahPoint')
let tokenBaru       = document.getElementById('tokenBaru')


pencet = () => {
    if(mulaiMain < 5) {   //  jika jm lebih kecil dari 3 maka bisa main
        a = 4  - mulaiMain;         //  untuk mengurangi jumlah main
        stGame.innerHTML = a;  // menampilkan sisa token
        return token() + acak();        
    } else {
        alert("Token anda sudah habis :(");  // menampilkan jika token main sudah habis
    }
}

token = () => {
    tokenBaru.style.display = 'none';
    stGame.style.display = 'inline';  //  dan memunculakan jumlah token akhir tadi

}
acak = () => {
            let s1 = Math.floor(Math.random() * 2);  // s1 s2 dan s3 untuk mendapatkan angka spin
            let s2 = Math.floor(Math.random() * 2);
            let s3 = Math.floor(Math.random() * 2);
           cola.innerHTML = s1
           colb.innerHTML = s2
           colc.innerHTML = s3

                 if(s1 == s2) {        //  jika angka spin s1 s2 dan s3 sama maka akan menambah nilai score dan memberitahukan dapat 1 point
                 if(s2 == s3) {        //  dan jumlah score
                    score = score + 1;
                    a++;
                    stGame.style.display = 'none';  
                    stGame.style.display = 'inline'; 
                    stGame.innerHTML = a;
                }
            } 
           Spem.innerHTML =  score;
                 mulaiMain++;    //  untuk menambah jumlah main
        }