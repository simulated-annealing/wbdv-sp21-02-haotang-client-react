const initState = {
    lessons: []
}

const lessonReducer = (state=initState, action) => {
    switch(action.type) {
        case 'CREATE_LESSON': 
            return {
                ...state,
                lessons:[
                    ...state.lessons,
                    action.lesson
                ]
            } 
        case 'FIND_LESSONS_FOR_MODULE':
            return {
                ...state,
                lessons: action.lessons
            }
        case 'UPDATE_LESSON':
            return {
                ...state,
                lessons: state.lessons.map(l =>
                    l._id === action.lesson._id ? action.lesson : l)
            }
        case 'DELETE_LESSON':
            return {
                ...state,
                lessons: state.lessons.filter(l => l._id !== action.lesson._id)
            }
        default:
            return state
    }
}

export default lessonReducer