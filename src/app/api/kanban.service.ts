import { Injectable } from '@angular/core';
import { BoardModel } from './models/board.model';
import { IList, ListModel } from './models/list.model';
import { ICard, CardModel } from './models/card.model'
import { PostModel } from './models/post.model';
import { PostService } from './post.service';
import { ProjectService } from './project.service';
import { PieceService } from './piece.service';

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
