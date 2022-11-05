
function ColorPalatter(props){

    return(
         <>
          <div className="colorCard" style={{ backgroundColor:props.color.code}}>
            
            <div className="colorDetails">
             <h2 >{props.color.code}</h2>
             <p style={{ color:props.color.code}}>{props.colorName.colorName}</p>         
          </div>
          </div>
          </>
    );
}
export default ColorPalatter;