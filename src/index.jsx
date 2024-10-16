import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
    const [items, setItems] = useState([]);
    const [val, setVal] = useState("");

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    const handleClick = () => {
        if (val !== "") {  // Ensure the value is not empty before adding
            setItems((prevItems) => [...prevItems, val]);
            setVal("");  // Clear the input field after adding an item
        }
    };

    const handleDelete = (i) => {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => index !== i);
        });
    };

    return (
        <div>
            <h2>To Do List</h2>
            <div>
                <input onChange={handleChange} value={val} type="text" placeholder="Add an item" />
                <ul>
                    {items.map((todoItem, index) => (
                        <li key={index}>
                            {todoItem}
                            <button onClick={() => handleDelete(index)}>Delete</button> {/* Fix here */}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={handleClick}>Add To List</button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
