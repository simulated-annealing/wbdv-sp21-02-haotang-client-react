const initState = {
    modules: []
}

const moduleReducer = (state = initState, action) => {
    switch(action.type) {
        case "CREATE_MODULE": 
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "FIND_MODULES_FOR_COURSE": 
            return {
                ...state,
                modules: action.modules
            }
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(m => 
                    m._id === action.module._id ? action.module : m)
            } 
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(m => m._id != action.module._id)
            }
        default: return state
    }
}

export default moduleReducer