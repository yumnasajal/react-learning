import { CounterClass, CounterParent } from "./class-components";
import { Counter, Welcome } from "./mount-update";
import { ShowCounter, Unmounting } from "./unmount";

function App() {
    return (
        <div>
            <Welcome/>
            <Counter/>
            <Unmounting/>
            <ShowCounter/>
            <h2 className="text-lg">Counter Parent</h2>
            <CounterParent/>
        </div>
    )
}

export default App;