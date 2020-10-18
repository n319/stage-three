import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PieceContentTag } from '../../models/projectr/pieceContentTag.model';


@Component({
  selector: 'app-content-tag',
  templateUrl: './content-tag.component.html',
  styleUrls: ['./content-tag.component.scss']
})
export class ContentTagComponent implements OnInit, OnDestroy {

  @Input() contentTags: PieceContentTag[];
  @Output() valueChange = new EventEmitter<string>();
  @Input() pieceId: number;
  @Input() projectId: number;

  step: number = -1;
  edit: boolean = false;
  dirty: boolean = false;
  filter: PieceContentTag;

  constructor() {

    this.filter = new PieceContentTag();
    this.filter.contentTagId = 2; //label tags
  }
    
  ngOnInit() {
    
  }

  setStep(index: number) {
    this.step = index;
    debugger;
    if (this.step == 0) {
      this.edit = true;
    }
    else {
      this.edit = false;
    }

  }
                                                                                                             
  onClickContentTagToggleEdit(event) {
    debugger;
    this.edit = !this.edit;
  }

  AddContentTag($event): void {
    debugger;
    if (this.step == 1) {
      event.stopPropagation();
    }

    const newTag = {
      name: "New Tag",
      pieceId: this.pieceId,
      projectId: this.projectId,
      contentTagId: 2,
      contentId: 0,
      id: 0
    }
    let test = Object.create(newTag);

    this.contentTags.push(test);

  }

  onClickName(event) {
    event.stopPropagation();
  }

  save() {
    this.dirty = true;
    this.edit = false;
  }

  ngOnDestroy(): void {
    //this.contentTag.name
    if (this.dirty) {
      this.valueChange.emit(JSON.stringify(this.contentTags));
    }

  }


}
