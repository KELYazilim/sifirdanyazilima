/*
    Faktöriyel Programı

    Bir sayının faktöriyelinin hesaplanabilmesi için
    1'den başlanarak Sayıya kadar olan tüm sayılar çarpılır.
*/

//Faktöriyeli alınacak sayı (n) ve sonucu tutacak değişken (carpim) oluşturulur.
let n = 6, carpim = 1;

//Girdinin doğruluğu kontrol edilir
if(n<0){

    //Negatif sayıların faktöriyeli alınamaz!
    console.log("Hatalı Girdi!");

}else{

    //Birden başlanarak sayıya kadar gidecek bir döngü oluşturulur
    let current = 1;

    while(current<=n){

        //Döngü sayısı çarpım ile çarpılır
        carpim = carpim * current;
    
        //Döngü sayısı 1 arttırılır
        current = current + 1;
    }

    //Sonuç (carpim değişkeni) yazdırılır
    console.log(carpim);
}
