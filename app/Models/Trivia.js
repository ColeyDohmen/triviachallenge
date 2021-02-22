export default class Trivia {
    constructor(data) {
        this.category = data.category
        this.difficulty = data.difficulty
        this.question = data.question
        this.incorrect_answers = data.incorrect_answers
        this.correct_answer = data.correct_answer

    }

    get Template() {

        return /*html*/`
        
        <div class="col-12 card shadow-lg p-2 value bg-info py-4">
            <h5>Category: ${this.category}</h5>
            <h5>Difficulty: ${this.difficulty}</h5>
            <h5>Question: ${this.question}</h5>
            <button class="btn btn-primary col-2 py-3" onclick="document.getElementById('answer${this.correct_answer}').removeAttribute('hidden');">Answer</button>
            <h5 hidden id='answer${this.correct_answer}'><b>Correct Answer: ${this.correct_answer}</b></h5>
        </div>
        `
    }
}
