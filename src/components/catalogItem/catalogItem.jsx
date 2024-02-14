function CatalogItem({type, quantity, size}) {
    return ( 
        <div className="container">
            <h1>{type}</h1>
            <h2>{quantity}</h2>
            <p>{size}</p>
        </div>
     );
}

export default CatalogItem;