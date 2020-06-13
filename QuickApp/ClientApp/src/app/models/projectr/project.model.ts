import { ModelData } from './data.model';
import { ITable } from '../dynamic-crud/ITable.model';

export interface IProject extends ITable {

    name: string;
    viewTypeId: number;
    applicationUserId: number;
    createdOn: Date;
    completedOn?: Date;
}

export class Project implements IProject {
    name: string;
    viewTypeId: number;
    applicationUserId: number;
    createdOn: Date;
    completedOn?: Date;
    tableDefinition: string = 'Project';
    id: number;

    constructor(props: Project) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
}
