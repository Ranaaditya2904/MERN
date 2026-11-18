function handleFormSubmit(event){
    event.preventDefault();
    console.log("form submitted");
}

export default function Form(){
    return (
        <form action="">
            <input type="text" placeholder="write something"/>
            <button onClick={handleFormSubmit}>submit</button>
            
        </form>
    )
}