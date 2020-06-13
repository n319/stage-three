import { ModelData } from './data.model';
import { ITable } from '../dynamic-crud/ITable.model';

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

    constructor(props: ViewTypeAttribute) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
}
