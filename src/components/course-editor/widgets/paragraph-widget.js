import React, { useState } from 'react'

export const ParagraphWidget = ({
    widget, 
    updateWidget,
    deleteWidget}) => {

    const [editing, setEditing] = useState(false)
    const [cached, setCached] = useState(widget)

    return (<>
    {
        editing &&
        <>
        <i className="fas fa-check fa-2x float-right" onClick={() => {
            setEditing(false)
            updateWidget(widget.id, cached)
        }}/>
        <i className="fas fa-trash fa-2x float-right" onClick={() => {
            setEditing(false)
            deleteWidget(widget.id)
        }}/>
        <textarea value={cached.text} onChange = {e => 
            setCached({
                ...cached,
                text: e.target.value
            })}/>
        </>
    }
    {
        !editing && 
        <>
        <i className="fas fa-cog fa-2x float-right" onClick={() =>
            setEditing(true)}/>
        <p>
            {widget.text}
        </p>
        </>
    }
    </>)
} 