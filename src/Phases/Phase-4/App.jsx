import { Parent } from "./parent-child";
import { ConfirmDialogue, LiftStateUp } from "./lifting-state-up";
import { Context, PropsDrill } from "./props-drilling";
import { ShoppingCart } from "../Mini-Tasks/mini-task-phase-4";

function App() {
    return (
        <div>
            <ShoppingCart/>
            <Parent />

            <div>
                <h2>Here is lift state up code</h2>
                <LiftStateUp />
            </div>

            <PropsDrill />
            <Context />
            <ConfirmDialogue/>
        </div>
    );
}

export default App;