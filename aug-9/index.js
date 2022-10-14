console.log("connected");

const arr=["ashu", 1234,"ASDF",false,_=>{},"string"];

// for(let i=0;i<arr.length;i++)
// {
//     console.log(typeof arr[i]);
// }

arr.forEach((ele, idx) => {
 //console.log(typeof arr[idx]);
 console.log(typeof ele);
});
//ORR

arr.forEach(e => console.log(typeof e)); 

//mainpulate and store the each element of the array

const number=[1,2,3,4,5];
const sqr_arr=[];

number.forEach((e ,index)=>{
    const sqr=e*e;
    sqr_arr[index]=sqr;
});

console.log(number);
console.log(sqr_arr);

const sqr_arr_map=number.map((e ,index)=>{
    const sqr=e*e;
    return sqr;
});

console.log(sqr_arr_map);
//OR easy
// const sqr_arr_map=number.map(e => e*e);

// console.log(sqr_arr_map);

const marks=[50, 67, 90,74, 40, 20];

const didFail = marks.some(e => {
    if(e < 40)
    {
        return true;
    }
    else
    {
        return false;
    }
});

console.log(didFail);

//ORR easy
const didFail1 = marks.some(e => e < 40);
console.log(didFail1);

// 
const didFail2 = marks.some(e => e < 40 ? true: false);
console.log(didFail2);

//filter
const didFail_list = marks.filter(e => e < 40);
console.log(didFail_list);

//ORR
const didFail_list1 = marks.filter(e => e < 40 ? true : false);
console.log(didFail_list1);

const mark =[
    {
        name:"ashihsi",
        marks:40
},{
    name:"ashu",
        marks:50
}, {
    name:"ruchika",
        marks:20
}, {
    name:"ash",
        marks:47
},{
    name:"ruchi",
        marks:65
},{
    name:"priya",
        marks:35
}
];

const pass_list = mark.filter(e => e.marks >= 40 ?true:false);
console.log(pass_list);
//find 
const fail_list = mark.find(e => e.marks < 40 ?true:false);
console.log(fail_list);

const menu = [{
    name:"Burger",
    price:150
}, {

}, {
    name:"Pizza",
    price:179
}, {
    name:"Pasts",
    price:250
}, {
    name:"chilli",
    price:560
}, {
    name:"Noodles",
    price:210
}
];

const Noodles = menu.find( (e , index) => {
    if(e.name == "Noodles"){
        return true;
        }
        else{
            return false;
        }
    }  
);
console.log(Noodles);
console.log(Noodles.price);

