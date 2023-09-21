import { clickOptions } from "@testing-library/user-event/dist/click";
import { Ialternative } from "../../../types/alternative";
import { Iquestion } from "../../../types/question";

interface Props {
    question: Iquestion,
    setQuestion: React.Dispatch<React.SetStateAction<Iquestion>>,
    type: string
    
}

export default function AlternativeList({question, setQuestion, type}: Props) {
    function selectAlternative(e: any, id: string) {
        e.preventDefault();
        console.log(e.target)
        e.target.removeAttribute('readonly');
        console.log(e.target)
    }
    
    return (
        <ul>
            {question.alternatives.map((alternative, index) => (
                <li key={index}>
                    <input type={type} readOnly/>
                    <input
                        type="text" 
                        value={alternative.name} 
                        onClick={e => selectAlternative(e, alternative.id)}
                    />
                </li>
            ))}
        </ul>
    )
}