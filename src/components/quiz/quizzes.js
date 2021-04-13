import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import quizService from '../../services/quizzes-service'

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([])
    const {courseId} = useParams()

    useEffect(() =>
        quizService.findAllQuizzes().then(res => setQuizzes(res)), [])
    
    return (
    <div className="container">
        <h4>Quiz List</h4>
        <ul className="list-group">
        {
            quizzes.map((q, idx) => 
            <li className="list-group-item" key={idx}>
                {q.title}
                <Link to={`/courses/${courseId}/quizzes/${q._id}`} className="float-right">
                    <button className="btn btn-primary">
                        Start
                    </button>
                </Link>
            </li>)
        }
        </ul>
    </div>)
}

export default Quizzes