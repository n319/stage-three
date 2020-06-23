import { ModelData } from './data.model';
import { ITable } from '../dynamic-crud/ITable.model';
import { Piece } from './piece.model';

export interface IViewTypeAttribute extends ITable {
    name: string;
    viewTypeId: number;
    order: number;
    projectId: number;
    applicationUserId: number;
    createdOn: Date;
    completedOn?: Date;
}

export class ViewTypeAttribute implements IViewTypeAttribute {
    tableDefinition = 'ViewTypeAttribute';
    static tableName = 'ViewTypeAttribute';

    name: string;
    viewTypeId: number;
    order: number;
    projectId: number;
    applicationUserId: number;
    createdOn: Date;
    completedOn?: Date;
    id: number;
    boardPieces: Piece[];

    constructor(props: ViewTypeAttribute) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });
    }
}
