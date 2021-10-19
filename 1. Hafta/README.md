# 1. Hafta
Sıfırdan Yazılım Dersleri'nin ilk dersi. Kısa bir tanışmadan sonra derse başlandı.
- Kod Nedir?

- Yazılımcı/Coder Kime Denir?

- Bilgisayarlarda Sıfır Ve Birlerin Önemi

- Yazılım Dili Nedir?

- Yazılım Dillerinin Sınıflandırılması

## Kod Nedir?
Kodun ne olduğunu anlamak için öncelikle bilgisayarları tanımlamamız gerekiyor. Bilgisayarlar için kısaca aptal makineler diyebiliriz. Düşünemez veya anlayamazlar. Tek yapabildikleri onlara en ufak detayına kadar verdiğiniz talimatları uygulmaktır. Biz bu detaylı talimatlara kod, bu talimatları yazan kişilere ise Yazılımcı/Coder diyoruz.

## Sıfır Ve Birlerin Bilgisayar İçin Önemi
Matrix’te gördüğünüz o havalı yeşil 01’ler gerçekten bilgisayarlarda var. Bilgisayarlar için her şey ya sıfırdır ya da birdir. Elektrik ya vardır ya da yoktur. Bu sebeple bilgisayarlar sıfır ve birlerden başka bir şey anlayamazlar. 

## Yazılım Dili Nedir?
Evet bilgisayarlar sadece sıfır ve birlerden anlarlar ancak biz gerçekten bu sıfır ve birlerle mi kod yazıyoruz? Cevap, **Hayır**. Sıfır ve birleri kullanarak kod yazmaya çalıştığınızı düşünün. Sadece iki karakteriniz olduğu için basit bir kod bile sayfalar sürer değil mi? İşte burada geçmişteki mühendisler bunu kolaylaştırmak için yazılım dili dediğimiz şeyi bulmuşlar. Kısaca bu mühendisler arkadaşların yazdığı programlar (Compilerlar) sayesinde kelimelerle yazdığımız kodlar 01’lere çevrilip bilgisayar tarafından okunabiliyor. Zamanla yazılımcılar kendi istekleri ve amaçlarına özel kodlar yazmak isteyince de kendi yazılım dillerini geliştirmişlerdir. Bu sayede günümüzde internete yazılım dilleri yazdığınız zaman karşınıza sayfalarca yazılım dili çıkıyor.
## Yazılım Dillerini Sınıflandırmak
Tüm yazılım dillerinin kendilerine özel amaçları vardır. Diller arasında karşılaştırma yapmak makine mühendisliğiyle bilgisayar mühendisliğini karşılaştırmaya benziyor. Bu iki dal da mühendislik ancak amaçları ve yaptıkları farklı. Aynı madde yazılım dilleri için de geçerli. Siz burada amacı oyun geliştirmek olan bir yazılım diliyle amacı web sitesi geliştirmek olan bir dili karşılaştırıyorsunuz. Bu durumda elinizde olan tek sonuç iki dilin farklı olduğudur. Bu durumda biz yazılım dillerini sınıflandırmak için bazı kriterler kullanıyoruz:
- **Yazılım dilinin amacı,**
- **High Level – Low Level düzeyi,**
- **Interpreted veya Compiled olması.**

İlk olarak yazılım dilinin kullanılma amacına bakmamız gerekiyor. Çoğu yazılım dilinin spesifik olarak bir kullanım amacı vardır. Kullanacağınız yazılım dilinin amacının sizin amacınızla uyuştuğuna emin olmanız gerekiyor.

İkinci olarak ise dilin high level ve low level aralığına bakmamız gerekiyor. Yazılım dilini tanımlarken şöyle bir ifade kullanmıştık : "İşte burada geçmişteki mühendisler **bunu kolaylaştırmak için** yazılım dili dediğimiz şeyi bulmuşlar". Her dilin kolaylaştırma seviyesi aynı değil. Bir dilin anlaşılması ve yazılması ne kadar kolaysa o kadar **high level** bir dildir. Bunun tersine yazması ve okunması ne kadar zorsa, makine diline ne kadar yakınsa o kadar **low level** bir dildir.

Ee arkadaşlar oturup bizim için kolaylaştırmışlar kod yazmayı. Biz neden gidip low level dil kullanalım ki, diye sorabilirsiniz. Bu soruya şu şekilde cevap verebiliriz.

Bir dilin yazılması nasıl kolaylaşır? O yazılım dili çoğu “gereksiz” kodu sizin için halleder. Siz Low Level bir dilde 20 satırda yazdığınız kodu high level bir dilde 2 satırda yazabilirsiniz. Burada “gereksiz” kelimesini vurgulamak istiyorum. Bu cümledeki gereksiz kodlar ifadesi çoğunlukla değiştirmeniz gerekmeyen kodları belirtiyor. Bunu somutlaştırmak istersek şu örneği kullanabiliriz: “Okula Gideceğim” ve “Okula Yürüyerek Gideceğim” ifadeleri… High level diller sizi “gereksiz” kodlarla uğraştırmamak için “Okula Gideceğim” ifadesini kullanır ve amacınız ne olursa olsun okula yürüyerek gidersiniz. Ancak diyelim ki bir nedenden dolayı okula arabayla gitmeniz gerekiyor. Bu durumda ne olur? High level dili kullanamazsınız çünkü o yazılım dili kodları kısaltmak için nasıl gideceğinizi değiştirmenize izin vermiyor. Bu durumda mecburi olarak Low level dil kullanırsınız. Aynı durum yazılımda da geçerlidir. Aşırı spesifik bir şey yapmak istediğinizde, İşletim sistemi, Driver veya bunlar gibi ağır programlar yazmak istediğinizde Low level diller kullanmak zorunda kalıyorsunuz.

Son olarak bir dilin compiled veya interpreted olmasına bakıyoruz. Şimdi biz yazılım dillerini tanımlarken ne demiştik? Bilgisayarlar sıfır ve birlerden başka bir şey anlayamazlar. Bu durumda yazı olarak yazdığımız kodların sıfır ve birlere çevrilmesi gerekir değil mi? İşte bu kodun sıfır ve birlere nasıl ve ne zaman çevrileceğini belirtmek için Compiled veya Interpreted terimlerini kullanıyoruz.

Compiled dillerde tüm kod bir anda alınır ve tek seferde sıfır ve birlere çevrilir. Bunun sonucunda sizin yapmanız gereken tek şey çıktı programı çalıştırmaktır. Ancak Interpreted dillerde yazdığınız kod başka bir program tarafından satır satır okunur, satır satır sıfır birlere çevrilir ve satır satır çalıştırılır. Bu durumda Compiled diller ve Interpreted diller arasında belli farklar ortaya çıkar. Öncelikle Interpreted dillerde kodun sıfır ve birlere çevrilmesi ile çalışması aynı zamanda olduğu için Compiled dillere kıyasla kod daha yavaş çalışır. Ancak aynı şekilde Interpreted dillerin kodları çalışma sırasında sıfır ve birlere çevrildiği için Compiled dillerde yapıldığı gibi önceden yapılan bir sıfır bire çevirme operasyonuna ihtiyaç duymazlar. Çoğunlukla high level diller Interpreted olarak karşımıza çıkarlar. Aynı şekilde low level diller hızlı bir şekilde çalışabilmek ve fazladan bir programa ihtiyaç duymamak için Compiled olarak karşımıza çıkarlar.