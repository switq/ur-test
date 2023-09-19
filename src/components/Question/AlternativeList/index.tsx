import { Ialternative } from "../../../types/alternative";
import { Iquestion } from "../../../types/question";

interface Props {
    alternatives: Ialternative[],
    type: string
    
}

export default function AlternativeList({alternatives, type}: Props) {
    return (
        <ul>
            {alternatives.map((alternative, index) => (
                <li key={index}>
                    <input readOnly type={type} checked={alternative.selected}/>
                    <label htmlFor="">{alternative.name}</label>
                </li>
            ))}
        </ul>
    )
}