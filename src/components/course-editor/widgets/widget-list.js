import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import widgetService from '../../../services/widget-service'
import GeneralWidget from './general-widget'


const WidgetList = ({
    widgets, 
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic}) => {
    
    const {topicId} = useParams()
    const [widget, setWidget] = useState({})
    const [editingWidget, setEditingWidget] = useState({})

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined")
            findWidgetsForTopic(topicId)}, [topicId])

    if (topicId === "undefined" || typeof topicId === "undefined")
        return (<h4>Select a topic first to view the content widgets</h4>)

    return (
        <ul className="list-group">
        {
            widgets.map((w, idx) => 
                <li className="list-group-item" key={idx}>
                    <GeneralWidget widget={w} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                </li>)
        }
        <li key={widgets.length} className="list-group-item">
            <i className="fas fa-plus fa-lg Module-Plus Cursor-Pointer" 
                onClick={()=>createWidget(topicId, {type:"HEADING", text:"New Widget", name:"New Widget", size:1})}/>
        </li>
        </ul>
    )
}

const stpm = state => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = dispatch => ({
    createWidget: (topicId, widget) =>
        widgetService.createWidget(topicId, widget).then(w =>
            dispatch({type: "CREATE_WIDGET", widget:w})),
    deleteWidget: widgetId =>
        widgetService.deleteWidget(widgetId).then(status =>
            dispatch({type: "DELETE_WIDGET", widgetId})),
    updateWidget: (widgetId, widget) =>
        widgetService.updateWidget(widgetId, widget).then(status =>
            dispatch({type: "UPDATE_WIDGET", widget})),
    findWidgetsForTopic: topicId =>
        widgetService.findWidgetsForTopic(topicId).then(widgets =>
            dispatch({type: "FIND_WIDGETS_FOR_TOPIC", widgets}))
})

export default connect(stpm, dtpm)(WidgetList)