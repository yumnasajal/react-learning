import { Product, CarProducts, UserCard, CardWrapper } from './props'

function App() {
    return (
        <div>
            <div>
                <CarProducts
                    title="Iphone 18 Pro Max"
                    price={1299.99}
                    in_stock={true}
                    categories={["Electronics", "Mobile Phones", "New"]} />
                <Product
                    title="Gaming laptop"
                    price={1299.99}
                    in_stock={true}
                    categories={["Electronics", "Computers", "Gaming"]} />
            </div>
            <UserCard name="Yumna" age={21} city="Islamabad" email="yumna@gmail.com" id={242250} />
            <CardWrapper title="User Profile">
                <p>Yumna Sajal</p>
                <p>batman@gmail.com</p>
                <button>Click here to edit Profile</button>
            </CardWrapper>
        </div>
    )
}