import React from "react";
import { Ialternative } from "../../types/alternative";

interface props {
    alternativa: Ialternative,
    setAlternativa: React.Dispatch<React.SetStateAction<Ialternative>>
}

export default function Alternative({alternativa, setAlternativa}: props) {
    return (
        <div>
            <input 
                type="radio"
                readOnly
            />
            <input 
                type="text" 
                value={alternativa.name}
                onChange={e => setAlternativa(prevAlternative => {
                    return {
                        ...prevAlternative,
                        name: e.target.value
                    }
                })}
            />
        </div>
    )
}