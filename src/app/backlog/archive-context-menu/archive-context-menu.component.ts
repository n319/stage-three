import { Component, OnInit, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-archive-context-menu',
  templateUrl: './archive-context-menu.component.html',
  styleUrls: ['./archive-context-menu.component.scss']
})
export class ArchiveContextMenuComponent implements OnInit {
  show = false;
  @Output() contextAction: EventEmitter<string> = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  emitCloseEvent() {
    this.contextAction.emit('DELETE');
    this.show = false;
  }

  @HostListener('document:click', ['$event'])
  closeOutClickOutside(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.show = false;
    }
  }
}
