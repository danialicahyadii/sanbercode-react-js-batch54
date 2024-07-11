////////////////////////////////////////////////////////////////
function cetakFunction(){
    return ('Hallo Nama saya Dani Ali Cahyadi')
        }
    console.log(cetakFunction())
    
    ////////////////////////////////////////////////////////////////
    function myFunction(angka1, angka2){
        return angka1 + angka2
    }
    
    let angka1 = 20
    
    let angka2 = 7
    
    let output = myFunction(angka1, angka2)
    
    console.log(output)
    
    ////////////////////////////////////////////////////////////////
    const Hello = () => {
        return "Hello"
    }
    
    // panggil Function
    console.log(Hello())
    ////////////////////////////////////////////////////////////////
    let obj = {
    
        nama : "john",
        
        umur : 22,
        
        bahasa : "indonesia"
        
        }
    
    console.log(obj.bahasa)
    ////////////////////////////////////////////////////////////////
    let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
    let objDaftarPeserta = {
    
        nama : arrayDaftarPeserta[0],
        
        jenis_kelamin : arrayDaftarPeserta[1],
    
        hobi : arrayDaftarPeserta[2],
    
        tahun_lahir : arrayDaftarPeserta[3]
        
        }
    console.log(objDaftarPeserta)
    ////////////////////////////////////////////////////////////////
        var buah = [
            {nama : "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000 },
            {nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000},
            {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000},
            {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000},
        ]
    
        var arrayBuahFilter = buah.filter(function(item){
            return item.adaBijinya != true;
        })
        
        console.log(arrayBuahFilter)
    ////////////////////////////////////////////////////////////////
        let phone = {
            name: "Galaxy Fold 5",
            brand: "Samsung",
            year: 2023
        }
    
        const {name, brand, year} = phone
    
        console.log(name, brand, year)
    ////////////////////////////////////////////////////////////////
        let dataBukuTambahan= {
            penulis: "john doe",
            tahunTerbit: 2020 
        }
        
        let buku = {
            nama: "pemograman dasar",
            jumlahHalaman: 172
        }
        
        let objOutput = {...dataBukuTambahan, ...buku}
        console.log(objOutput)
    ////////////////////////////////////////////////////////////////
    
        let mobil = {
    
            merk : "bmw",
            
            color: "red",
            
            year : 2002
            
            }
            
            const functionObject = (param) => {
            
            return param
            
            }
    
            console.log(functionObject(mobil))
    
    ////////////////////////////////////////////////////////////////