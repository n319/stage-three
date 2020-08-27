import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DynamicCrudService } from '../../services/dynamic-crud/dynamic-crud.service';
import { Piece } from '../../models/projectr/piece.model';
import { forkJoin, Subject, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { PieceContentTag } from '../../models/projectr/pieceContentTag.model';


@Component({
  selector: 'app-piece-dialog',
  templateUrl: './piece-dialog.component.html',
  styleUrls: ['./piece-dialog.component.scss']
})
export class PieceDialogComponent implements OnInit, OnDestroy {

  private unsub: Subject<void> = new Subject<any>();

  pcId: string;
  piece: Piece;
  step:number = -1;

  DataForm: FormGroup = new FormGroup({});

  constructor(@Inject(MAT_DIALOG_DATA) data, private service: DynamicCrudService) {
    this.pcId = data.pcId;
  }

  ngOnInit() {
    const getViewData = this.service.readObs<Piece>(Piece.prototype, "pieceId=" + this.pcId).subscribe(
        res => {
        this.piece = res[0] as Piece;
        Object.keys(this.piece).forEach(key => {
          this.DataForm.addControl(key, new FormControl(this.piece[key]));
        });
        },
        err => console.error(err)
      );
  }

  ngOnDestroy(): void {
    //TODO save contents of piece
    this.service.updateObs<Piece>(Piece.prototype, this.piece).subscribe(
      res => {
      }
    );
  }

  AddContentTag($event): void {

    if (this.step == 0) {
      event.stopPropagation();
    }

    const newTag = {
      name: "New Tag",
      pieceId: this.piece.id,
      projectId: this.piece.projectId,
      contentTagId: 1,
      contentId: 0,
      id: 0
      }
    let test = Object.create(newTag);

    this.piece.contentTags.push(test);

    let t = "";
  }

  setStep(index: number) {
    this.step = index;
  }

  onClickContentTagToggleEdit(event) {
    debugger;
    //let tagId = event.currentTarget.dataset["tagId"];
    //let tag = this.piece.contentTags.filter(t => t.Id = tagId);
    if (event.currentTarget.dataset["EditFl"] == "0") {
      event.currentTarget.dataset["EditFl"] = "1";

    }
  }

  saveContentTag(tag) {
    const index = this.piece.contentTags.findIndex(t => t.id == tag.id);
    this.piece.contentTags.splice(index, 1, tag);
    var test = "edsfgserg";
  }

}
