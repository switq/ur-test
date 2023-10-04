import { Iquestion } from "../types/question";

export function findQuestionAlternativeIndex(alternativeId: string, questionId: string, questions: Iquestion[]) {
    const questionIndex = questions.findIndex(question => question.id === questionId);
    const alternativeIndex = questions[questionIndex].alternatives.findIndex((alternative) => alternative.id === alternativeId);

    return { alternativeIndex: alternativeIndex, questionIndex: questionIndex }
}

export function findQuestion(questionId: string, questions: Iquestion[]): number {
    const questionIndex = questions.findIndex(question => question.id === questionId);

    return questionIndex;
}