console.log("Function");

// const generateString = function(length){
//     let randomStr="";
//     const character = ['a','b','c','d'];
//     while( randomStr.length<length)
//     {
//        let random=Math.random();
//        console.log(random,"==");
//        random=random*character.length;
//        console.log(random,"--");
//        random=Math.floor(random);
//        console.log(random);
//        const singleCharacter = character[random];
//        randomStr= randomStr+singleCharacter;
//     }
//     return  randomStr;
// }

// //console.log(generateString(5) );
// // console.log(generateString(5) );
// // console.log(generateString(5) );

// // console.log(Math.floor(2*Math.random()));
// // console.log(Math.random());
// // console.log(Math.floor(3*Math.random()));

// //Arrow function--> 3types

// //0 parameters
// const helloWorld = () =>{
//     console.log("helloWorls");
// }
// helloWorld();

// //1 parameters
// const printSquare = (num) =>{
//     const approach1 = num + num;
//     const approach2 = num ** 2;
//     const approach13 = Math.pow(num, 2);
//     console.log(approach1, approach2, approach13)
// }
// printSquare(5);

// //more than one parameter
// const addition = (num1,num2)=>{
//  const add=num1+num2;
//  return add;
// }
// const result=addition(12 ,12);
// console.log(result);

// // 1 instructiob remove the curle brackets

// const addition_now = (num1,num2) => console.log(num1+num2);
    
//    const result1=addition_now(13 ,12);
//    //console.log(result1);

//    const addition_no = (num1,num2) =>num1+num2;
//    const result3=addition_no(13 ,13);
//    console.log(result3);

// //call back function
// const callBack = _ => console.log("i am here");

// setTimeout(callBack, 4000);
// //====+++OR+++===

// setTimeout(_ => console.log("i am here"), 3000);

// const addIt = (a, b, c, d, ...other) =>{
//     const sum = a + b + c + d;
//     console.log(sum);
//     console.log(other);
// }

// addIt(1,2,3,4,5,6,7,8,9,0);


// const addokk = (...other) =>{
//     let sumOfOthers = 0;
//     for(let i=0;i<other.length;i++)
//     {
//         sumOfOthers= sumOfOthers + other[i];
//     }
//     console.log(sumOfOthers);
// }

// addokk(1,2,3,4,5,6,7,8,9,0);

// //returning function
// const some_fn =_ =>{
//     const child_fn = _=>{
//         console.log("hi iam ashihs");
//     }
//     //child_fn;

//     return child_fn;
// }

// const  res = some_fn();
// console.log(res);
// res();
// //===OR
// some_fn()();//direct way to call child function of the some_fn

// const addNum =(a) =>{
//     const second = (b)=>{
//         console.log(a+b);
//     }

//     return second;
// }

// const  resu = addNum(10);
// //console.log(resu);
// resu(20);
// //===OR
// addNum(5)(10);

//Assignment Ques -->1
const f1 = (a) =>{
    const f2 = (b) =>{
        const f3 = (c) =>{
          console.log(a+b+c);
        }
        return f3;
    }
    return f2;
}

// const a = f1(10);
// const b=a(10);
// b(10);


f1(1)(2)(3);

//Assignment Ques-->2

const nStr = (...string) =>{
  let idx=0;
  let PCount=0;
    for(let i=0;i<string.length;i++)
    { let count=0;

        for(let j=0;j<string[i].length;j++)
        {
            if(string[i][j]=='a' || string[i][j]=='e'|| string[i][j]=='o'|| string[i][j]=='i'||string[i][j]=='u'|| string[i][j]=='A' || string[i][j]=='E'|| string[i][j]=='O'|| string[i][j]=='I'||string[i][j]=='U'){
                count++;
            }
        }
        if(count>PCount)
        {
             PCount=count;
            idx=i;
        }
    }
    console.log(string[idx]);
}

nStr("Ash","-iskkah","-Raj","-puit");