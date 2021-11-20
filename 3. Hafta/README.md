
# 3. Hafta
Sıfırdan Yazılım Dersleri'nin üçüncü dersi. 
- Pseudo Kod Nasıl Yazılır
- Bilgisyarda İşlem Öncelikleri
- Javascript'in Temelleri
	- Noktalı Virgül
	- Değişken Türleri
	- Operatörler
	- Console.log()
	- Kontrol Yapıları
	- Döngü Yapıları

## Pseudo Kod Nasıl Yazılır
İkinci haftanın dersinde pseudo kodun ne olduğunu öğrenmiştik. Bu hafta ise pseudo kod yazacak ve yazdığımız bu kodu javascript'e çevirip bilgisayarda çalıştıracağız.
Öncelikle pseudo kodun ilk ve tek kuralı basamak basamak yani adım adım olmasıdır. Yazım kurallarına sahip değildir. Siz anladığınız sürece yazımı önemli değildir.
Pseudo kod yazarken yapmanız gereken ilk şey, yapacağınız şeyi adımlara çevirmektir. Mesela X'e kadar olan sayıları toplayacaksanız, aklınızda toplam'ı tutarsınız (Değişkenler burada devreye giriyor), ardından 1'den başlarsınız ve sayınız X'ten küçük olduğu sürece sayıyı birer birer arttırarak bulduğunuz sayıları toplama eklersiniz.
```
Toplam Programı : 
1. toplam = 0
2. x = 6
3. sayi = 1 
4. sayi x'ten küçük olduğu sürece : (x>sayi)
	4. toplam'ı sayi kadar arttır (toplam = toplam + sayi) 
	4. sayi'yı bir arttır (sayi = sayi + 1)
5. toplam'ı ekrana yazdır
```
  Üstteki örnekte 1'den başlayarak x'e kadar gidecek bir sayı aklımızda tutuyoruz (sayi), toplam'ı aklımızda tutuyoruz (toplam), ve toplamını alacağımız sayıyı aklımızda tutuyoruz (x). Bu değişkenleri belirlediğimize göre artık ana işlemleri yapabiliriz. x'e kadar olan tüm sayıların toplamını bulmak istiyoruz. Bu işlemi siz aklınızdan yapmaya çalıştığınızda aklınızda üstteki algoritmayı uygularsınız. 1'den başlarsınız, ve sayınız x'ten küçük olduğu sürece her adımda sayi'yı toplam'a ekleyip sayi'yı bir arttırırsınız.

```
Faktöriyel Programı
1. carpim = 0
2. x = 6
3. sayi = 1 
4. sayi x'ten küçük eşit olduğu sürece : (x>=sayi)
	4. carpim'ı sayi ile çarp (carpim = carpim * sayi)
	4. sayi'yı bir arttır (sayi = sayi + 1)
5. carpim'ı ekrana yazdır
```
Üstteki örnekte ise x sayısının faktöriyelini almak istiyoruz. 1'den başlayarak x'e kadar gidecek bir sayı aklımızda tutuyoruz (sayi), çarpım aklımızda tutuyoruz (carpim), ve faktöriyelini alacağımız sayıyı aklımızda tutuyoruz (x). x'in faktöriyelini almak istediğimizde aynı şekilde 1'den başlayarak x'e kadar olan (x dahil) tüm sayıları çarpıyoruz. Bu işlemi siz aklınızdan yapmaya çalıştığınızda aklınızda üstteki algoritmayı uygularsınız. 1'den başlarsınız, ve sayınız x'ten küçük eşit olduğu sürece her adımda carpim'ı sayi ile çarpıp sayi'yı bir arttırırsınız.
Bu kısım yazılımın temelleri için gerçekten çok önemli. Bu sebeple bir sonraki kısıma geçmeden önce birkaç tane tek başınıza pseudo kod yazma denemesi yapmanızı öneririm. Ayrıca basamak basamak düşünme pratiği yapmak için https://blockly.games/maze?lang=tr adresindeki oyunları oynayabilirsiniz.

## Bilgisyarda İşlem Öncelikleri
Bilgisayardaki işlem öncelikleri aynı aklımızdaki gibi çalışır. Bilgisayar tüm işlemi okur ve hangisini önce yapacağına karar verir. Örneğin 9 x ( 3 + 2 ) işleminde işlemci gelir ve önce 3 + 2 işlemini yapması gerektiğine karar verir. 3 + 2 işlemini yapar ve sonucunu yerine yazar. Sonuç olarak ikinci basamakta 9 x ( 5 ) işlemi çıkar. İşlemci ise son işlem olan 9 x 5'i hesaplayarak 45 yazar. İşlem yaparken bir değişken ismi gördüğünde ise işlemi yaparken o değişkenin değerini yazar. Örneğin : 
```
x = 5
y = 3
İşlemimiz = 9 + ( 3 * x + ( y + 5 ) )
1. Basamak : 9 + ( 3 * x + "( y + 5 )" ) : y + 5 = 3 + 5 = 8
2. Basamak : 9 + ( "3 * x" + 8 ) : 3 * x = 3 * 5 = 15
3. Basamak : 9 + "( 15 + 8 )" : 15 + 8 = 23
4. Basamak : 9 + 23 = 32
```
## Javascript'in Temelleri
### Noktalı Virgül
Yazılım dillerinin çoğunluğunda noktalı virgüle (;) ihtiyaç duyarız. Noktalı virgül compiler'a bir işlem satırının nerede bittiğini gösterir. Her işlem satırından sonra konur. Kontrollerden (if) veya Döngülerden (While) sonra konmaz.
Örnek Kod:
```
let n = 37, asal = true;

if(n<2){
	asal = false;
}

let current = 2;
while(current<n && asal){
	if(n % current == 0){
		asal = false;
	}
	current = current + 1;
}

if(asal){
	console.log("Sayı Asal!");
}else{
	console.log("Sayı Asal Değil!");
}
```
### Değişken Türleri
Ram'e sadece sayısal veriler yazılabilir. Ram'e sayılar aracılığıyla sayısal olmayan veriler yazabilmek için değişken türlerine ihtiyaç duyarız. Sayısal olmayan tüm verilere sayısal değerler atanır ve sayısal değerleri Ram'e yazılır. Örneğin A harfini Ram'e yazmak istediğinizde işlemci Ram'e 65 yazar. Okurken de bu sayısal değerin bir sözel değer olduğunu bildiği için otomatik olarak A harfine çevirir. Değişken türlerini Sözel, Sayısal ve Mantıksal olarak üç başlık altında toplayabiliriz:
- Sözel
	- **Char** : Tek karakterlik sözel değerler için kullanılır. 'A'
	- **String** : Birden fazla karakter içeren sözel metinler için kullanılır. "aB@"
- Sayısal
	- **Int** : Tam sayılar için kullanılır. -48
	- **Float** : Virgüllü sayılar için kullanılır. 3.92
- Mantıksal
	- **Bool** : Mantıksal yani sadece doğru ya da yanlış olabilen değerler için kullanılır. true / false
	
High-Level dillerin çoğunluğunda değişken oluştururken türünü belirlemeniz gerekmez. İşlemci otomatik olarak değişken türünü belirler. Ancak Low-Level dillerde değişken oluştururken değişkenin türünü belirtmek zorunludur.
### Operatörler
Tüm yazılım dillerinde işlem yapmak için operatör dediğimiz elemanlara ihtiyaç duyarız. Bu operatörlerin çoğu evrenseldir ve tüm dillerde aynıdır. Operatörler ana başlık olarak ikiye ayrılırlar : İşlemsel Ve Mantıksal. İşlemsel operatörler işlem yapıp sonucu döndürürler. Mantıksal operatörler ise iki değeri karşılaştırıp doğru ya da yanlış bir mantıksal değer döndürürler. En çok kullanılan operatörler:
- İşlemsel Operatörler
	- '+' : Toplama operatörüdür. Verilerin toplamlarını döndürür.   
	- '-' : Çıkarma operatörüdür. Verilerin farklarını döndürür.  
	- '*' : Çarpma operatörüdür. Verilerin çarpımlarını döndürür.  
	- '/' : Bölme operatörüdür. Verilerin bölümlerini döndürür.  
	- '%' : Modulo operatörüdür. Verilerin bölümlerinin kalanını döndürür. 
	- '=' : Atama operatörüdür. Sağındaki veriyi sol tarafındaki değişkene atar.
- Mantıksal Operatörler
	- '==' : Eşit operatörüdür. Verilerin eşitliğini döndürür.  
	- '!=' : Eşit Değil operatörüdür. Verilerin eşitliğinin tersini döndürür.  
	- '>' : Büyük operatörüdür. Soldaki verinin sağdan büyüklüğünü  döndürür.
	- '<' : Küçük operatörüdür. Soldaki verinin sağdan küçüklüğünü  döndürür.
	- '>=' : Büyük Eşit operatörüdür. Soldaki verinin sağdan büyüklüğünü veya eşitliğini  döndürür.  
	- '<=' : Küçük Eşit operatörüdür. Soldaki verinin sağdan küçüklüğünü veya eşitliğini  döndürür.    
	- '&&' : Ve operatörüdür. İki mantısal verinin doğruluğunu döndürür.
	- '||' : Veya operatörüdür. İki mantısal verinin ikisinden birinin doğruluğunu döndürür.
	- '!' : Ters operatörüdür. Sağındaki mantıksal verinin tersini döndürür.
	
### console.log()
Ekrana veri yazdırılması için bilinmesi gereken bir komuttur. Parantezin içine yazdırılmak istenen veri yazılır.
```
console.log(5 + 3); : 8
console.log("abc"); : abc
let x = 53;
console.log(x); : 53
x = "javascript";
console.log(x); : javascript
```

### Kontrol Yapıları
```
if(mantıksal değer){

}
``` 
şeklinde yazılır. Pseudo koddaki Eğer cümlelerine denktir. Parantezin içerisine mantıksal bir değer alır. Mantıksal değer doğruysa süslü parantezlerin içindeki kodları çalıştırır. Örneğin :
```
let x = 5;
if(x>4){ // Eğer x 4'ten büyükse
	console.log(x); // x'i ekrana yazdır
}

Çıktı : 5
```

```
if(mantıksal değer){

}else{

}
``` 
else ifadesi şekildeki gibi kullanılır. Üstündeki if'in mantıksal değeri yanlış ise süslü parantezleri arasındaki kodları çalıştırır. Else ifadesi üstündeki if çalışırsa çalışmaz. Örneğin:
```
let x = 5;
if(x>6){ // Eğer x 6'dan büyükse
	console.log(x); // x'i ekrana yazdır
}else{
	console.log(-1): // Ekrana -1 yazdır
}

Çıktı : -1
```
### Döngü Yapıları
```
while(mantıksal değer){

}
``` 
şeklinde yazılır. Pseudo koddaki Olduğu Sürece cümlelerine denktir. Parantezin içerisine mantıksal bir değer alır. Mantıksal değer doğru **olduğu sürece** süslü parantezlerin içindeki kodları çalıştırır. Örneğin :
```
let x = 5;

while(x > 2){ // x 2'den büyük olduğu sürece
	console.log(x); // x'i ekrana yazdır
	x = x - 1; // x'i bir azalt
}

Çıktı : 5 4 3
```
# Örnek Kodlar

Örnek kodlara ilgili dosya isminin üstüne tıklayarak ulaşabilirsiniz!