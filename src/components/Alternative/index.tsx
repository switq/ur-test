import React from "react";
import { Ialternative } from "../../types/alternative";

interface props {
    alternativa: Ialternative,
    atualizaAlternativa: (id: string, novoNome: string) => void
    atualizaMarcado: (id: string) => void
    deletaAlternativa: (id: string) => void
}

export default function Alternative({alternativa, atualizaAlternativa, atualizaMarcado, deletaAlternativa}: props) {
    return (
        <div>
            <input 
                type="radio"
                checked={alternativa.selected}
                onChange={e => atualizaMarcado(alternativa.id)}
            />
            <input 
                type="text" 
                value={alternativa.name}
                onChange={e => {
                    atualizaAlternativa(alternativa.id, e.target.value)
                    if ( e.target.value === '' ) deletaAlternativa(alternativa.id)
                }}
            />
        </div>
    )
}