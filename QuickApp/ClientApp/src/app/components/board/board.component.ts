import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
   
    groups: Array<any>;

    constructor(private dragulaService: DragulaService) {
            this.dragulaService.createGroup("COLUMNS", {
                moves: (el, source, handle) => handle.className === "group-handle"
            });
    }

    ngOnInit() {
        this.groups = [
            {
                name: 'Todo',
                items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
            },
            {
                name: 'In Progress',
                items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
            }
        ];
    }

    ngOnDestroy(): void {
        this.dragulaService.destroy("COLUMNS");
    }

    createGroup(): void {
        this.groups = this.groups.concat(
            {
                name: 'New Group',
                items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
            });
    }

    removeGroup(event: any): void {
        debugger;
        this.groups.find(g => g.name);
    }

    removeCard(): void {

    }
}
