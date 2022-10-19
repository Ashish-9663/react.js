console.log("AllConnected");

// const new_key = prompt("enter the key");
// const new_value = prompt("enter the value");


// const obj = {
//     "key1": "value",
//      "first_name":"Ashish",
//      "last_name": "rajput",
//      //oR key as quotes or witout quotes
//      role: "Student",
//      exprience: undefined,
//      123:"abcd",
//      ["aaa"]:"ashishi",
//      //AVariable as key
//      [new_key]: new_value,//to take user key and value
//      key1: new_value
// };
// console.log(obj);


//obj by constructor

const object1 = new Object("ABCD", 123);
console.log(object1);

const object_add = new Object();

object_add.first_name = "Ashiihs";
object_add.last_name = "rajput";
console.log(object_add);

const key = "no";
const value="yes";
//for variable  keyno (.) is used use [] brackets
object_add[key] = value;
console.log(object_add);


//arr in object
const obj33={
    arr:[1,2,3,4,5]
}

obj33.arr.push(5);
console.log(obj33);

//function inside the object

const objFun={
    fn:_ => console.log("hello functuion")
}
objFun.fn();

const new_obj={
    key1:1,
    key2:2,
    key3:4,
    key1:33,
}
console.log(new_obj);

delete new_obj.key2;

//Object Methods
//1.> keys method

const obj_keys ={
    keys1:"value 1",
    keys2:"value 2",
    keys3:"value 3",
    keys4:"value 4"
}

console.log(obj_keys);

const keys_arr = Object.keys(obj_keys);//to get all keys of the object
console.log(keys_arr);

keys_arr.forEach(e =>{
    console.log(e, obj_keys[e]);
});

const values_arr = Object.values(obj_keys);//to get all values of the object
console.log(values_arr);

values_arr.forEach(e =>{
    console.log(e, obj_keys[e]);
});

// to make the object key changes

keys_arr.forEach(e => {
   
    const elemt= e.substring(0,1)+e[1].toUpperCase() + e.substring(2);

    obj_keys[elemt] = obj_keys[e];
    delete obj_keys[e];
});
console.log(obj_keys);

