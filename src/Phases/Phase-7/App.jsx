import { ShowText } from "./custom-hooks";
import { Parent } from "./useCallback";
import { SearchProducts } from "./useMemo";
import { UseReducerCounter } from "./useReducer";

function App() {
    return (
        <div>
            <ShowText/>
            <Parent/>
            <SearchProducts/>
            <UseReducerCounter/>
        </div>
    )
}

export default App;