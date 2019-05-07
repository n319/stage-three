import { Injectable } from '@angular/core';
import { PieceService } from '../piece.service';

@Injectable({
  providedIn: 'root'
})
export class ListViewService {

  constructor(public pieceService: PieceService) { }

  public getPieceSummariesForList(){

  }
}
