import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import topicService from '../../services/topic-service'
import EditableItem from './editable-item'


const TopicPills = ({topics = [], 
                    createTopic, 
                    findTopicsForLesson, 
                    updateTopic, 
                    deleteTopic}) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined")
            findTopicsForLesson(lessonId)
    }, [lessonId])

    if (moduleId === "undefined" || typeof moduleId === "undefined")
        return null

    if (lessonId === "undefined" || typeof lessonId === "undefined")
        return (<h4>Select a lesson to view the topics</h4>)

    return (
        <ul className="nav nav-pills"> {
            topics.map((t, idx) => 
                <li key={idx} className="nav-item wbdv-space-nav-pills">
                    <EditableItem item={t}
                        active={topicId === t._id}
                        titleActive={topicId === t._id}
                        updateItem={updateTopic}
                        deleteItem={deleteTopic}
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${t._id}`}/>
                </li>)}
            <li key={topics.length} className="nav-item wbdv-space-nav-pills">
                <i className="fas fa-plus fa-lg Topic-Plus Cursor-Pointer"
                    onClick={() => createTopic(lessonId)}/>
            </li>
        </ul>
    )
}

const stpm = state => ({
    topics: state.topicReducer.topics
})

const dtpm = dispatch => ({
    createTopic: topicId => 
        topicService.createTopic(topicId, {title:'New Topic'}).then(topic =>
            dispatch({type:'CREATE_TOPIC', topic})),
    findTopicsForLesson: lessonId =>
        topicService.findTopicsForLesson(lessonId).then(topics =>
            dispatch({type:'FIND_TOPICS_FOR_LESSON', topics})),
    updateTopic: topic =>
        topicService.updateTopic(topic._id, topic).then(status =>
            dispatch({type:'UPDATE_TOPIC', topic})),
    deleteTopic: topic =>
        topicService.deleteTopic(topic._id).then(status => 
            dispatch({type:'DELETE_TOPIC', topic}))
})

export default connect(stpm, dtpm)(TopicPills)
