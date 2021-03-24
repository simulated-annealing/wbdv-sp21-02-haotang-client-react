import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const EditableItem = ({item, 
                        to, 
                        active, 
                        titleActive, 
                        updateItem, 
                        deleteItem}) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    useEffect(() => setCachedItem(item), [item])

    const onTitleChange = e => setCachedItem({
        ...cachedItem,
        title:e.target.value
    })

    const onSaveClick = e => {
        setEditing(false)
        updateItem(cachedItem)
    }

    const onCancelClick = e => {
        setEditing(false)
        setCachedItem(item)
    }

    const onDeleteClick = e => {
        setEditing(false)
        deleteItem(item)
    }

    return (
        <>
            {
                !editing && <>
                <Link to={to} className={`nav-link ${active?'active':''}`}>
                    <label className={`${titleActive?'Editable-Item-Title-Active':'Editable-Item-Title'} Cursor-Pointer`}>
                        {item.title}
                    </label>
                    <i className="far fa-trash-alt float-right Editable-Item-Icon Red-Icon"
                        onClick={onDeleteClick}></i>
                    <i className="far fa-edit float-right Editable-Item-Icon Blue-Icon" 
                        onClick={() => setEditing(true)}></i>
                </Link>
                </>
            }
            {
                editing && <>
                <input className="Editable-Item-Input Cursor-Pointer"
                    value={cachedItem.title} onChange={onTitleChange}/>
                <i className="fas fa-check fa-lg float-right Editable-Item-Check Green-Icon Cursor-Pointer" 
                   onClick={onSaveClick}></i>
                <i className="fas fa-times fa-lg float-right Editable-Item-Check Red-Icon Cursor-Pointer" 
                    onClick={onCancelClick}></i>
                </>
            }
        </>
    )
}

export default EditableItem