import { Injectable } from '@angular/core';
import { PieceService } from '../api/piece.service';

@Injectable({
  providedIn: 'root'
})
export class ContentViewService {
  constructor(public pieceService: PieceService) {}
}
