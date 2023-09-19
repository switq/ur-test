import { Iquestion } from "./question";

export interface Itest {
    tittle: string,
    subtittle: string,
    description: string,
    randomQuestionsOrder: boolean,
    randomAlternativeOrder: boolean,
    questions: Iquestion[]

}