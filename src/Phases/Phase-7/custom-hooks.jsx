import { useState } from "react"

export const useToggle = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const toggle = () => {
        setValue(!value);
    }
    return [value, toggle]
}

export const ShowText = () => {
    const [show, toggle] = useToggle(true);
    return (
        <div>
            <button onClick={toggle}>{show? 'Hide': 'Show'}</button>
            {show && (
                <p>
                    This is a paragraph of text
                </p>
            )}
        </div>
    )
}