 
 const MyFile = (props) =>{
    alert("inside component");
    const comp = () =>{
       alert( "component button pressed");
    }
   return(
        <button  onClick={comp}>Component button</button>
   );

 }
 export default MyFile;