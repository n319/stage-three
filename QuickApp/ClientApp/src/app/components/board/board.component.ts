import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Observable, of, forkJoin, Subject, Subscription } from 'rxjs';
import { DynamicCrudService } from '../../services/dynamic-crud/dynamic-crud.service';
import { Piece } from '../../models/projectr/piece.model';
import { ViewTypeAttribute } from '../../models/projectr/view-type-attribute.model';
import { takeUntil } from 'rxjs/operators';
import { BoardComponentData } from '../../models/projectr/boardComponent.model';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

    private unsub: Subject<void> = new Subject<any>();

    lanesAndPieces: ViewTypeAttribute[] = [];
    subs = new Subscription();

    constructor(private dragulaService: DragulaService, private data: DynamicCrudService) {
        
        this.dragulaService.createGroup("COLUMNS", {
            moves: (el, source, handle) => handle.className === "group-handle"
        });
        
        this.dragulaService.createGroup("ITEMS", {

        });

      //this.subs.add(this.dragulaService.dropModel("ITEMS")
      //  .subscribe(({ source, target, item }) => {
      //      })
      //  );
    }


    /**
      * First we create an observable for each data type we are interested in.
      * Then we use the forkJoin to subscribe and wait for all observables to complete before continuining.
      * Once we get a result, we spread the results into our component's local properties.
      * This gives us more flexiblity for waiting for all results to complete before continuining (similar to async-await).
      */
    read() {
        const getViewData = this.data.readObs<BoardComponentData>(BoardComponentData.prototype, "projectId=1");

        forkJoin([getViewData])
            .pipe(takeUntil(this.unsub))
            .subscribe(
                (res: any) => {
                    this.lanesAndPieces = [];
                    for (let item of res[0]) {
                        for (let lane of item.viewTypeAttributes) {
                          lane.boardPieces = item.projectPieces.filter(pc => pc.viewTypeAttributeId == lane.id);
                          this.lanesAndPieces.push(lane);
                        }
                    }
                    this.lanesAndPieces.sort((a, b) => a.order - b.order);
                },
                err => console.error(err)
            );
    }

    ngOnInit() {
        this.read();
        
    }


    ngOnDestroy(): void {
        
        this.dragulaService.destroy("COLUMNS");

        this.dragulaService.destroy("ITEMS");
        this.subs.unsubscribe();

    }

  createGroup(): void {
    debugger;
    let maxOrder = this.lanesAndPieces.sort((a, b) => a.order - b.order).reverse()[0];

    let newLane = new ViewTypeAttribute(maxOrder);
    newLane.order = newLane.order + 1;

    //get this from DB write back
    let id = this.lanesAndPieces.sort((a, b) => a.id - b.id).reverse()[0];
    newLane.id = id.id + 1;

    newLane.name = "New";
    newLane.boardPieces = [];
    newLane.createdOn = new Date(Date.now());
    newLane.completedOn = null;
    
    this.lanesAndPieces.push(newLane);


    }

    removeGroup(event: any): void {
        
      debugger;
      let removeElement = this.lanesAndPieces.findIndex(pc => pc.id == event.target.parentElement.parentElement.parentElement.dataset.laneId);
      this.lanesAndPieces.splice(removeElement ,1);
    }

    removeCard(): void {

    }
}
