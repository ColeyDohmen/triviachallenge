import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";
import Trivia from "../Models/Trivia.js";
import { api } from "./AxiosService.js";

class TriviaService {
  constructor(){
      console.log('service');
      this.getTrivia()
  }
  getTrivia(){
      api.get('').then(res => {
          console.log(res.data)
          ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
          ProxyState.next = res.data.next
      })

  }
  next (){
  api.get(ProxyState.next).then(res => {
      ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
      ProxyState.trivia = res.data.next
  })
  }
}
  

export const triviaService = new TriviaService();