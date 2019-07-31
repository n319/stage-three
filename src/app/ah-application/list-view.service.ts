import { Injectable } from '@angular/core';
import { PieceService } from '../api/piece.service';

@Injectable({
  providedIn: 'root'
})
export class ListViewService {
  constructor(public pieceService: PieceService) {}

  public getPieceSummariesForList(listId: string) {}
}
