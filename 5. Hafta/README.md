# 5. Hafta
Sıfırdan Yazılım Dersleri'nin beşinci dersi. Array teorisi üzerine konuşuldu.

- Array (Dizi) Nedir?
- Static ve Dynamic Arrayler
- Javascript'te Arrayler

## Array (Dizi) Nedir?
Array, birden fazla değişkenin birbiri arkasına tanımlanmasıdır. Birden fazla veriye tek bir isimle erişmek için kullanılır. Bir arrayin bütün elemanları RAM'de arka arkaya saklanır. Bu sayede arrayler kullanılarak, aynı isimle birden fazla değişkene erişilebilir ve işlem yapılabilir. Diziler tek ya da çok boyutlu olarak tanımlanabilir.

## Static ve Dynamic Arrayler
Arrayler kendi içlerinde tür olarak ikiye ayrılırlar. Static ve Dynamic. 

Static arrayler çoğunlukla low level dillerde karşınıza çıkar. Uzunluğu ve türü kod compile'lanırken belirlenir. Array oluşturulduktan sonra uzunluğu ve türü  değiştirilemez. Static arraylerin tüm elemanları aynı türde olmak zorundadır.

Dynamic arrayler çoğunlukla high level dillerde karşınıza çıkar. Uzunluğu kod çalışırken belirlenir. Array oluşturulduktan sonra uzunluğu değiştirilebilir. Dynamic arraylerin türü olmaz. Elemanları farklı türlerde olabilir. RAM'de otomatik taşıma yaptığı için Static arraylere kıyasla daha yavaş çalışır.
## Javascript'te Arrayler
```
let arr = [];

console.log(arr.length); // 0
console.log(arr[0]); // undefined

arr = [2, 3, 4];

console.log(arr[1]); // 3

arr[2] = 5;

console.log(arr.length); // 3
console.log(arr[2]); // 5

arr[3] = 4;

console.log(arr.length); // 4
console.log(arr[3]); // 4

console.log(arr); // [2, 3, 5, 4]

let dongu = 0;

while(dongu < arr.length){
	console.log(arr[dongu]);
	dongu = dongu + 1;
}	// 2 3 5 4

```
Javascript'te array oluşturmak için bir diziyi [] (Köşeli Parantez) içine alırız. Bu dizide tüm elemanlar "," ile ayrılır. Elemanlara erişmek için ise arrayin isminin yanına köşeli parantez içinde istenilen elemanın numarası (index) yazılır. Index numarası 0'dan başlar ve dizi uzunluğu - 1'e kadar gider. Dizide olmayan bir elemanın index numarasına erişmeye çalışırsanız ifade "undefined" değerini döndürür. array_ismi.length ifadesi ile arrayin uzunluğuna ulaşabilirsiniz.