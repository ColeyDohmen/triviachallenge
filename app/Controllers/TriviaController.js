import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";


//Private
function _draw() {
    console.log('controller');
  let trivia = ProxyState.trivia;
  let template = ''
  trivia.forEach(t => template += t.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="row">
  ${template}
  </div>
  <button class="btn btn-secondary" onclick="app.triviaController.next()">Next Question</button>
  `
}


//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("trivia", _draw);
    _draw()
  }

  next(){
      triviaService.next()
  }

}