import React, { useState } from 'react';
import "./NewBoxForm.css";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({addBox}) => {
    const initialState = {
        width: "",
        height: "",
        color: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(initialState);
    }

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <h3>ADD NEW COLOR BOX</h3>
            <div>
                <label htmlFor="width">Width: </label>
                <input 
                    id="width" 
                    name="width" 
                    type="number" 
                    min="1"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="height">Height: </label>
                <input 
                    id="height" 
                    name="height" 
                    type="number" 
                    min="1"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="color">Color: </label>
                <input 
                    id="color"
                    name="color"
                    type="text" 
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <button className="NewBoxForm-addBtn">Add</button>
            <hr></hr>
        </form>
    )
}

export default NewBoxForm;