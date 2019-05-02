import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { ContextMenuViewComponent } from './node_modules/@app/project views/base-view/context-menu-view/context-menu-view.component';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent extends ContextMenuViewComponent {

}
