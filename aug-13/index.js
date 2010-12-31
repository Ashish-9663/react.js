// console.log("Connected=========////----");

// //shadowing
// var a=10;

// if(true){
//     var a=20;
//     console.log(a);

// }
// console.log(a);

// let number=10;

// function displayRes(){

//     let number=2;
//     number *=3;
//     console.log(number);//6
// }
// displayRes();
// console.log(number);//10

let a=10;
function ab(){
    let a=20;
    function b(){
        let a=30;
        a=a*2;
        console.log(a)
    }
    b();
    console.log(a)

}
ab();
console.log(a)

var d=10;

if(true){
    let d=20;
    console.log(d);
}
console.log(d);

var k=1;
{
   let k=2;
}
//Both are same becoz var has no boundary on block scpe
{ 
var k=1;
let k=2;
}

//And 

let k=1;
{
   var k=2;
}
//both are same but this is not possible becoz let and const are strict variable types
let k=1;
var k=2;//As the var is no linit on the Block-Scope so it comes out 
//the  block sope and create the smae variable k which is not possible in case of let and const  

