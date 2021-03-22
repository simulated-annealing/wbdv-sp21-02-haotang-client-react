import React, { useState } from 'react'

export const HeadingWidget = ({widget, editing}) => {

    const [cached, setCached] = useState(widget)

    return (
        <>
        {
        editing && <>
        <input className="form-control" value={cached.text} onChange={e =>
            setCached({
                ...cached,
                text: e.target.value
            })}/>
        <select className="form-control" value={cached.size} onChange={e =>
            setCached({
                ...cached,
                size: e.target.value
            })}>
            <option value={1}>Heading 1</option>
            <option value={2}>Heading 2</option>
            <option value={3}>Heading 3</option>
            <option value={4}>Heading 4</option>
            <option value={5}>Heading 5</option>
            <option value={6}>Heading 6</option>
        </select>

        </>
        }
        {
        !editing && <>
        {widget.size === 1 && <h1>{cached.text}</h1>}
        {widget.size === 2 && <h2>{cached.text}</h2>}
        {widget.size === 3 && <h3>{cached.text}</h3>}
        {widget.size === 4 && <h4>{cached.text}</h4>}
        {widget.size === 5 && <h5>{cached.text}</h5>}
        {widget.size === 6 && <h6>{cached.text}</h6>}
        </>
        }
        </>
    )
} 