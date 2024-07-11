const myCountPromise = (input) => {
    return new Promise((resolve, reject) => {
      if (input !== undefined) {
        setTimeout(() => {
          const result = input * 2
          resolve(result)
        }, 2000)
      } else {
        reject("Maaf Tidak ada nilai dalam parameter")
      }
    })
  }

myCountPromise(3)
.then((result)=>{
    console.log(result)
})
.catch((error) => {
    console.log(result)
})