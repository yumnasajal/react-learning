export const ProductList = () => {
    const products = [
        {id: 0, name: 'Tablet', price: 499},
        {id: 1, name: 'Laptop', price: 999},
        {id: 2, name: 'Mobile Phone', price: 699},
        {id: 1, name: 'Watch', price: 299}
    ]
    const productElements = products.filter(p => p.price >= 400).map(product => {
                    return (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                    )
                })
    return (
        <div>
            <h2>Our Products:</h2>
            {productElements}
        </div>
    )
}

export const NamesList = () => {
    const names = ['Yumna', 'Yummy', 'Yum', 'Yumz'];
    const name_list = names.map((name,index) => <h4 key={index}>{name}</h4> )
    return (
        <div>{name_list}</div>
    )
}