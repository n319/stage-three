import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DynamicCrudService } from '../../services/dynamic-crud/dynamic-crud.service';
import { Piece } from '../../models/projectr/piece.model';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-piece-dialog',
  templateUrl: './piece-dialog.component.html',
  styleUrls: ['./piece-dialog.component.scss']
})
export class PieceDialogComponent implements OnInit {

  private unsub: Subject<void> = new Subject<any>();

  pcId: string;

  constructor(@Inject(MAT_DIALOG_DATA) data, private service: DynamicCrudService) {
    debugger;
    this.pcId = data.pcId;
  }

  ngOnInit() {
    const getViewData = this.service.readObs<Piece>(Piece.prototype, "pieceId=" + this.pcId);

    forkJoin([getViewData])
      .pipe(takeUntil(this.unsub))
      .subscribe(
        (res: any) => {
          debugger;
        },
        err => console.error(err)
      );
  }

}
