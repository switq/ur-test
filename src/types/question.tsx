import { Ialternative } from "./alternative";

export interface Iquestion {
    statement: string,
    type: string,
    alternatives: Ialternative[],
    // id: string
}