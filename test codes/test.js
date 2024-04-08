var num1 = 23;
var num2 = "23";
if(num1==num2){
   console.log("beraberdiler")
}; //tipi nezere almayib muqayise edir
if(num1===num2){
   console.log("beraberdiler/")
}; //tipi nezere alib muqayise edir

if(num1!==num2){ //!== str int`e beraber deyil deye true olur
console.log("beraber deyiller")
};

if(num1!=num2){ //!= str ve ya int olduguna baxmir, reqemlerin ozlerini muqayise edir
    console.log("beraber deyiller")
};
if(num1>=num2){
    console.log("olar")
}
if(num1<=num2){
    console.log("olmaz")
}
var numram = 17 //js proqrami soldan saga oxuyur, burada birinci numram ekrana cixacaq, daha sonra numram`in deyeri 18 olacaq
console.log(numram++)
var numram = 17 //burada ise birinci numram`in deyeri 18 olacaq, daha sonra numram 18 olaraq ekrana cixacaq
console.log(++numram)

console.log(!17) //False
console.log(!!17) //True
console.log(!true) // ! eksine cevirir -> eger true olsa false, false olsa true olacaq 
console.log(!!true) // !! eger bir nida eksine cevirirse, ikinci nida eyni veziyyete qaytaracaq
console.log(!false) //true

console.log(true||false) // ||  OR`da bir true olsa bele true olur
console.log(true&&false) // && AND`de her bir sert true olsa true, eks halda false olur


if(num1===num2){
    console.log("beraberdiler")
} else{
    console.log("beraber deyiller")
};
//ternar operatoru
// şərt ? if`in içi : else`in içi ; ? - if, : - else
num1===num2 ? console.log("beraberdiler") : console.log("beraber deyiller")

if(num1===num2){
    console.log("beraberdiler")
} else if(num1>=num2){
    console.log("num1 boyukdur ve ya beraberdir")
} else{ //num2>num1
    console.log("num2 kicikdir")
}
// else if ile ternar operatoru
// şərt ? if`in içi : else if şərti ? else if`in içi : else`in içi
num1===num2 ?  console.log("beraberdiler") : num1>=num2 ? console.log("num1 boyukdur ve ya beraberdir") : console.log("num2 kicikdir")
 
var pul = 60
switch(pul){
    case 10:
        console.log("kicik tort")
        break;
    case 30:
        console.log("20 neferlik tort")
        break;
    case 60:
        console.log("2 20 neferlik tort")
        break;
    default:
        console.log("ya az ya da cox pul verdiz")  
} // birinci case`den sonra boyuk,kicik beraber qoymaq olmur? -> default olaraq reqem: ve ya variable: olmalidir

var sum = 0;
for(var i = 1;i<=5;i*=2){
    sum+=i;
}
console.log(sum); //i*2 yox i*=2 yazmaq lazimdir
/**
 * i=1 1<5 -> sum=1, i*2=2
 * i=2 2<5 -> sum=3 i*2=4
 * i=4 4<5 -> sum=7 i*2=8
 * i=8 8<5 -> sum=7
 * birinci serti yoxlayir, sum`i tapir, sonra da i*=2 emeliyyatini yerine yetirir
 */

var i = 0
while(i<=5){
   i++
   var a = i
}
console.log(a)
/**
 * i = 0, 0<=5, i = 1(i++)
 * i = 1, 1<=5, i = 2(i++)
 * i = 2, 2<=5, i = 3(i++)
 * i = 3, 3<=5, i = 4(i++)
 * i = 4, 4<=5, i = 5(i++)
 * i = 5, 5<=5, i = 6(i++)
 * i = 6, 6<=5 console.log(a) -> 6
 */

//npm i -g nodemon

function calc(){
    var n1 = 10
    var n2 = 50
    var sum = n1+n2
    return sum;//return calc funksiyasina sum`u qaytarir
}
console.log(calc()) 

function calc1(n1,n2){
    var sum = n1+n2
    return sum;//return calc funksiyasina sum`u qaytarir
}
console.log(calc1(20,30)) // n1=20, n2=30

// worldForce - camel case
// WorldForce - Pascal case
// world_force - snake case
// world-force - kebab case *js`de islemir
// //factorial fibonacci kodlarini yoxla 

// //big o notation ic-ice dovr, ayri-ayri dovrler
// // str`e cevirmeden reqemin polindrom olub olmadigini yoxla
// // anaqram dog -> god skirt->risk 

// // array -> arr.length; arr[0]; delete arr[0]; new Array(); fill empty item olanda isleyir
var arr = new Array(10);
for(var i = 1; i<=10; i++){
    arr[i-1]=i
}
console.log(arr)
console.log(arr.fill(10))
var arr1 = [1,2,3]
console.log(arr1)
console.log(arr1.fill(3))
console.log(delete arr1[4]) //?
// // break continue
// // object var user1 ={name:"orxan",age:17} console.log(user1.name or  user1["name"]) user1.name ="zahid" *kebab case "has-car":false 
// /**
//  *run:function(){
//     console.log(this.age)
//  } 
//  *var Test = function(){

//  } -> anonim funksiya
// yuxaridaki ile eynidir -> function test(){

// }
//  */
//var, const, let ?
//console.log(typeof num1)
//datatypes
// '$' -> dinamik?
// for of?
//test.array[0].id=2 test.array[0]["id"]=2?


