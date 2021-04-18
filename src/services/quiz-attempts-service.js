const QUIZ_URL="https://wbdv-sp21-02-haotang-server-nd.herokuapp.com/api/quizzes"

export const createAttempt = (quizId, attempt) =>
    fetch(`${QUIZ_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(attempt),
        headers: {
            'content-type': 'application/json'
        }
    }).then(resp => resp.json())

export const findAttemptsForQuiz = quizId =>
    fetch(`${QUIZ_URL}/${quizId}/attempts`).then(resp =>
        resp.json())

export default {
    createAttempt,
    findAttemptsForQuiz
}