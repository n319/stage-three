import { Pipe, PipeTransform } from '@angular/core';
import { ViewTypeAttribute } from '../models/projectr/view-type-attribute.model';
import { Piece } from '../models/projectr/piece.model';

@Pipe({ name: 'laneFilter' })
export class LaneFilterPipe implements PipeTransform {
    transform(items: Piece[], filter: ViewTypeAttribute): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        let outvar = items.filter(item => item.viewTypeAttributeId === filter.id);
        return outvar;
    }
}
