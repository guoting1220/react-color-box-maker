import React from "react";
import './Box.css';

const Box = ({ id, color = "grey", width = 6, height = 6, deleteBox}) => {
    const handleRemove = () => {
        deleteBox(id);
    }

    return (
        <div className="Box">
            <div 
                className="Box-div"
                style={{
                    backgroundColor: color,
                    width: `${width}em`,
                    height: `${height}em`
                }}
            >
            </div>
            <button 
                className="Box-btn"
                onClick={handleRemove}
            >
                X
            </button>
        </div>
    )
}

export default Box;