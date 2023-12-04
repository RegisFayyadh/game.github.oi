let ulang = confirm("Mau Main Game Tebak angka?");

while(ulang == true){
    let angka = Math.floor(Math.random() * 20 + 1);

    console.log(angka);
    let user = prompt("Masukan Angka antara 1 sampai 20");
    if(angka == user){
        alert("Benar!!");
        ulang = confirm("Mau Lanjut");
    }else if(user < angka){
        alert("Kekecilan Angkanya 😂")
    }else if(user > angka){
        alert("Kegedean Woi 🤣")
    }
    
    while(user != angka && ulang == true){
        user = prompt("Masukan Angka antara 1 sampai 20");
        if(angka == user){
            alert("Benar!!");
        }else if(user < angka){
            alert("Kekecilan Angkanya 😂")
        }else if(user > angka){
            alert("Kegedean Woi 🤣")
        }
        ulang = confirm("Mau Lanjut?")
    }
}
