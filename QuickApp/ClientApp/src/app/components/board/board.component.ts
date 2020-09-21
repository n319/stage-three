import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Observable, of, forkJoin, Subject, Subscription } from 'rxjs';
import { DynamicCrudService } from '../../services/dynamic-crud/dynamic-crud.service';
import { Piece } from '../../models/projectr/piece.model';
import { ViewTypeAttribute } from '../../models/projectr/view-type-attribute.model';
import { takeUntil } from 'rxjs/operators';
import { BoardComponentData } from '../../models/projectr/boardComponent.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PieceDialogComponent } from '../piece-dialog/piece-dialog.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  private unsub: Subject<void> = new Subject<any>();

  lanesAndPieces: ViewTypeAttribute[] = [];
  subs = new Subscription();

  constructor(private dragulaService: DragulaService, private data: DynamicCrudService, public dialog: MatDialog) {

    this.dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === "group-handle"
    });

    //this.dragulaService.createGroup("ITEMS", {

    //});

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

  onChangeItemName(e) {

    let newVal = e.currentTarget.value;
    let id = e.currentTarget.dataset["cardId"];
    for (let ln = 0; ln < this.lanesAndPieces.length; ln++) {

      let lane = this.lanesAndPieces[ln] as ViewTypeAttribute;

      let piece = lane.boardPieces.find(p => p.id == id);
      if (piece != undefined) {
        piece.name = newVal;
        this.data.update<Piece>(Piece.prototype, piece);
        break;
      }
    }
  }

  onChangeLane(e) {
    event.stopPropagation();
    
    let newVal = e.currentTarget.value;
    let id = e.currentTarget.dataset["laneId"];

    for (let ln = 0; ln < this.lanesAndPieces.length; ln++) {

      let lane = this.lanesAndPieces[ln] as ViewTypeAttribute;
      if (lane.id == id) {
        lane.name = newVal;
        this.data.update<ViewTypeAttribute>(ViewTypeAttribute.prototype, lane);
      }
    }
  }


  ngOnDestroy(): void {
    this.dragulaService.destroy("COLUMNS");

    this.dragulaService.destroy("ITEMS");
    this.subs.unsubscribe();

  }

  createGroup(): void {
    let maxOrder = this.lanesAndPieces.sort((a, b) => a.order - b.order).reverse()[0];

    let newLane = new ViewTypeAttribute(maxOrder);
    newLane.order = newLane.order + 1;

    //get this from DB write back
    let id = this.lanesAndPieces.sort((a, b) => a.id - b.id).reverse()[0];
    newLane.id = 0;

    newLane.name = "New";
    newLane.boardPieces = [];
    newLane.createdOn = new Date(Date.now());
    newLane.completedOn = new Date();

    this.data.createObs<ViewTypeAttribute>(ViewTypeAttribute.prototype, newLane).subscribe(res => {

      this.lanesAndPieces.push(res as ViewTypeAttribute);
    });
  }

  removeGroup(event: any): void {
    let removeElementIndex = this.lanesAndPieces.findIndex(pc => pc.id == event.target.parentElement.parentElement.parentElement.parentElement.dataset.laneId);
    let removeElement = this.lanesAndPieces.splice(removeElementIndex, 1)[0];
    this.data.deleteObs<ViewTypeAttribute>(ViewTypeAttribute.prototype, removeElement).subscribe(res => {
    });
  }

  removeCard(): void {

  }

  onDblclickCreateNewPiece(event: any): void {
    let laneId = event.target.closest(".groupContainer").dataset.laneId as number;

   let lane = this.lanesAndPieces.find(val => val.id == laneId);

    //let viewTypeAttr = lane.boardPieces.map(pc => Math.max(pc.viewTypeAttributeId))[0];
    let viewTypeAttr = lane.id;
    let data: Piece = {
      id: 0,
      description: '',
      projectId: lane.projectId,
      name: 'NewPiece',
      viewTypeId: lane.viewTypeId,
      viewTypeAttributeId: viewTypeAttr,
      applicationUserId: lane.applicationUserId,
      createdOn: new Date(Date.now()),
      completedOn: new Date(),
      tableDefinition: 'Piece',
      dirty: true,
      contentTags: [],
      images: [],
      imageJson: ""
    };
    let pc = new Piece(data);
    

    this.data.createObs(Piece.prototype, pc).subscribe(
      res => {
        let test = res as Piece;
        let lane = this.lanesAndPieces.find(lane => lane.id == test.viewTypeAttributeId);
        lane.boardPieces.push(test);
        
      });
  }

  onClickPieceCard(event: any): void {
    let test = 0;

    const dialogConfig = new MatDialogConfig();

    let pcId = event.target.closest("mat-card").dataset.cardId;

    dialogConfig.data = {pcId: pcId};

    let pieceDialog = this.dialog.open(PieceDialogComponent, dialogConfig);
  }

  onClickNameInput(event: any): void {
    event.stopPropagation();
  }

}
