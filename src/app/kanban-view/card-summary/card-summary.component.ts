import { Component, OnInit, Input } from '@angular/core';
import { ContentSummaryViewComponent } from '@app/base-view/content-summary-view.component';
import { MatListItem } from '@angular/material';
import { PieceService } from '@app/api/piece.service';
import { PieceModel } from '@app/api/models/piece.model';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.scss']
})
export class CardSummaryComponent implements OnInit {
  @Input() id: string;
  pceModel$: Observable<PieceModel>;

  constructor(private pceSvc: PieceService) {}

  ngOnInit(): void {
    this.pceModel$ = this.pceSvc.getPiece(this.id).pipe(share());
  }
}
