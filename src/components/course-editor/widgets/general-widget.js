import React, { useState } from 'react'
import ParagraphWidget from './paragraph-widget'
import HeadingWidget from './heading-widget'


const VIEW = "VIEW"
const SET_TYPE = "SET_TYPE"
const SET_WIDGET = "SET_WIDGET"


const GeneralWidget = ({
    widget, 
    updateWidget, 
    deleteWidget}) => {

    const [cached, setCached] = useState(widget)
    const [mode, setMode] = useState(VIEW)

    return (
        <>
            {
                mode === SET_TYPE && <div className="row">
                <label id="typeLabel" htmlFor="typeSelect" className="col-3">
                    Select Widget Type
                </label>
                <select id="typeSelect" className="col-6 form-control" value={cached.type} onChange={e =>
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
                <button id="typeConfirm" type="button" className="btn btn-outline-success float-right" onClick={e =>
                    setMode(SET_WIDGET)}>
                    Confirm
                </button>
                <button id="typeCancel" type="button" className="btn btn-outline-danger float-right" onClick={e => {
                    setMode(VIEW)
                    setCached(widget)}}>
                    Cancel
                </button>
                </div>
            }
            {
                mode === SET_WIDGET && <>
                {cached.type === "HEADING" && <HeadingWidget editing={true} cached={cached} setCached={setCached}/>}
                {cached.type === "PARAGRAPH" && <ParagraphWidget editing={true} cached={cached} setCached={setCached}/>}
                <i className="fas fa-check fa-2x float-right" onClick={() => {
                    setMode(VIEW)
                    updateWidget(widget.id, cached)}}/>
                </>
            }
            {
                mode === VIEW && <>
                {cached.type === "HEADING" && <HeadingWidget editing={false} cached={cached} setCached={setCached}/>}
                {cached.type === "PARAGRAPH" && <ParagraphWidget editing={false} cached={cached} setCached={setCached}/>}
                <i id="widgetDelete" className="far fa-trash-alt fa-lg float-right Red-Icon" onClick={() => deleteWidget(widget.id)}/>
                <i id="widgetConfig" className="fas fa-user-cog fa-lg float-right Blue-Icon" onClick={() => setMode(SET_TYPE)}/>
                </>
            }
        </>
    )
}

export default GeneralWidget