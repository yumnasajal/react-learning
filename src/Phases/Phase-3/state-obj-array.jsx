import { useState } from "react"

export const UserProfile = () => {
    const [data, setData] = useState({
        name: "yumna",
        age: 21,
        email: "batman@gmail.com"
    })
    const handle_change = (e) => {
        e.preventDefault();

        const newName = e.currentTarget.elements.name.value;
        setData(prev => ({ ...prev, name: newName }));
    }
    return (
        <div>
            <h2>User details</h2>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
            <form action="" onSubmit={handle_change}>
                <input type="text" placeholder="Change Name" name="name" />
                <button type="submit">Change</button>
            </form>
        </div>
    )
}

export const ToDoList = () => {
    const [items, setItem] = useState([
        { id: 1, text: 'Learn React' , done: false},
        { id: 2, text: 'Build an app' , done:false}
    ])
    console.log('Items: ' , items)
    const handle_item = (e) => {
        e.preventDefault();
        const newName = e.currentTarget.elements.item_name.value;
        setItem([
            ...items, {
                id: Math.max(...items.map(item => item.id), 0) +1, 
                text: newName,
                done: false
            }
        ]);
        e.currentTarget.elements.item_name.value = "";
    }
    const remove_item = (id) => {
        setItem(items.filter(item => item.id !== id ))
    }
    const item_done = (id) => {
        setItem(items.map(item => {
            return item.id === id ? {...item, done: !item.done} : item
        }))
    }
    return (
        <div>
            <h3>To Do List</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Done</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.text}</td>
                                    <td><button onClick={() => item_done(item.id)}>{item.done ? 'Undone' : 'Done'}</button></td>
                                    <td><button onClick={() => remove_item(item.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <form onSubmit={handle_item}>
                <h3>Add an Item</h3>
                <input type="text" placeholder="Item Name" name="item_name"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}