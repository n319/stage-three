import { Pipe, PipeTransform } from '@angular/core';
import { PieceContentTag } from '../models/projectr/pieceContentTag.model';

@Pipe({
  name: 'contentTagFilter'
})
export class ContentTagFilterPipe implements PipeTransform {

  transform(items: PieceContentTag[], filter: PieceContentTag): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.contentTagId === filter.contentTagId);
  }

}
