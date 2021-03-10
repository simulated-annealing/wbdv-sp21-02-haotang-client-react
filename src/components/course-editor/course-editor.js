import React, { useEffect, useState } from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import moduleReducer from '../../reducers/module-reducer'
import lessonReducer from '../../reducers/lesson-reducer'
import topicReducer from '../../reducers/topic-reducer'
import ModuleList from './module-list'
import LessonTabs from './lesson-tabs'
import TopicPills from './topic-pills'
import courseService from '../../services/course-service'



const editorReducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer
})

const store = createStore(editorReducer)

const CourseEditor = ({props}) => {
    const {layout, courseId} = useParams()
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (courseId !== 'undefined' && typeof courseId !== 'undefined')
            courseService.findCourseById(courseId).then(course => 
                setTitle(course.title))
        }
    , [courseId])

    return (
    <Provider store={store}>
        <div className="container">
            <h3 className="Editor-Title">
                <Link to={`/courses/${layout}`} className="Grey Margin-Right">
                    <i className="fas fa-times"/>
                </Link>
                {title}
            </h3>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                    <TopicPills/>
                    <div>
                        Content blank
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                </div>
                <div className="col-9">
                </div>
            </div>
        </div>
    </Provider>)
}

export default CourseEditor