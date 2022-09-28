console.log("itreatives")


//for loop

// for(let i=0;i<10;i++)
// console.log(i);


// let j=0;

// while(j>10)
// {
//     console.log(j);
// }

// do{
//     console.log(j);
// }while(j>10)

// const arr=[1,2,3,4,5]
// //here const create new memory locn every time becoz no need to update prev value;
// for (const element of arr) {
    
//     console.log(element);
// }

const obj ={
    Key:"value",
    Key2:"some",
    another:"no"
};

for (const Key in obj) {
    console.log(Key);
    console.log(obj[Key]);
}