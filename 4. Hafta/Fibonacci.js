/*
    Fibonacci Dizisi Programı

    Fibonacci Dizisinin her elemanı kendinden önceki 
    iki sayı toplanarak bulunur. 1 1 ile başlar.
*/

//Yazdırılacak eleman sayısı için count değişkeni
let count = 20;

//İlk sayının hesaplanabilmesi için 0 ve 1 den başlanır.
let first = 0, second = 1, third;

//1'den başlayan ve count'a kadar giden bir döngü oluşturulur.
let dongu = 1;

while(dongu<=count){

    //Şuanki ikinci sayımız yazdırılır
    console.log(second);
    //Üçüncü sayı hesaplanır
    third = first + second;

    //Sayılar bir kaydırılır
    first = second;
    second = third;

    //Sayı 1 arttırılır
    dongu = dongu + 1;
}
