const MODULE_URL="https://wbdv-generic-server.herokuapp.com/api/haotang"

export const createModule = (courseId, module) => 
    fetch(`${MODULE_URL}/courses/${courseId}/modules`, {
        method: 'POST',
        body: JSON.stringify(module),
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findModulesForCourse = courseId => 
    fetch(`${MODULE_URL}/courses/${courseId}/modules`).then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${MODULE_URL}/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type':'application/json'
        }
    }).then(response => response.json())

export const deleteModule = moduleId => 
    fetch(`${MODULE_URL}/modules/${moduleId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export default {
    createModule,
    findModulesForCourse,
    updateModule,
    deleteModule
}

