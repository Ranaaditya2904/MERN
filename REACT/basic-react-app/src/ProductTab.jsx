import Product from "./Product";

function ProductTab(){
    let option = ["hitech","durable","faster"];

    return (
        <>
        <Product title="laptop" price={60000} features={option}/> 
        <Product title="Fridge" price={20000}/>
        <Product title="pen" price={10*2}/>
        </>
    );
}

export default ProductTab;