# 6. Hafta
Sıfırdan Yazılım Dersleri'nin altıncı dersi. Fonksiyonlar üzerine konuşuldu.

- Fonksiyon Nedir?
- Fonksiyon Türleri
- Fonksiyonlarda Parametreler
- Recursive Fonksiyon Nedir?

## Fonksiyon Nedir?
Kod yazarken birden fazla defa kullanılması gereken bir kod parçasının her yere kopyala yapıştır yapmak yerine işlevli bir bütün haline getirilip kullanılmasına fonksiyon denir.

```
//iki üçgenin alanını toplayalım

let h1 = 4, taban1 = 6;
let h2 = 6, taban2 = 8;
let alan1 = h1*taban1/2;
let alan2 = h2*taban2/2;
console.log(alan1 + alan2);

//Bir de bunu fonksiyon kullanarak yapalım

function alanHesapla(yukseklik, taban){
	return yukseklik*taban/2;
}
console.log( alanHesapla(4, 6) + alanHesapla(6, 8) );

```

## Fonksiyon Türleri
Fonksiyonlar kendi içlerinde tür olarak ikiye ayrılırlar. non-return ve return fonksiyonlar.
Non-return fonksiyonlar bir değer döndürmezler. void türündedirler. Sadece içlerine yazılan kod parçasını çalıştırırlar.
```
//non-return bir fonksiyon
function zipla(){
	character.y = character.y + 10;
	character.animationController.play(jumpAnimation);
	console.log("Karakter Zıpladı!");
}

```

  

Return fonksiyonlar ise bir değer döndürebilirler. Herhangi bir değişken türünü tür olarak alabilirler. İçine yazılan kod parçasını çalıştırmanın yanı sıra bir değer de döndürürler.

```
//return bir fonksiyon
function alanHesapla(yukseklik, taban){
	return yukseklik*taban/2; // yukseklik*taban/2 degerini hesaplayıp döndürür
}
```

Örneğin bir karakterin zıplama fonksiyonu herhangi bir değer döndürmeyeceğinden non-return fonksiyon olmalıdır. Ancak bir üçgenin alanını hesaplama fonksiyonu sonuç vermesi gerektiği için return fonksiyon olmalıdır.

  

Javascript high level bir dil olduğu için fonksiyonlar tanımlanırken türünü belirtmiyoruz. Otomatik olarak tüm fonksiyonlar return fonksiyon olarak oluşturulur. Bir değer döndürmek istediğiniz zaman hiçbir şeye dokunmadan sadece oraya return yazarak döndürebilirsiniz. Herhangi bir yere return yazmazsanız fonksiyon tanımlanmamış anlamına gelen "undefined" değerini döndürür.

  

## Fonksiyonlarda Parametreler

Fonksiyonlar içlerine fonksiyona özel bir girdi olarak parametre alabilirler. Fonksiyon içerisinde oluşturulan tüm değişkenler (Parametreler de dahil) fonksiyon bittikten sonra ram'den silindiği için fonksiyon dışından ulaşılamaz.

```
//parametresiz bir fonksiyon
function merhaba(){
	console.log("Hello World");
}

//bir parametreli bir fonksiyon
function kareAl(x){
	return x*x;
}
  
//birden fazla parametreli fonksiyon
function carpma(x, y){
	return x*y;
}
```

## Recursive Fonksiyon Nedir?
Kendi içerisinde kendini çağıran fonksiyonlara recursive fonksiyon denir. Genellikle Divide And Conquer algoritmalarda kullanılır. Örneğin recursive olarak yazılan bir faktöriyel kodu:
```
//faktoriyel hesaplamak için yazılan recursive bir fonksiyon

function faktoriyel(n){
	if(n<2){
		return 1;
	}
	return n * faktoriyel(n-1);
}

```

Bu algoritmada fonksiyon, faktöriyel alabilmek için parametrenin o anki değeriyle bir küçük sayısının faktöriyelini çarpar. Bu durum parametre 1 oluncaya kadar devam eder. Parametre 1 olunca fonksiyon kendini çağırmak yerine 1 döndürür ve sonuç olarak tüm bu değerler çarpılarak sayının faktöriyeli alınır.