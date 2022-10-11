// console.log("itreatives")


// //for loop

// // for(let i=0;i<10;i++)
// // console.log(i);


// // let j=0;

// // while(j>10)
// // {
// //     console.log(j);
// // }

// // do{
// //     console.log(j);
// // }while(j>10)

// const arr=[1,2,3,4,5]
// // //here const create new memory locn every time becoz no need to update prev value;
// for (const element of arr) {//here "OF" will give the element of the array on the given for the iteratin.
//     //And if we will use "IN" in place of "OF" then it will give the index of the array inplace of the element of the array.

    
//     console.log(element);
// }
// for (const ele of arr.reverse()) {
    
//     console.log(ele,"---");
// }
// for (const ele in arr) {
    
//     console.log(arr[ele],"=====");//it will give the elements of the arr
//     console.log(ele,"______");//it will givethe index of arr
// }


// const obj ={
//     Key:"value",
//     Key2:"some",
//     another:"no"
// };

// console.log(obj.Key);//"." is used tto use direct key of the obj

// for (const Key in obj) {
//     console.log(Key);
//     console.log(obj[Key]);// "[]" is used to accesthe the key is in variables store in var_name -->key
// }
// console.log(typeof(key));//it will show undefined
// console.log(typeof(some));


// const id=setTimeout(()=>console.log("Fn called"),3000);

// clearTimeout(id);

(function(a) 
{
    
  return(function() 
  {
    console.log(a);//it give 21
    a = 6;
    console.log(a)//it give 6
  }
  )();
}
)(21);
console.log(typeof(a));