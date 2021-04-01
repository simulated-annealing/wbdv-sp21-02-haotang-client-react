import React, { useState } from 'react'

export const ParagraphWidget = ({
    editing, 
    cached,
    setCached}) => {

    const maxCount="1024"
    const [count, setCount] = useState(cached.text.length)

    return (<>
    {
        editing && <div>
        <label className="form-label colorViolet fontBold Cursor-Pointer" htmlFor="paraTextEdit"> Paragraph </label>
        <textarea id="paraTextEdit" value={cached.text} className="form-control Cursor-Pointer"
            placeholder="Edit the paragraph here..." rows="8" maxLength={maxCount} onChange = {e => {
                setCount(e.target.value.length)
                setCached({
                    ...cached,
                    text: e.target.value
                })}}/>
        <label className="form-label colorViolet Cursor-Pointer" 
            id="paraCountNote" htmlFor="paraTextEdit"> 
            {`${count}/${maxCount} characters`} 
        </label>
        </div>
    }
    { !editing && <p className="Cursor-Pointer">{cached.text}</p> }
    </>)
} 

export default ParagraphWidget