import { createContext, useContext } from "react";

export function PropsDrill() {
    const name = "Yumna";
    return <A name={name} />;
}

function A({ name }) {
    return <B name={name} />;
}

function B({ name }) {
    return <C name={name} />;
}

function C({ name }) {
    return <h2>{name}</h2>;
}


// Context

const NameContext = createContext();

export const Context = () => {
    const name = "Yumna";
    const address = {
        city: 'Islamabad',
        country: 'Pakistan'
    }

    return (
        <NameContext.Provider value={{name, address}}>
            <Child />
        </NameContext.Provider>
    );
};

const Child = () => {
    return <GrandChild />;
};

const GrandChild = () => {
    const {name, address} = useContext(NameContext);
    return (
        <div>
            <h2>Hello! {name}</h2>
            <p>Address: {address.city}, {address.country}</p>
        </div>
    )
};