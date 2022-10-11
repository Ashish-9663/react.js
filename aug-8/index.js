console.log("connected");


//creating arrays using constructor by making object of the arrays class
const arr=new Array(1,2,3,4,5);
console.log(arr);

//creating function by the making of object of the class of function
//like
const fun=new Function("a","b",'return "a"+b');
console.log(fun(1,3));

const arr1=["sun","mon","tues","wed","thu","fri","satur"];

console.log(arr1.join("-"));
//ans-->sun-mon-tues-wed-thu-fri-satur

console.log(arr1.pop());
console.log(arr1.shift());
console.log(arr1);

const a=arr1.push("==");
console.log(arr1.unshift("--"));
console.log(arr1);
console.log(a);

console.log(arr1.reverse());
console.log(arr1.length);

arr1[7]="kko"
console.log(arr1);