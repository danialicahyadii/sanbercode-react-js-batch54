// jawaban 1 ( Membuat Looping sederhana )
for(var i = 0; i < 10 ; i++){
    console.log(i)
  }
console.log('//////////Pemisahhh/////////')
// jawaban 2 ( Membuat Looping dengan conditional angka ganjil )
for (var i = 1; i < 10; i += 2) {
    console.log(i);
}
console.log('//////////Pemisahhh/////////')
// jawaban 2 ( Membuat Looping dengan conditional angka genap )
for (var i = 0; i < 10; i += 2) {
    console.log(i);
}
console.log('//////////Pemisahhh/////////')
// jawaban 4 ( Mengakses element array )
let array1 = [1,2,3,4,5,6]
console.log(array1[5])

console.log('//////////Pemisahhh/////////')
// jawaban 5 ( Mengurutkan element array )
let array2 = [5,2,4,1,3,5]
console.log(array2.sort())

console.log('//////////Pemisahhh/////////')
// Jawaban 6 ( Mengeluarkan element array )
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for(var i = 0; i < array3.length; i++) {
    console.log(array3[i]);
   }

console.log('///////Pemisah//////////////')
// Jawaban 7 ( Mengeluarkan element array dan dengan kondisi )
let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for (var i = 1; i < array4.length; i += 2) {
    console.log(array4[i]);
}

console.log('///////Pemisahh/////////////')
// Jawaban 8 ( menggabungkan element menjadi string )
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
console.log(kalimat.join(" "))

console.log('///////Pemisahh/////////////')
// jawaban 9 ( Menambahkan element array )
var sayuran=[]
sayuran.push("Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge")
console.log(sayuran)