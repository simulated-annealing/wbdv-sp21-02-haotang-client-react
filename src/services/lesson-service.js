const LESSON_URL="https://wbdv-generic-server.herokuapp.com/api/haotang"

export const createLesson = (moduleId, lesson) => 
    fetch(`${LESSON_URL}/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
        headers: {
            'content-type':'application/json'
        }
    }).then(response => response.json())

export const findLessonsForModule = moduleId => 
    fetch(`${LESSON_URL}/modules/${moduleId}/lessons`).then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSON_URL}/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type':'application/json'
        }
    }).then(response => response.json())

export const deleteLesson = lessonId => 
    fetch(`${LESSON_URL}/lessons/${lessonId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export default {
    createLesson,
    findLessonsForModule,
    updateLesson,
    deleteLesson
}