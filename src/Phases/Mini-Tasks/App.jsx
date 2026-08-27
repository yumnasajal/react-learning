import { CounterClass, CounterFunction, ErrorBoundary } from "./mini-task-5";
import { StudentManagement } from "./mini-task-3";
import { Cart } from "./mini-task-6";
import { ShoppingCart } from './mini-task-4';
import { ProductProvider } from "./mini-task-7";
import { ProductsComp } from "./mini-task-2";

function App() {
    return (
        <div>
            <StudentManagement />
            <Cart>
                <ProductProvider>
                    <ProductsComp />
                    <ShoppingCart />
                </ProductProvider>
            </Cart>
            <ErrorBoundary>
                <CounterClass />
                <CounterFunction />
            </ErrorBoundary>
        </div>
    )
}

export default App;