import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router"
import lessonService from "../../services/lesson-service"
import EditableItem from "./editable-item"


const LessonTabs = ({lessons = [],
                    createLesson,
                    findLessonsForModule,
                    updateLesson,
                    deleteLesson}) => {

    const {layout, courseId, moduleId, lessonId} = useParams()
    useEffect(() =>  {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined")
            findLessonsForModule(moduleId)
    }, [moduleId])

    if (moduleId === "undefined" || typeof moduleId === "undefined")
        return (<h4>Select a module first to view the lessons</h4>)

    return (
        <ul className="nav nav-tabs"> {
            lessons.map((l, idx) => 
                <li key={idx} className="nav-item wbdv-space-nav-items">
                    <EditableItem item={l}
                        active={lessonId === l._id}
                        titleActive={false}
                        updateItem={updateLesson}
                        deleteItem={deleteLesson}
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${l._id}`}/>
                </li>)}
            <li key={lessons.length} className="nav-item wbdv-space-nav-items">
                <i className="fas fa-plus fa-lg Lesson-Plus Cursor-Pointer"
                    onClick={()=>createLesson(moduleId)}/>
            </li>
        </ul>
    )
}

const stpm = state => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = dispatch => ({
    createLesson: moduleId => 
        lessonService.createLesson(moduleId, {title:"New Lesson"}).then(lesson =>
            dispatch({type:"CREATE_LESSON", lesson})),
    findLessonsForModule: moduleId => {
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId).then(lessons =>{
            console.log(lessons)
            dispatch({type:"FIND_LESSONS_FOR_MODULE", lessons})
        })
    },
    updateLesson: lesson => {
        console.log(lesson._id)
        lessonService.updateLesson(lesson._id, lesson).then(status =>
            dispatch({type:"UPDATE_LESSON", lesson}))
    },
    deleteLesson: lesson =>
        lessonService.deleteLesson(lesson._id).then(status => 
            dispatch({type:"DELETE_LESSON", lesson}))
})

export default connect(stpm, dtpm)(LessonTabs)
