
console.log("functions");
//Function
function helloworld(){//function dec & def
    console.log("hellowworld");
    //orr
   // alert("helloworld");
}

helloworld();//fun call

function add_3_numbers(num1,num2,num3=0){
    const sum=num1+num2+num3;
    console.log(sum);
    //return sum;
    return sum;
}
 //add_3_numbers(12, 13 );
 //add_3_numbers(12, 13 ,"ashish");//concatinate string and numbers
 const sum=add_3_numbers('ashish','rajput','singh' );
 console.log(sum);
 console.log( add_3_numbers('ashish','rajput','singh' ));

 //anonmyos function
{
    // function mul(num1=0,num2=0,num3=0){
    //     const m=num1+num2+num3;
    //     return m;
    // }

    const mul=function(num1=0,num2=0,num3=0){
        const m=num1+num2+num3;
        return m;
    }
   //console.log( mul(23,45,78));
}
//console.log( mul(23,45,78));

//IIFE
(function(x){
    console.log(x);
})("Ashu");

const my_name=prompt("Enter your name");
console.log(my_name);

let a=7;
let b=5;

console.log(a=(a+b)-(b=a),b);
