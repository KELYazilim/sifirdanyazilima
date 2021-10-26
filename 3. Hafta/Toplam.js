/*
    Toplam Programı

    Bir sayıya kadar olan sayıların toplamının hesaplanabilmesi için
    1'den başlanarak Sayıya kadar olan tüm sayılar toplanır.
*/

//Toplamı alınacak sayı (n) ve sonucu tutacak değişken (toplam) oluşturulur.
let n = 2, toplam = 0;

//Girdinin doğruluğu kontrol edilir
if(n<1){

    //Birden küçük olursa girdi hatalıdır
    console.log("Hatalı Girdi!");

}else{

    //Birden başlanarak sayıya kadar gidecek bir döngü oluşturulur
    let current = 1;

    while(current<=n){

        //Döngü sayısı toplam ile toplanır
        toplam = toplam + current;
    
        //Döngü sayısı 1 arttırılır
        current = current + 1;
    }

    //Sonuç (toplam değişkeni) yazdırılır
    console.log(toplam);
}
