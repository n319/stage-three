import { ModelData } from './data.model';
import { Project } from './project.model';
import { ViewTypeAttribute, IViewTypeAttribute } from './view-type-attribute.model';
import { Piece } from './piece.model';
import { ViewType } from './view-type.model';
import { PieceContentTag } from './pieceContentTag.model';



export class BoardComponentData {
    static tableName = 'Board';
    viewType: ViewType;
    viewTypeAttributes: ViewTypeAttribute[];
    project: Project;
  projectPieces: Piece[];
  pieceContentTags: PieceContentTag[];
    
    constructor(props: BoardComponentData) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });
    }
}
