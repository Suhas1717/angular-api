import { Pipe, PipeTransform } from '@angular/core';
import { IQuestionRequestPayload, IQuestionResponsePayload } from '../interfaces/question.interface';

@Pipe({
  name: 'questionFilter'
})
export class QuestionFilterPipe implements PipeTransform {
  searchValue:string ='';
  
  transform(questionI:IQuestionResponsePayload[], searchValue:string): IQuestionResponsePayload[] {
    if(!questionI || !searchValue){
      return questionI;
    }
    return questionI.filter(questionI =>{
      questionI.question.toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase())
    })
  }

}
