// @ts-ignore
export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1&category=17&difficulty=easy',
    timeout: 10000
})