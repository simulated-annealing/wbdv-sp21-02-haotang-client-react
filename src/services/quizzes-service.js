const QUIZ_URL="https://wbdv-sp21-02-haotang-server-nd.herokuapp.com/api/quizzes"

export const findQuizById = quizId =>
        fetch(`${QUIZ_URL}/${quizId}`).then(res =>
            res.json())

export const findAllQuizzes = () =>
    fetch(QUIZ_URL).then(res => 
        res.json())

export default {
    findQuizById,
    findAllQuizzes,
}