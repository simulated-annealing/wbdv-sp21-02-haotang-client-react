import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({deleteCourse, updateCourse, course, title, owner, lastModified}) => { 

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)


    const onDeleteClicked = (course) => {
        setEditing(false)
        deleteCourse(course)
    } 

    const onUpdateClicked = (course) => {
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
        <div className="Buttom-Buffer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card" >
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--UVX7ie6K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/v4y43jjfj7u5r8to8qdu.png" className="card-img-top"/>
            <div className="card-body">
                {
                    !editing && <h5 className="card-title Inline-Display">
                        <Link to={`/courses/grid/edit/${course._id}`}>
                            {course.title} 
                        </Link>
                    </h5>
                }
                {
                    !editing && <i className="far fa-trash-alt float-right Margin-Left Red-Icon" onClick={()=>onDeleteClicked(course)}></i>
                }
                {
                    !editing && <i className="fas fa-edit float-right Margin-Left Blue-Icon" onClick={() => setEditing(true)}></i>
                }
                {
                    editing && <input className="Inline-Display" value={newTitle} onChange={(event) => setNewTitle(event.target.value)}/>
                }
                {
                    editing && <i className="fas fa-check float-right Center-Icon Green-Icon" onClick={() => onUpdateClicked(course)}></i>
                }
                {
                    editing && <i className="fas fa-times float-right Center-Icon Red-Icon" onClick={() => onCancelClicked()}></i>
                }
                <p className="card-text Card-Content">This course is owned by {owner}, and last modified on {lastModified}.</p>
                <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                    Edit
                </Link>
                <Link to={`/courses/${course._id}/quizzes`} className="btn btn-primary Margin-Left">
                    Quizzes
                </Link>
            </div>
        </div>
        </div>
)}

export default CourseCard