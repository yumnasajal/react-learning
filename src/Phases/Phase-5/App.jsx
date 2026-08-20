import { Counter, Welcome } from "./mount-update";
import { ShowCounter, Unmounting } from "./unmount";

function App() {
    return (
        <div>
            {/* <Welcome/>
            <Counter/> */}
            <Unmounting/>
            <ShowCounter/>
        </div>
    )
}

export default App;