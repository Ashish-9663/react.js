console.log("h!!");

const ar = [];
console.log(ar);

// let bdy = document.querySelector( " h2");
//  console.log(bdy);
// const arr = Array.from(bdy);
// console.log(arr);
// bdy.style.color="red";
const collection = document.getElementById('h2')
console.log(collection);

 //let u=Array.from(collection);
 console.log(collection.style.color="red"); 
 console.log(collection.style.backgroundColor="black");
 console.log(collection.style.width="20px"); 
 console.log(collection.style.height="20px");
 console.log(collection.style.boxSizing="borderBox"); 

const cls = document.getElementsByClassName("li");
console.log(cls);

// //cls[1].innerHTML="hi";

// // for (const key of cls) {
// //    cls[key].innerHTML="hey We change it";
// // }
// //  const arr = Array.from(cls);
// //  console.log(arr);
// //  for (const iterator of arr) {
// //     arr[iterator].innerHTML="class";
// //  }
// for (const key in cls) {
    
//      cls[key].innerHTML="innnn";        
// }

// let arr = [1,2,3,4,5,6];
// console.log(arr);
// for (let iterator in arr) {

//     // arr[iterator].innerHTML="offf";
//     arr[iterator]=10;
// }
// console.log(arr);


const obj = {
    key1:"name",
    key2:"add",
    key3:"age",
    key4:"dob"
};

for (const key in obj) {
    
    // obj[key]="ashish";
    console.log(key);
        
}
console.log(obj);

let ele = [1,2,3,9,5,6];

for (let iterator of ele) {
    // ele[iterator]=10;
    console.log(iterator);
}
