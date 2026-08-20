import { useState } from "react";

export function LiftStateUp() {
    const [name, setName] = useState("");
    return (
        <>
            <Input setName={setName} />
            <Display name={name} />
        </>
    );
}
function Input({ setName }) {
    return (
        <input onChange={(e) => setName(e.target.value)}/>
    );
}
function Display({ name }) {
    return <h2>{name}</h2>;
}

export const ConfirmDialogue = () => {
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const handle_click = () => {
        setOpen(true);
    }
    const handle_confirm = () => {
        setMsg('You have confirmed')
        setOpen(false)
    }
    const handle_cancel = () => {
        setMsg('You have cancelled')
        setOpen(false)
    }
    return (
        <div>
            <button onClick={handle_click}>
                Open Confirm
            </button>
            {
                open && (
                    <Modal on_confirm={handle_confirm} on_cancel={handle_cancel}>
                        <p>Are you sure you want to Confirm?</p>
                    </Modal>
                )
            }
            <p>{msg}</p>
        </div>
    )
}

const Modal = ({on_confirm, on_cancel, children}) => {
    return (
        <div>
            {children}
            <button onClick={on_confirm}>Confirm</button>
            <button onClick={on_cancel}>Cancel</button>
        </div>
    )
}