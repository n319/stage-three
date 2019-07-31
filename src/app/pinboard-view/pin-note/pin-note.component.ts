import { Component, OnInit, Input } from '@angular/core';
import { PanelViewService } from '@app/ah-application/panel-view.service';
import { PieceModel } from '@app/api/models/piece.model';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-pin-note',
  templateUrl: './pin-note.component.html',
  styleUrls: ['./pin-note.component.scss']
})
export class PinNoteComponent implements OnInit {
  @Input() pieceId: string;
  dataModel: Observable<PieceModel>;
  pinNoteFormGroup: FormGroup;

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      }
    }
  ];

  constructor(private data: PanelViewService, private route: ActivatedRoute, private fb: FormBuilder) {}

  get pinNoteFormControls(): FormArray {
    return this.pinNoteFormGroup.get('formControls') as FormArray;
  }

  submit(model: any) {
    console.log(model);
  }

  ngOnInit() {
    this.data.pieceService.getPiecesListById(this.route.snapshot.queryParams['currentProjectId']).subscribe(list => {
      this.dataModel = of(list.filter(p => p.id === this.pieceId)[0]);

      this.pinNoteFormGroup = this.fb.group({ PieceModel, formControls: this.fb.array([this.fb.control('')]) });
    });
  }
}
