import { Component, OnInit, Input } from '@angular/core';
import { PanelViewService } from '@app/ah-application/panel-view.service';
import { PieceModel } from '@app/api/models/piece.model';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-pin-note',
  templateUrl: './pin-note.component.html',
  styleUrls: ['./pin-note.component.scss']
})
export class PinNoteComponent implements OnInit {

  @Input() pieceId: string;
  dataModel: Observable<PieceModel>;
  pinNoteFormGroup: FormGroup;


  constructor(private data: PanelViewService, 
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) { }

  ngOnInit() {

    


    this.data.pieceService.getPiecesListById(this.route.snapshot.queryParams['currentProjectId']).subscribe(
      list => {
        this.dataModel = of(list.filter(p => p.id === this.pieceId)[0]);

        this.pinNoteFormGroup = this.fb.group({PieceModel, 'formControls': this.fb.array(
          [this.fb.control('')])});
      }
    );
  }

  get pinNoteFormControls(): FormArray {
    return this.pinNoteFormGroup.get('formControls') as FormArray;
  }
}
