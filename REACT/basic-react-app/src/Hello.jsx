
function Hello({Username,TextColor}){
    let styles = {color:TextColor};
    return(
        <h1 style={styles}>Hello,{Username}</h1>
    );
}

export default Hello;