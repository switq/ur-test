import { Iquestion } from "../../types/question";
import { Itest } from "../../types/test";
import Question from "../Question";

interface Props {
    questions: Iquestion[],
    setTest: React.Dispatch<React.SetStateAction<Itest | undefined>>
}

export default function QuestionList({questions, setTest}: Props) {
    return (
        <ul>
            
        </ul>
    )
}