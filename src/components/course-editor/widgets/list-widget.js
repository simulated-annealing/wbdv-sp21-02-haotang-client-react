import React, { useState } from 'react'



const ListWidget = ({
    editing,
    cached,
    setCached }) => {

    const maxCount="1024"
    const [count, setCount] = useState(cached.text.length)
    

    return (<>
    {
        editing && <div>
        <div className="form-check">
            <input className="form-check-input Cursor-Pointer" type="checkbox" id="orderd" 
                checked={cached.ordered} onChange={e => setCached({
                    ...cached,
                    ordered: e.target.checked
                })}/>
            <label className="form-check-label colorViolet fontBold Cursor-Pointer" htmlFor="orderd">
                Ordered List
            </label>
        </div>

        <textarea id="listTextEdit" rows="8" className="form-control Cursor-Pointer"
            placeholder="Edit the list here, bullets separated by line..."
            value={cached.text}
            maxLength={maxCount} onChange={e => {
                setCount(e.target.value.length)
                setCached({
                    ...cached,
                    text: e.target.value
                })}}/>
        <label className="form-label colorViolet Cursor-Pointer"
            id="listCountNote" htmlFor="listTextEdit">
            {`${count}/${maxCount} characters`}
        </label>
        </div>
    }
    {
        !editing && cached.ordered && <ol className="list-group list-widget-view Cursor-Pointer"> {
            cached.text.split("\n").map((s, i) => 
            <li className="list-group-item" key={i}>
                {`${i+1}. ${s}`}
            </li>)
        }
        </ol>
    }
    {
        !editing && !cached.ordered && <ul className="list-group list-widget-view Cursor-Pointer"> {
            cached.text.split("\n").map((s, i) => 
            <li className="list-group-item" key={i}>
                {s}
            </li>)
        }
        </ul>
    }
    </>)
}


export default ListWidget