// var num1 = 23;
// var num2 = "23";
// //if(num1==num2){
// //    console.log("beraberdiler")
// //};
// //if(num1===num2){
// //    console.log("beraberdiler/")
// //}; 

// if(num1!==num2){ //!== str int`e beraber deyil deye true olur
// console.log("beraber deyiller")
// };

// if(num1!=num2){ //!= str ve ya int olduguna baxmir, reqemlerin ozlerini muqayise edir
//     console.log("beraber deyiller")
// };
// if(num1>=num2){
//     console.log("olar")
// }
// if(num1<=num2){
//     console.log("olmaz")
// }
// var numram = 17 //js proqrami soldan saga oxuyur burada birinci numram ekrana cixacaq daha sonra numram`in deyeri 18 olacaq
// console.log(numram++)
// var numram = 17 //burada ise birinci numram`in deyeri 18 olacaq daha sonra numram 18 olaraq ekrana cixacaq
// console.log(++numram)

// console.log(!17) 
// console.log(!!17)
// console.log(!!true)// !! eger bir nida eksine cevirirse, ikinci nida eyni veziyyete qaytaracaq
// console.log(!true)// ! eksine cevirir -> eegr true olsa false, false olsa true olacaq 
// console.log(!false)

// console.log(true||false) // ||  OR bir true olsa bele true olur
// console.log(true&&false) // && AND her serti true olsa true, eks halda false olur


// if(num1===num2){
//     console.log("beraberdiler")
// } else{
//     console.log("beraber deyiller")
// }
// //ternar operatoru
// // şərt ? if`in içi : else`in içi ? - if, : - else
// num1===num2 ?  console.log("beraberdiler") : console.log("beraber deyiller")

// if(num1===num2){
//     console.log("beraberdiler")
// } else if(num1>=num2){
//     console.log("num1 boyukdur ve ya beraberdir")
// } else{
//     console.log("num2 kicikdir")
// }
// // else if ile ternar operatoru
// // şərt ? if`in içi : else if şərti ? else if`in içi : else`in içi
// num1===num2 ?  console.log("beraberdiler") : num1>=num2 ? console.log("num1 boyukdur ve ya beraberdir") : console.log("num2 kicikdir")
 
// var grade = 57
// switch(grade){
//     case grade>=91:
//         console.log("elaci")
//         break;
//     case grade>=71:
//         console.log("zerbeci")
//         break;
//     case grade>=51:
//         console.log("adi")
//         break;
//     default:
//         console.log("kesildin")  // birinci case`den sonra boyuk,kicik beraber qoymaq olmur?
// }

// var sum = 0;

// for(var i = 1;i<=11;i*2){
//     sum+=i;
// }
// console.log(sum); //i*2 niye islemir?
// //var i = 0
// //while(i<=11){
// //    i++
// //    var a = i
// //}
// //console.log(a)
// //npm i -g nodemon

// function calc(){
//     var n1 = 10
//     var n2 = 50
//     var sum = n1+n2
//     return sum;//return calc funksiyasina sum`u qaytarir

// }
// calc() 

// function calc(n1,n2){
//     var sum = n1+n2
//     return sum;//return calc funksiyasina sum`u qaytarir

// }
// calc(20,30) // n1=20, n2=30
//var worldForce - camel case
//var WorldForce - Pascal case
//var world_force - snake case
//var world-force - kebab case
//factorial fibonacci kodlarini yoxla 
/**
 * 
 * 
 * 
 * 
 */
//big o notation ic-ice dovr, ayri-ayri dovrler
// str`e cevirmeden reqemin polindrom olub olmadigini yoxla
// anaqram dog -> god skirt->risk 
// function IsAnagram(str1,str2)
function IsAnagram(str1,str2){
if (str1[0]==str2[0] || str1[0]==str2[1] || str1[0]==str2[2] && str1[1]==str2[0] || str1[1]==str2[1] || str1[1]==str2[2] && str1[2]==str2[0] || str1[2]==str2[1] || str1[2]==str2[2]){
    console.log("Anagramdir")
} else{
    console.log("Anagram deyil")
}
}
var result = IsAnagram("good","bad");


// function IsPolindrom(num){
//     var reversednum = ""
// for(var i = num.length-1 ; i>=0; i--){
//     reversednum += num[i]
// }
// return num===reversednum;
// };
// console.log(IsPolindrom("121"))

function IsPolindrom(num){
var reversednumber = 0;
console.log(reversednumber)
while (num>1){
    var n1 = (num %=10)*100
    num /=10 //31
    var n2 = (num%=10)*10
    num /=10
    var n3 = (num%10)
    var reversednumber=n1+n2+n3
    console.log(reversednumber)
}
return num===reversednumber;

};

var result = IsPolindrom(313);
console.log(result)
