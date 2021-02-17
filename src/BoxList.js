import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), color: 'pink', width: 4, height: 3},
        { id: uuid(), color: 'yellow', width: 2, height: 5}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}]);
    }

    const deleteBox = (boxId) => {        
        setBoxes(boxes => [...boxes.filter(b => b.id !== boxId)]);
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {boxes.map(({id, color, width, height}) => 
                <Box 
                    id={id}
                    color={color}
                    width={width}
                    height={height}
                    deleteBox={deleteBox} 
                />
            )}
        </div>
    )
}

export default BoxList;
