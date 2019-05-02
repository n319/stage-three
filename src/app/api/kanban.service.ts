import { Injectable } from "@angular/core";
import { IList, ListModel } from "./models/list.model";
import { PieceService } from "./piece.service";
import { ProjectService } from "./project.service";
import { BoardModel } from "./models/board.model";


//export enum KanbanView {'Pinboard', 'Backlog', 'KanbanProject', 'Gallery' };

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  lists: IList[];

  constructor(private pieceSvc: PieceService, private projectSvc: ProjectService) {}

  

  public saveBoardModel(board: BoardModel) {
    localStorage.setItem(`board`, JSON.stringify(board));
  }

  public getBoardModel(): BoardModel {
    const item = localStorage.getItem(`board`);
    return JSON.parse(item || '{}');
  }

  public createListModel(): ListModel{
    return new ListModel();
  }

  public getListModel(): ListModel{
    return new ListModel();
  }

  
  public updateListModel(): void{
    
  }
  
  public deleteListModel(): void{

  }

  public createCardModel(): void{
    // return new CardModel();
  }

  public getCardModel(): void{
    // return new CardModel();
  }

  
  public updateCardModel(): void{
    
  }
  
  public deleteCardModel(): void{

  }

}
