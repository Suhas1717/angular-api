export interface IQuestionRequestPayload{
    qId:number;
    question: string,
    questionCategory: string,
    createdBy:string;
    createdOn:any;  
  }
  
export  interface IQuestionResponsePayload{
    qId: number,
    question: string,
    questionCategory: string,
    createdBy:string;
    createdOn:string;
  }