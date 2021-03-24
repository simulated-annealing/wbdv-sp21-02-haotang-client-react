import React from 'react'

export const HeadingWidget = ({
    editing, 
    cached,
    setCached }) => {

    return (
        <> {
        editing && <>
        <div className="mb-3">
            <label className="form-label colorViolet fontBold" for="headingEdit"> Heading </label>
            <input id="headingEdit" className="form-control" placeholder="Edit heading here" value={cached.text} onChange={e =>
                setCached({
                    ...cached,
                    text: e.target.value
                })}/>
        </div>
        <div className="mb-3">
        <label className="form-label colorViolet fontBold" for="sizeSelect"> Heading Size </label>
        <select className="form-control" id="sizeSelect" value={cached.size} onChange={e =>
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
        </div>
        </>}

        {
        !editing && <>
        {cached.size === 1 && <h1 className="widgetHeading">{cached.text}</h1>}
        {cached.size === 2 && <h2 className="widgetHeading">{cached.text}</h2>}
        {cached.size === 3 && <h3 className="widgetHeading">{cached.text}</h3>}
        {cached.size === 4 && <h4 className="widgetHeading">{cached.text}</h4>}
        {cached.size === 5 && <h5 className="widgetHeading">{cached.text}</h5>}
        {cached.size === 6 && <h6 className="widgetHeading">{cached.text}</h6>}
        </>}
        </>
    )
} 

export default HeadingWidget