import "./Product.css";
function Product({title, price, features}) {
    let styles={backgroundColor:price>30000?"red":"white"};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>price={price}</h5>
            <p>{features}</p>
        </div>
    );
}

export default Product;