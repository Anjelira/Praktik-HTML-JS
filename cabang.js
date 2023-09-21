// 1.Syntax Percabangan if
var totalvoucher = 50000 ;
if(totalvoucher > 20000){
    document.getElementById("if").innerHTML = "Selamat Anda Mendapatkan Hadiah";
}

// 2.Syntax Percabangan if else
var tinggi = 140
if(tinggi >= 150){
    document.getElementById("ifelse").innerHTML = "Selamat Anda bisa memasuki wahana ini";
}else{
    document.getElementById("ifelse").innerHTML = "Maaf Anda Tidak bisa memasuki wahana ini";
}

// 3.Syntax Percabangan if else if
var totalbelanja = 65000
if(totalbelanja >= 70000){
    document.getElementById("ifelseif").innerHTML = "Mendapatkan Piring"
}else if(totalbelanja >= 60000){
    document.getElementById("ifelseif").innerHTML = "Mendapatkan Sabun cuci"
}else if(totalbelanja >= 50000){
    document.getElementById("ifelseif").innerHTML = "Mendapatkan Sikat gigi"
}else{
    document.getElementById("ifelseif").innerHTML = "Maaf tidak mendapatkan apa apa"
}

// 4.Syntac Percabangan Switch Case
// var nilai = prompt("Masukkan Nilai")
// var grade = "";

// switch(true){
//     case nilai > 90:
//     grade = "A";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;

//     case nilai > 80:
//     grade = "B";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;

//     case nilai > 70:
//     grade = "C";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;

//     default:
//         grade = "D"
//         document.getElementById("switchcase").innerHTML = grade

// }

// 5.Syntax Percabangan Ternary
// var tanya = prompt("Apakah Jakarta Ibu Kota Indonesia");
// var jawab = (tanya ==  "iya") ? "Benar" : "Salah";
// document.getElementById("ternary").innerHTML = jawab;

// 6.Syntax Percabangan Nested
var user = {
    nama : "Anjeli",
    email : "anjeli@gmail.com",
    password : "0101",
    role : "admin"
};

function masuk(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
 
    console.log(email);
    if(user.email == email){
        if(user.password == password){
            if(user.role == "admin"){
                alert("Selamat datang " + user.nama);
            }
        }else{
            alert("Tidak Bisa Masuk");
        }
    }else{
        alert("Bukan Admin");
    }
}
