import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CourseRow = ({deleteCourse, updateCourse, course, title, owner, lastModified}) => { 

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const onDeleteClicked = course => {
        setEditing(false)
        deleteCourse(course)
    }

    const onUpdateClicked = course => {
        setEditing(false)
        course.title = newTitle
        course.lastModified = new Date().toLocaleString()
        updateCourse(course._id, course)
    }

    const onCancelClicked = () => {
        setNewTitle(title)
        setEditing(false)
    }
    
    return (
        <tr>
            <td>
                {
                    !editing && <i className="far fa-file Blue-Icon"></i>
                }
                {
                    !editing && <Link to={`/courses/table/edit/${course._id}`} className = "Margin-Left">
                        {title}
                    </Link>
                }
                {
                    editing && <input className="form-control" 
                                    value={newTitle}
                                    onChange={(event) => setNewTitle(event.target.value)}>
                    </input>
                }
            </td>
            <td>
                {
                    !editing && <Link to={`/courses/${course._id}/quizzes`}>
                        Quizzes
                    </Link>
                }
            </td>
            <td className="d-none d-md-table-cell">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td>
                {
                    !editing && <i className="fas fa-edit float-right Margin-Left Blue-Icon" onClick={()=>setEditing(true)}></i>
                }
                {
                    !editing && <i className="far fa-trash-alt float-right Margin-Left Red-Icon" onClick={()=>onDeleteClicked(course)}></i>
                }
                {
                    editing && <i className="fas fa-times fa-lg float-right Center-Icon Red-Icon" onClick={()=>onCancelClicked()}></i>
                }
                {
                    editing && <i className="fas fa-check fa-lg float-right Center-Icon Green-Icon" onClick={()=>onUpdateClicked(course)}></i>
                }
            </td>
        </tr>)
}

export default CourseRow