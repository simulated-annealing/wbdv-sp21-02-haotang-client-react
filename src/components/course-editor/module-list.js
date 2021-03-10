import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from './editable-item'
import {useParams} from 'react-router-dom'
import moduleService from '../../services/module-service'


const ModuleList = ({modules = [], 
                    createModule, 
                    findModulesForCourse,
                    updateModule,
                    deleteModule}) => {
    
    const {layout, courseId, moduleId} = useParams(); 
    useEffect(() => { 
        if (courseId !== "undefined" && typeof courseId !== "undefined")
            findModulesForCourse(courseId)
    }, [courseId])

    return (
        <ul className="list-group"> {
            modules.map((m, idx) => 
                <li key={idx} className={`list-group-item ${moduleId === m._id?'active':''}`}>
                    <EditableItem item={m} 
                        active={moduleId === m._id}
                        titleActive={moduleId === m._id}
                        updateItem={updateModule}
                        deleteItem={deleteModule}
                        to={`/courses/${layout}/edit/${courseId}/modules/${m._id}`}/>
                </li>)}
            <li key={modules.length} className="list-group-item">
                <i className="fas fa-plus fa-lg Module-Plus Cursor-Pointer" 
                    onClick={()=>createModule(courseId)}/>
            </li>
        </ul>
    )
}

const stpm = state => ({
    modules: state.moduleReducer.modules
})

const dtpm = dispatch => ({
    createModule: courseId  => 
        moduleService.createModule(courseId, {title:"New Module"}).then(module => 
            dispatch({type:"CREATE_MODULE", module})),
    findModulesForCourse: courseId => 
        moduleService.findModulesForCourse(courseId).then(modules => 
            dispatch({type:"FIND_MODULES_FOR_COURSE", modules})),
    updateModule: module => 
        moduleService.updateModule(module._id, module).then(status =>
            dispatch({type:"UPDATE_MODULE", module})),
    deleteModule: module =>
        moduleService.deleteModule(module._id).then(status => 
            dispatch({type:"DELETE_MODULE", module}))
})

export default connect(stpm, dtpm)(ModuleList)
