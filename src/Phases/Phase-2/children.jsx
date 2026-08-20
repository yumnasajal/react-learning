import { useState } from "react"

const Modal = ({ title, children }) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center text-black">
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold">{title}</h2>
                {children} // children is the html passed from parent

            </div>
        </div>
    )
}

export const DeleteConfirmation = ({username = "Yumz"}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-white p-2 rounded-md text-black cursor-pointer hover:scale-105">Open Modal</button>
            {
                isOpen && (
                    <Modal title={'User Action'}>
                        <p>Are you want to delete {username}?</p>
                        <button>Delete Permanantly</button>
                        <button onClick={() => setIsOpen(false)} className="p-2 bg-white/70 text-black rounded-md hover:scale-105">Cancel</button>
                    </Modal>
                )
            }
        </>
    )
}