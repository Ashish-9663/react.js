
console.log("All conected");

const test=()=>{
    console.log("call now");
}
test();

const arr=[1,2,3,4,5,6,7,8];

console.log(arr[4]);
const l=arr.length;
console.log(l);
arr.push(1, 2, 3, 4, 5);
console.log(arr);

let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[7,8,9];
let arr4=[23,45];

//Method 1
console.log(arr1.concat(arr2,arr3));
console.log(arr1)
//Method 2
console.log(arr4.concat(arr1,arr2,arr3));
console.log(arr4)

let arr5=[[1,2],4,5,[6,9],7,8];
console.log(arr5);
//to make it normal without bracket use arr_name.flat(); function
console.log(arr5.flat());
// if the multi levels of arraya are stored in the array and we need to flat it in onece
//than use the .flat() function wth level of the nesting arrays.
//put infinity if we dont know the level of nesting in array
const arr6=[[1,2],[[3,4]],[5,[6,[7,8],9],10],11];
console.log(arr6);
//flat it
console.log(arr6.flat(Infinity ))

const str=['ashish', 'rajput', 'kumar', 'thakur', 'chatriya'];
let comp=str.slice(0,2);
console.log(comp);

let prt=str.splice(0,2);
console.log(prt);
console.log(str);
const iam=str.splice(1,1,"ashu");
console.log(iam);
console.log(str);

const sort=[4,3,7,5,9,1];
function sorting(array)
{
    let arr=array.sort(
        function(a,b){
            return b-a;
        }
    );
    console.log(arr);
}

function additipn(array,callback){

    console.log(array);
    callback(array);
}
additipn(sort,sorting);
sort.sort();
console.log(sort)