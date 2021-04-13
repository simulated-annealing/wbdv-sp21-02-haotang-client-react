const QUIZ_URL="https://wbdv-sp21-02-haotang-server-nd.herokuapp.com/api/quizzes"

export const findQuestionsForQuiz = quizId => 
    fetch(`${QUIZ_URL}/${quizId}/questions`).then(res => 
        res.json())

export default {
    findQuestionsForQuiz
}