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

    pieces: Piece[] = [];
    lanes: ViewTypeAttribute[] = [];
    subs = new Subscription();

    constructor(private dragulaService: DragulaService, private data: DynamicCrudService) {
        
        this.dragulaService.createGroup("COLUMNS", {
            moves: (el, source, handle) => handle.className === "group-handle"
        });
        
        this.dragulaService.createGroup("ITEMS", {

        });

        this.subs.add(this.dragulaService.dropModel("ITEMS")
            .subscribe(({ source, target, item}) => {
                debugger;//MOVE ITEM from source to target in piece's data
            })
        );
    }


    /**
      * First we create an observable for each data type we are interested in.
      * Then we use the forkJoin to subscribe and wait for all observables to complete before continuining.
      * Once we get a result, we spread the results into our component's local properties.
      * This gives us more flexiblity for waiting for all results to complete before continuining (similar to async-await).
      */
    read() {
        //const pieceObs = this.data.readObs<Piece>(Piece);
        //const viewTypeAttrObs = this.data.readObs<ViewTypeAttribute>(ViewTypeAttribute.prototype);
        const getViewData = this.data.readObs<BoardComponentData>(BoardComponentData.prototype, "projectId=1");
        //forkJoin([pieceObs, viewTypeAttrObs])
        //    .pipe(takeUntil(this.unsub))
        //    .subscribe(
        //        (res: any) => {
        //            this.pieces = res[0];
        //            this.lanes = res[1];
        //            debugger;
        //        },
        //        err => console.error(err)
        //    );

        forkJoin([getViewData])
            .pipe(takeUntil(this.unsub))
            .subscribe(
                (res: any) => {
                    this.lanes = [];
                    for (let item of res[0]) {
                        for (let lane of item.viewTypeAttributes) {
                            this.lanes.push(lane);
                        }

                        for (let pc of item.projectPieces) {
                            this.pieces.push(pc);
                        }
                    }
                    this.lanes.sort((a, b) => a.order - b.order);

                    debugger;
                },
                err => console.error(err)
            );
    }

    update() {

        this.pieces.forEach(p => this.data.updateObs<Piece>(Piece, p));

        
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



    }

    removeGroup(event: any): void {
        debugger;
      
    }

    removeCard(): void {

    }
}
