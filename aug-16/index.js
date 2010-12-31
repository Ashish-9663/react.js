// console.log("Dom================");

// let a=10;
// // {
// //     let a=10;
// //     var a=10;

// // }

// window.b=15;
// console.log(b);


// {
    
//     console.log(b);
//     var b=15;  
// }
let a=10;

function sayHi() {
    console.log(name);
    // console.log(age);//let lexical error 
    //  let age =56;
    var name = "ashish";
}
sayHi();

for(let i=1;i<5;i++)
{
    if(i==3) continue;
    console.log(i);//3 is skip
}

let number=0;
console.log(number++);//0
console.log(++number);//2
console.log(number);//2

function hnoo() {
    return(()=> 0)();
}
console.log(typeof hnoo);//function


function getAge(...args){
    console.log(typeof args);//object
}
getAge(31);

const aa = {};
const b={key: 'b'};
const c = {key: 'c'};

aa[b] = 123;
aa[c] = 456;

console.log(aa[b]);