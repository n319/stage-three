import { Injectable } from '@angular/core';
import { PieceService } from '../piece.service';

@Injectable({
  providedIn: 'root'
})
export class ContentViewService {

  constructor(public pieceService: PieceService) { }
}
