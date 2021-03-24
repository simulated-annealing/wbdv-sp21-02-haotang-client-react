import React from 'react'

export const ParagraphWidget = ({
    editing, 
    cached,
    setCached}) => {

    return (<>
    {
        editing &&
        <textarea value={cached.text} onChange = {e => 
            setCached({
                ...cached,
                text: e.target.value
            })}/>
    }
    { !editing && <p>{cached.text}</p> }
    </>)
} 

export default ParagraphWidget