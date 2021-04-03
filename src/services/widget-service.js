const WIDGET_URL = "https://wbdv-sp21-02-haotang-server-jv.herokuapp.com/api"
//const WIDGET_URL = "http://localhost:8080/api"

const createWidget = (topidcId, widget) =>
    fetch(`${WIDGET_URL}/topics/${topidcId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const findWidgetsForTopic = topidcId => 
    fetch(`${WIDGET_URL}/topics/${topidcId}/widgets`).then(response => response.json())

const findAllWidgets = () => 
    fetch(`${WIDGET_URL}/widgets`).then(response => response.json())

const findWidgetById = widgetId =>
    fetch(`${WIDGET_URL}/widgets/${widgetId}`).then(response => response.json())

const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_URL}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const deleteWidget = widgetId =>
    fetch(`${WIDGET_URL}/widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())

export default {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget
}
