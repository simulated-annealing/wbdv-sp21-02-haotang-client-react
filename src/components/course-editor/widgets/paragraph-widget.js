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
        <select className="form-control" value={cached.type} onChange={e =>
            setCached({
                ...cached,
                type: e.target.value
            })}>
            <option value="HEADING">Heading</option>
            <option value="PARAGRAPH">Paragraph</option>
            <option value="VIDEO" disabled>Video</option>
            <option value="IMAGE" disabled>Image</option>
            <option value="LINK" disabled>Link</option>
            <option value="LIST" disabled>List</option>
            <option value="HTML" disabled>HTML</option>
        </select>
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