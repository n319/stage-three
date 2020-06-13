import { ITable } from '../dynamic-crud/ITable.model';

export interface IEventType extends ITable {
} 

export class EventType implements IEventType {
    tableDefinition: string = 'EventType';
    id: number;

    constructor(props: EventType) {
        Object.keys(props).forEach(prop => {
            const value = props[prop];
            this[prop] = value;
        });
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
}
