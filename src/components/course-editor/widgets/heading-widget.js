import React, { useState } from 'react'

export const HeadingWidget = ({
    widget, 
    updateWidget,
    deleteWidget }) => {

    const [editing, setEditing] = useState(false)
    const [cached, setCached] = useState(widget)

    return (
        <> {
        editing && <>
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
        <input className="form-control" value={cached.text} onChange={e =>
            setCached({
                ...cached,
                text: e.target.value
            })}/>
        <select className="form-control" value={cached.size} onChange={e =>
            setCached({
                ...cached,
                size: parseInt(e.target.value)
            })}>
            <option value={1}>Heading 1</option>
            <option value={2}>Heading 2</option>
            <option value={3}>Heading 3</option>
            <option value={4}>Heading 4</option>
            <option value={5}>Heading 5</option>
            <option value={6}>Heading 6</option>
        </select>
        </>}

        {
        !editing && <>
        <i className="fas fa-cog fa-2x float-right" onClick={() =>
            setEditing(true)}/>
        {widget.size === 1 && <h1>{widget.text}</h1>}
        {widget.size === 2 && <h2>{widget.text}</h2>}
        {widget.size === 3 && <h3>{widget.text}</h3>}
        {widget.size === 4 && <h4>{widget.text}</h4>}
        {widget.size === 5 && <h5>{widget.text}</h5>}
        {widget.size === 6 && <h6>{widget.text}</h6>}
        </>}
        </>
    )
} 