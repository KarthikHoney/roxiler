const TransactionItems=props=>{
    const {ItemsDetails} = props
    const {id,
    title,
    price,
    description,
    category,
    image,
    sold,
    dateOfSale}=ItemsDetails;
    
    return(   
        <li>
            <div>
                <h1>{id}</h1>
                <h1>{title}</h1>
                <h1>{price}</h1>
                <h1>{description}</h1>
                <h1>{category}</h1>
                <img src={image} alt="name"/>
                <h1>{sold}</h1>
                <h1>{dateOfSale}</h1>
            </div>
        </li>
       
    )
}
export default TransactionItems;