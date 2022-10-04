
function MyButton({children = 'default',size,...restProps}){
    // logic for sizing, then return height & fontSize
    let height;
    let fontSize;
    let borderRadius;
    switch (size) {
        case "large":
            height ="65px"
            fontSize ="30px"  
            borderRadius ="10px"
            break;
        case "standard":
            height ="45px"
            fontSize ="16px" 
            borderRadius ="4px"
            break;
        case "small":
            height ="35px"
            fontSize ="16px"  
            borderRadius ="4px"
            break;
        case "tiny":
            height ="25px"
            fontSize ="16px"  
            borderRadius ="4px"
            break;
    
        default:
            height ="45px"
            fontSize ="16px"
            borderRadius ="4px"  
            break;
    }
    
    return(
        <button 
        style={{
            height:height,
            padding:"5px 10px",
            borderRadius:borderRadius,
            color:"white",
            backgroundColor:"#1C0C5B",
            fontSize:fontSize,
            width: '40%'
        }}
        {...restProps}
        >
       
        {/* {props.children || "default"} */}
        {children}
        </button>

        );
}
export default MyButton;