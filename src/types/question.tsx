import { Ialternative } from "./alternative";

export interface Iquestion {
    enunciation: string,
    type: string,
    id: string,
    alternatives: Ialternative[],
    text: string | null,
}