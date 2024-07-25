'use client'

import { useState } from 'react';
import questions from './questions.json';

const questionGeneratorDisplay = () => {
    const [questionText, setQuestionText] = useState<string>('');
    const [questionId, setQuestionId] = useState<number>(0);
    const [questionTags, setQuestionTags] = useState(Array<string>)

    const getQuestion = (x: number) => {
        const {id: qId, text: qText, tags: qTags} = questions[x]
        return [setQuestionId(qId), setQuestionText(qText), setQuestionTags(qTags)]
    }

    const handleClick = () => {
        const randId = Math.trunc(Math.random() * (questions.length - 1) + 1);
        console.log(randId)
        getQuestion(randId)
        return;
    }

    return (
        <div className="question-generator-container container">
            <div className="question-generator-question-display">
                <h2 className="question-text-display">
                    {questionText}
                </h2>
            </div>
            <div className="question-generator-generate-button">
                <button
                    className="generator-button"
                    onClick={() => handleClick()}>
                        Generate a question
                </button>
            </div>
        </div>
    )
};

export const QuestionDisplay = questionGeneratorDisplay