const initState = {
    widgets: []
}

const widgetReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_WIDGET': 
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case 'DELETE_WIDGET': 
            return {
                ...state,
                widgets: state.widgets.filter(w => w.id !== action.widgetId)
            }
        case 'UPDATE_WIDGET': 
            return {
                ...state,
                widgets: state.widgets.map(w => w.id === action.widget.id ? action.widget : w)
            }
        case 'FIND_WIDGETS_FOR_TOPIC': 
            return {
                ...state,
                widgets: action.widgets
            }
        default: 
            return state;
    }
}

export default widgetReducer