function filterBooksPromise(colorful, amountOfPage){
  return new Promise(function (resolve, reject){
    var books=[
      {name: "shinchan", totalPage: 50, isColorful: true},
      {name: "Kalkulus", totalPage: 250, isColorful: false},
      {name: "doraemon", totalPage: 40, isColorful: true},
      {name: "algoritma", totalPage: 250, isColorful: false},
    ]
    if (amountOfPage >= 40){
      resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful))
    }else {
      var reason = "maaf buku di bawah 40 halaman tidak tersedia"
      reject(reason)
    }
  })
}

let execute = async () => {
  try {
    let result = await filterBooksPromise(true, 40)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
  
  try {
    let result = await filterBooksPromise(false, 250)
    console.log(result)
  } catch (error) {
    console.log(error)
  }

  try {
    let result = await filterBooksPromise(true, 30)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
  
}

execute()

async function runFilterBooksPromise() {
  try {
    let result1 = await filterBooksPromise(true, 40);
    console.log("Hasil filter (bukunya berwarna dan jumlah halamannya 40):", result1);
  } catch (error) {
    console.error("Error (bukunya berwarna dan jumlah halamannya 40):", error);
  }

  try {
    let result2 = await filterBooksPromise(false, 250);
    console.log("Hasil filter (bukunya tidak berwarna dan jumlah halamannya 250):", result2);
  } catch (error) {
    console.error("Error (bukunya tidak berwarna dan jumlah halamannya 250):", error);
  }

  try {
    let result3 = await filterBooksPromise(true, 30);
    console.log("Hasil filter (bukunya berwarna dan jumlah halamannya 30):", result3);
  } catch (error) {
    console.error("Error (bukunya berwarna dan jumlah halamannya 30):", error);
  }
}

runFilterBooksPromise();

