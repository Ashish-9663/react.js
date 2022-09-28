console.log("conditionalds")

const num=103;

// if(num>500)
// {
//     console.log("number is greater then 500")
// }
// else {
//     console.log("number is not greater than five humdred ")
// }

(num>500) ? console.log("number is greater then 500") : console.log("number is not greater than 500");//ternary

// Switch

const grade="destruction";

switch(grade){
    case "destruction":
        console.log("more than 75% marks");
        break;
    case "fisrt":
        console.log("between 75 to 65 % marks");
        break;
    case "second":
        console.log("between 65 to 55 % marks");
        break;
    
    default :
    console.log("marks are less than 40%");
    break;
}