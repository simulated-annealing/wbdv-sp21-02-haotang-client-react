import React from 'react'

export const ParagraphWidget = ({
    editing, 
    cached,
    setCached}) => {

    return (<>
    {
        editing &&
        <textarea id="widgetTextarea" value={cached.text} className="form-control" rows="8" onChange = {e => 
            setCached({
                ...cached,
                text: e.target.value
            })}/>
    }
    { !editing && <p>{cached.text}</p> }
    </>)
} 

export default ParagraphWidget