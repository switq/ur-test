import { Ialternative } from "./alternative";

export interface Iquestion {
    enunciation: string,
    type: string,
    id: string,
    contentQuestion: Ialternative[],
    text: string | null,
}