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

//garip bir fonksiyon
function a(){
    function b(){
        return "weird javascript";
    }
    return b;
}

merhaba();

console.log(kareAl(4));

console.log(carpma(3, 2));

let c = a; //fonksiyonlar değişkenlere atanabilir

c = c(); // ??

console.log(c());

console.log(a()()); // haha cok cursed