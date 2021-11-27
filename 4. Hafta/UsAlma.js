/*
    Üs Alma Programı

    Üslü olarak verilen ifadeyi hesaplar.
    Bu programda üstteki sayının tamsayı olması zorunludur. 
*/

//Üst ve Alt alınır
let ust = -3, alt = 10;

//Üstün negatif kontrolü için mantıksal bir değer tutulur
let eksi = false;

//Sonuç değişkeni
let sonuc = 1;

//Üst negatif ise sayı daha sonra ters çevrilmek üzere üst pozitif yapılır
if(ust < 0){
    ust = ust * -1;
    eksi = true;
}

//1'den başlayan ve ust'e kadar giden bir döngü oluşturulur.
let dongu = 1;

while(dongu<=ust){
    //Sonuç alt sayıyla çarpılır
    sonuc = sonuc * alt;

    //Döngü sayısı 1 arttırılır
    dongu = dongu + 1;
}

//Üst sayı negatif ise sonuc ters çevirilerek yazdırılır
if(eksi){
    console.log(1/sonuc);
}else{
    console.log(sonuc);
}