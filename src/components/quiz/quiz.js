import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import questionService from '../../services/questions-service'
import quizService from '../../services/quizzes-service'
import TrueFalseQuestion from './true-false-question'
import MultipleChoiceQuestion from './multiple-choice-question'


const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [title, setTitle] = useState('')  

    useEffect(() => {
        quizService.findQuizById(quizId).then(res => 
            setTitle(res.title))
        questionService.findQuestionsForQuiz(quizId).then(res => 
            setQuestions(res))}, [quizId])
    
    return (
    <div className="container">
    <h2> {title} </h2>
    <br/>
    {
        questions.map((q, idx) => {
            return (
            <>
            {
                q.type === 'TRUE_FALSE' ? 
                <TrueFalseQuestion key={idx} q={q}/> : 
                <MultipleChoiceQuestion key={idx} q={q}/>
            }
            <br/>
            </>)
        })
    }
    </div>)
}

export default Quiz