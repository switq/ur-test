import React from "react";
import { Ialternative } from "../../types/alternative";
import './alternative.css'
interface props {
    alternative: Ialternative,
}

function Alternative({alternative}: props) {
    return (
        <div className="wrapper">
            <input 
                type="radio"
                checked={alternative.selected}
            />
            <input 
                type="text" 
                value={alternative.name}
            />
        </div>
    )
}

export default Alternative;