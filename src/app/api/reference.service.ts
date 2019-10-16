import { Injectable } from '@angular/core';
import { KanbanLaneModel } from './models/kanbanLane.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  private kanbanLanes: KanbanLaneModel[] = [
    { laneName: 'Todo', laneSequence: 0 },
    { laneName: 'In Progress', laneSequence: 1 },
    { laneName: 'Done', laneSequence: 2 }
  ];

  constructor() {}

  public getOrderOfKanbanLanes(): Observable<KanbanLaneModel[]> {
    //TODO: can use input list to filter lanes
    return of(this.kanbanLanes);
  }

  public updateKanbanLane(laneUpdate: KanbanLaneModel) {
    debugger;
    const index = this.kanbanLanes.findIndex(lane => lane.laneName === laneUpdate.laneName);
    this.kanbanLanes.splice(index, 1, laneUpdate);
  }
}
