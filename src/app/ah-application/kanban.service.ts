import { Injectable } from '@angular/core';
import { BoardModel } from './models/board.model';

import { ICard, CardModel } from './models/card.model'
import { PostModel } from '../api/models/post.model';
import { PostService } from '../api/post.service';
import { ProjectService } from '../api/project.service';
import { PieceService } from '../api/piece.service';
import { IList, ListModel } from './models/list.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  lists: IList[];

  constructor(private pieceSvc: PieceService, private projectSvc: ProjectService) {}

  

  public saveBoardModel(board: BoardModel) {
    sessionStorage.setItem(`board`, JSON.stringify(board));
  }

  public getBoardModel(): BoardModel {
    const item = sessionStorage.getItem(`board`);
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
