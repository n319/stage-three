import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PieceContentTag } from '../../models/projectr/pieceContentTag.model';

@Component({
  selector: 'app-content-related',
  templateUrl: './content-related.component.html',
  styleUrls: ['./content-related.component.scss']
})
export class ContentRelatedComponent implements OnInit {

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
    this.filter.contentTagId = 1; //related tags
  }

  ngOnInit() {

  }

  setStep(index: number) {
    this.step = index;
    
  }

  onClickContentTagToggleEdit(event) {
    this.edit = !this.edit;
  }

  AddContentTag($event): void {
    debugger;
    if (this.step == 0) {
      event.stopPropagation();
    }

    const newTag = {
      name: "New Tag",
      pieceId: this.pieceId,
      projectId: this.projectId,
      contentTagId: 1,
      contentId: 0,
      id: 0
    }
    let test = Object.create(newTag);

    if (this.contentTags === undefined) {
      this.contentTags = [];
    }

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
