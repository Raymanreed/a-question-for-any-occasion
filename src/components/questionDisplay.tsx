'use client'

import { useState } from 'react';
import questions from './questions.json';

const questionGeneratorDisplay = () => {
    const [questionText, setQuestionText] = useState<string>('');
    const [questionId, setQuestionId] = useState<number>(0);
    const [questionTags, setQuestionTags] = useState(Array<string>)


    /* Old function to get question and set state, possible to be used in future*/
    // const getQuestion = (x: number) => {
    //     const {id: qId, text: qText, tags: qTags} = questions[x]
    //     return [setQuestionId(qId), setQuestionText(qText), setQuestionTags(qTags)]
    // }

    const handleClick = () => {
        const randId = Math.trunc(Math.random() * (questions.length - 1) + 1);
        console.log(randId)
        const {id: qId, text: qText, tags: qTags} = questions[randId]
        return [setQuestionId(qId), setQuestionText(qText), setQuestionTags(qTags)]
    }

    return (
        <div className="question-generator-container flex justify-center flex-col">
            <div className="question-generator-question-display p-10">
                <h2 className="question-text-display">
                    {questionText}
                </h2>
            </div>
            <div className="question-generator-generate-button flex justify-center">
                <button
                    className="generator-button p-2 bg-button-blue rounded"
                    onClick={handleClick}>
                        Generate a question
                </button>
            </div>
        </div>
    )
};

export const QuestionDisplay = questionGeneratorDisplay