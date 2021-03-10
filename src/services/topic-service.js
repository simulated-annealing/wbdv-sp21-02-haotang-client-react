const TOPIC_URL='https://wbdv-generic-server.herokuapp.com/api/haotang'

export const createTopic = (lessonId, topic) =>
    fetch(`${TOPIC_URL}/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type':'application/json'
        }
    }).then(response => response.json())

export const findTopicsForLesson = lessonId => 
    fetch(`${TOPIC_URL}/lessons/${lessonId}/topics`).then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPIC_URL}/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteTopic = topicId => 
    fetch(`${TOPIC_URL}/topics/${topicId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export default {
    createTopic,
    findTopicsForLesson,
    updateTopic,
    deleteTopic
}

