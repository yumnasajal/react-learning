// props 

export const Product = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>Price: ${props.price}</p>
            <p>In stock: {props.in_stock ? "Yes" : "No"}</p>
            <p>Categories: {props.categories.join(', ')}</p>
        </div>
    )
}

// for desturcturing 

export const CarProducts = ({ title, price, in_stock = false, categories }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>In stock: {in_stock ? "Yes" : "No"}</p>
            <p>Categories: {categories.join(', ')}</p>
        </div>
    )
}

// can also be done as
export const Products = (props) => {
    const { title, price, in_stock, categories } = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>In stock: {in_stock ? "Yes" : "No"}</p>
            <p>Categories: {categories.join(', ')}</p>
        </div>
    )
}

const UserInfo = ({ name, age, city, email }) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export const UserCard = ({id, ...props}) => {
    const {name, age, city, email} = props;
    return (
        <div>
            <h2>User {id} Details</h2>
            <UserInfo {...props} />
        </div>
    )
}

export const CardWrapper = ({title, children}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">Nested content goes here
                {children}
            </div>
        </div>
    )
}

const Badge = ({text, color}) => {
    return(
        <button className={color}>{text}</button>
    )
}

export const Badges = () => {
    return(
        <>
            <Badge text="Success" color="text-white bg-green-500 p-2 hover:scale-105"/>
            <Badge text="Danger" color="text-white bg-red-500 p-2 hover:scale-105"/>
        </>
    )
}