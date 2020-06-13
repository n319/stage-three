import { ModelData } from './data.model';
import { ITable } from '../dynamic-crud/ITable.model';

export interface IViewType extends ITable {
    name: string;
}

export class ViewType implements IViewType {
    name: string;
    tableDefinition: string = 'ViewType';
    id: number;

    constructor(props: ViewType) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
}
