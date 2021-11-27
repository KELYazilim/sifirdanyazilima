/*
    EBOB Programı

    İki sayının EBOB'unun alınması için 
    birden başlanarak küçük olan sayıya kadar tüm sayılar
    iki sayıyı bölebiliyor mu diye bakılır.
    İki sayıyı da bölebilen en büyük sayı alınır.
*/

//Sayılar için x ve y değişkenleri, maksimum bölen için max değişkeni
let x = 135, y = 90, max = 1;

//Small değişkenine küçük olan değer atanır
let small;
if(x>y){
    small = y;
}else{
    small = x;
}

//1'den başlayan ve küçük sayıya kadargiden bir döngü oluşturulur.
let current = 1;

while(current<=small){

    //Şuanki sayımız x ve y'yi tam bölebiliyorsa
    if( (y % current == 0) && (x % current == 0) ){
        //Maksimum böleni current yap
        max = current;
    }

    //Sayı 1 arttırılır
    current = current + 1;
}

//Maksimum böleni yazdır
console.log("EBOB : " + max);