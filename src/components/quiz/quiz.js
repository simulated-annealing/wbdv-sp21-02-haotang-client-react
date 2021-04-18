import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import questionService from '../../services/questions-service'
import quizService from '../../services/quizzes-service'
import quizAttempsService from '../../services/quiz-attempts-service'
import TrueFalseQuestion from './true-false-question'
import MultipleChoiceQuestion from './multiple-choice-question'


const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [attempts, setAttempts] = useState([])
    const [title, setTitle] = useState('')
    const [score, setScore] = useState(0)
    const [graded, setGraded] = useState(false)

    const submitQuiz = () => {
        if (questions.find(q => q.answer === undefined) !== undefined) {
            alert("You need to finish all the questions before you can sumbit the quiz.")
            return
        }
        setGraded(true)
        quizAttempsService.createAttempt(quizId, questions).then(resp => {
            setScore(resp.score)
            quizAttempsService.findAttemptsForQuiz(quizId).then(atps => 
                setAttempts(atps))
        })
    }

    useEffect(() => {
        quizService.findQuizById(quizId).then(res => 
            setTitle(res.title))
        questionService.findQuestionsForQuiz(quizId).then(res => 
            setQuestions(res))
        quizAttempsService.findAttemptsForQuiz(quizId).then(res => 
            setAttempts(res))}, [quizId])
    
    
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
                <TrueFalseQuestion key={idx} q={q} questions={questions} setQuestions={setQuestions}/> : 
                <MultipleChoiceQuestion key={idx} q={q} questions={questions} setQuestions={setQuestions}/>
            }
            <br/>
            </>)
        })
    }
    <label>Your score: {score}</label>
    <br/>
    <button className="btn btn-success" disabled={graded}
        onClick={submitQuiz}>
        Submit Quiz
    </button>
    <br/>
    <br/>
    <br/>
    <h4>Attempts History</h4>
    <ul className="list-group">
        {
            attempts.map((atp, idx) => 
                <li key={idx} className="list-group-item">
                    Attempt {idx}, Score {atp.score}
                </li>)
        }
    </ul>
    </div>)
}

export default Quiz