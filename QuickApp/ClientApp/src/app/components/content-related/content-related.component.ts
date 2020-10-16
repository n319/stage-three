import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PieceContentTag } from '../../models/projectr/pieceContentTag.model';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormControl, FormGroup } from '@angular/forms';


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

  myFormGroup: FormGroup;
  iconCss = new FormControl();
  icons:any = [];

  constructor(library: FaIconLibrary) {


    let fasLib = (library as any).definitions.fas;

    for (let add in fasLib) {
      this.icons.push({'fas' : (fasLib[add] as any).icon});
    }

    //(library as any).definitions.fas.forEach(icon => this.icons.push({ 'fas': icon }));
    //(library as any).definitions.far.forEach(icon => this.icons.push({ 'far': icon }));
    //(library as any).definitions.fab.forEach(icon => this.icons.push({ 'fab': icon }));

  }

  onIconPickerSelect(icon: string): void {
    this.iconCss.setValue(icon);
  }


  getIconObject(icon): string[] {
    const key = Object.keys(icon)[0];
    // debugger;
    return [key, icon[key]];
  }

  getIconName(icon): string {
    const key = Object.keys(icon)[0];
    // debugger;
    return icon[key];
  }

  filter(itemList: string):[] {
    if (itemList) {
      return this.icons.filter(i => i[Object.keys(i)[0]].indexOf(itemList) > -1);
    } else {
      return this.icons;
    }
  }

  ngOnInit() {
    this.myFormGroup = new FormGroup({ iconCss: this.iconCss });
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
