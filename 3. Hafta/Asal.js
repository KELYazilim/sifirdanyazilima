/*
    Asal Sayı Kontrol Programı

    Bir sayının asal olup olmadığının kontrol edilebilmesi
    için ikiden başlanarak o sayıya kadar olan tüm sayıların
    o sayıyı bölüp bölmediği kontrol edilir.
*/

//Kontrol edilecek sayı ve sayının asallığını tutacak bir değişken oluşturulur
let n = 37, asal = true;

//Sayımız 2'den küçükse asal değildir. (Negatif Sayılar + 0 + 1)
if(n<2){
    asal = false;
}

//İkiden başlayarak sayımıza kadar gidecek bir döngü oluşturulur
let current = 2;

//Döngü sayısı n'den küçük olduğu sürece ve sayımız asal olduğu sürece
while(current<n && asal){

    //Eğer n'den küçük herhangi bir sayı n'i tam bölüyorsa n asal değildir
    if(n % current == 0){
        asal = false;
    }

    //Döngü sayısı 1 arttırılır
    current = current + 1;
}

if(asal){
    //Sayımız asal
    console.log("Sayı Asal!");
}else{
    //Sayı asal değil
    console.log("Sayı Asal Değil!");
}