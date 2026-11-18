function printHello(event){
    console.log("hello!");
    console.log(event);
}

function printPara(){
    console.log("Paragraph clicked!");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>click me</button>
            <p onMouseOver={printPara}>This is a parah</p>
        </div>
    )
}