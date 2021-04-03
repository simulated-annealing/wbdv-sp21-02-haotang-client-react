import React, { useState } from 'react'
import ParagraphWidget from './paragraph-widget'
import HeadingWidget from './heading-widget'
import ListWidget from './list-widget'
import ImageWidget from './image-widget'


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
                mode === SET_TYPE && <div className="mb-3">
                <label id="typeLabel" htmlFor="typeSelect" className="form-label colorViolet fontBold Cursor-Pointer">
                    Select Widget Type
                </label>
                <select id="typeSelect" className="form-control Cursor-Pointer" value={cached.type} onChange={e =>
                    setCached({
                        ...cached,
                        type: e.target.value
                    })}>
                    <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                    <option value="VIDEO" disabled>Video</option>
                    <option value="IMAGE">Image</option>
                    <option value="LINK" disabled>Link</option>
                    <option value="LIST">List</option>
                    <option value="HTML" disabled>HTML</option>
                </select>
                <button id="typeConfirm" type="button" className="btn btn-outline-success float-right" onClick={e =>
                    setMode(SET_WIDGET)}>
                    Next
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
                <div className="mb-3">
                <label className="form-label colorViolet fontBold"> Selected Widget Type </label>
                <select className="form-control" value={cached.type} disabled>
                    <option>{cached.type}</option>
                </select>
                </div>
                {cached.type === "HEADING" && <HeadingWidget editing={true} cached={cached} setCached={setCached}/>}
                {cached.type === "PARAGRAPH" && <ParagraphWidget editing={true} cached={cached} setCached={setCached}/>}
                {cached.type === "LIST" && <ListWidget editing={true} cached={cached} setCached={setCached}/>}
                {cached.type === "IMAGE" && <ImageWidget editing={true} cached={cached} setCached={setCached}/>}
                <div className="mb-3">
                <button id="editConfirm" type="button" className="btn btn-outline-success float-right" onClick={e => {
                    setMode(VIEW)
                    updateWidget(widget.id, cached)}}>
                    Save
                </button>
                <button id="editCancel" type="button" className="btn btn-outline-danger float-right" onClick={e => {
                    setMode(VIEW)
                    setCached(widget)}}>
                    Cancel
                </button>
                </div>
                </>
            }
            {
                mode === VIEW && <>
                <i id="widgetDelete" className="far fa-trash-alt float-right Red-Icon Cursor-Pointer" onClick={() => deleteWidget(widget.id)}/>
                <i id="widgetConfig" className="fas fa-user-cog float-right Blue-Icon Cursor-Pointer" onClick={() => setMode(SET_TYPE)}/>
                {cached.type === "HEADING" && <HeadingWidget editing={false} cached={cached} setCached={setCached}/>}
                {cached.type === "PARAGRAPH" && <ParagraphWidget editing={false} cached={cached} setCached={setCached}/>}
                {cached.type === "LIST" && <ListWidget editing={false} cached={cached} setCached={setCached}/>}
                {cached.type === "IMAGE" && <ImageWidget editing={false} cached={cached} setCached={setCached}/>}
                </>
            }
        </>
    )
}

export default GeneralWidget