console.log("AllConnected");

const arr1=[1, 2, 3, 4, 5];
const arr2=['x', 'y', 'z', 'v' ,'b'];
const arr3=[6,7 ,8,9,0];

const merge=arr1.concat(arr2,arr3);
console.log(merge);

const result=[...arr1,...arr2,...arr3];

console.log(result);

const menu=[{
    name:"burger",
    price:150
}, {
    name:"pizza",
    price:450
}, {
    name:"pasta",
    price:230
}, {
    name:"samosa",
    price:70
}, {
    name:"chlliPotato",
    price:350
}
];

// menu.sort((a,b) => {
//    if(a.price < b.price)
//    {
//     return -1;
//    }
//    else if(a.price == b.price){
    //     return 0;
//    }
//    else{
//     return 1;
//    }
// });


// menu.sort((a,b) => {
//     console.log("=====");
//     const diff=a.price - b.price;
//     return diff;
//  }
//  );
 
 menu.sort((a,b) => {
    return a.price - b.price;
   
 }
 );

console.log(menu);

//FILL

const arrFill = [1,2,3,4,5,6,7,8,9];

const review = arrFill.fill("dttad");

console.log(review);

const another_arr_fill=new Array(20);
another_arr_fill.fill("hi",5,20);
console.log(another_arr_fill);

//ORR

const arrFillDo=(new Array(20).fill("no",5,10));
console.log(arrFillDo);

//reduce

const product = [{
      name:'banabba',
      price:150

}, {
    name:'maongo',
    price:50

}, {
    name:'papaya',
    price:09

}, {
    name:'orange',
    price:15

}, {
    name:'grapes',
    price:60

}
];

//const filterde = product.filter(e => typeof e.price == "number");

const filterde = product.filter((e,idx) => {
  return typeof e.price === "number";
});

let sum=0;

filterde.forEach(e => sum = sum + e.price);

console.log(sum);

// //ORR

// //const sum = filterde.reduce((cumulative, elememt, index, original_arr) => {}, 0);
// const sum1 = filterde.reduce((cumulative, element) => {
//     return cumulative + element.price;
// }, 0);
// console.log(sum1);

// const sum2 = filterde.reduce((c,e) => c + e.price, 0);
// console.log(sum2);


 
const every=[1,2,3,4,5];

const res = every.every((e,idx) => {
    if(e < 0)
    return true;
    else
    return false;
});
console.log(res);


const str = "ahduedwqhuhayqywgbdsjkcsuihuc";

const sptd = str.split("");

const arrgoddd = sptd.reduce((c,e) => {
    if(c[e]!=undefined)
     c[e]=c[e]+1;
     else {
        c[e]=1;
     }
     return c;
},{});
console.log(arrgoddd);

const string = "the quick brown fox jump over lazy dog";

let splitit = string.split(" ");
//console.log(splitit);
let arry=[];

splitit.forEach( (e, index) => {
    //console.log(e.toUpperCase());
    arry[index] = e[0].toUpperCase() + e.substring(1)
    //console.log(arry);
});

console.log(arry.join(" "));

// const arrnoe = ["ashish","rajput"];
// console.log(arrnoe.join(" "));

//---====//
splitit = splitit.map(e => e[0].toUpperCase() + e.substring(1));
const stringMap=splitit.join(" ");
console.log(stringMap);