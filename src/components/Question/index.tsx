import React, { useState } from "react";
import Alternative from "./Alternative";
import PlusButton from "./PlusButton";

export default function Question() {
    const [alternatives, setAlternatives] = useState([]);
    
    return (
        <div>
            <h3>Pergunta</h3>
            <div>
                <Alternative />
            </div>
            <PlusButton />
        </div>
    )
} 