import React from 'react'

export const ParagraphWidget = ({
    editing, 
    cached,
    setCached}) => {

    return (<>
    {
        editing && <div className="mb-3">
        <label className="form-label colorViolet fontBold" for="widgetTextarea"> Paragraph </label>
        <textarea id="widgetTextarea" value={cached.text} className="form-control" rows="8" onChange = {e => 
            setCached({
                ...cached,
                text: e.target.value
            })}/>
        </div>
    }
    { !editing && <p>{cached.text}</p> }
    </>)
} 

export default ParagraphWidget