import { Injectable } from '@angular/core';
import { KanbanLaneModel } from './models/kanbanLane.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  private kanbanLanes: KanbanLaneModel[] = [
    { id: 0, laneName: 'Todo', laneSequence: 0 },
    { id: 1, laneName: 'In Progress', laneSequence: 1 },
    { id: 2, laneName: 'Done', laneSequence: 2 }
  ];

  constructor() {}

  public getOrderOfKanbanLanes(): Observable<KanbanLaneModel[]> {
    //TODO: can use input list to filter lanes
    return of(this.kanbanLanes);
  }

  public updateKanbanLane(laneUpdate: KanbanLaneModel) {
    const index = this.kanbanLanes.findIndex(lane => lane.laneName === laneUpdate.laneName);
    this.kanbanLanes.splice(index, 1, laneUpdate);
  }
}
