import { UserDetail } from './conditional-rendering'
import { ProductList, NamesList } from './lists'

function App() {
    return (
        <div>
            <div>
                <UserDetail name="Yum" isOnline={true} isPremium={true} isNewUser={true} role='VIP' />
                <UserDetail name="Sajal" isOnline={false} hideOffline={true} />
            </div>
            <ProductList />
            <NamesList />
        </div>
    )
}