import { UserDetail } from './conditional-rendering'
import { ProductList, NamesList } from './lists'
import { Counter, LoginCard, SearchBox } from './state'
import { UserDashboard, SimpleCounter, PrevStateCounter, BachingCounter, Toggle } from './hooks'
import { UserProfile, ToDoList } from './state-obj-array'
import { ShoppingCart } from './share-state'
import { Count, SearchInput, UserForm, Countering, PrevValue, RefVariable } from './useEffect-useRef'
import { StudentManagement } from '../Mini-Tasks/mini-task-phase-3'
import { AddSubCounter } from './useEffect-useRef'
import { Controlled, Uncontrolled } from './controlled-component'

function App() {
    return (
        <div>
            <StudentManagement />
            <div>
                <UserDetail name="Yum" isOnline={true} isPremium={true} isNewUser={true} role='VIP' />
                <UserDetail name="Sajal" isOnline={false} hideOffline={true} />
            </div>
            <ProductList />
            <NamesList />
            <Counter />
            <LoginCard />
            <LoginCard />
            <SimpleCounter />
            <UserDashboard isPremium={true} />
            <PrevStateCounter />
            <BachingCounter />
            <UserProfile />
            <ToDoList />
            <ShoppingCart />
            <Toggle />
            <SearchBox />
            <Count />
            <SearchInput />
            <UserForm />
            <Countering />
            <AddSubCounter />
            <Controlled/>
            <Uncontrolled/>
            <PrevValue/>
            <RefVariable/>
        </div>
    )
}

export default App;