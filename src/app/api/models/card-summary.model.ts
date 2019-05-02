export interface ICardSummary {
  id: string;
  header: string;
  summary: string;
}


export class CardSummaryModel implements ICardSummary {

  constructor(public id: string, public header: string, public summary: string) {
  }






}
