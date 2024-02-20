import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderPipe implements PipeTransform {

    transform(items: any[], property: string, direction: string): any[] {
        if (!items || !property || !direction) {
            return items;
        }

        return items.sort((a, b) => {
            if (a[property] > b[property]) {
                return direction === 'asc' ? 1 : -1;
            } else if (a[property] < b[property]) {
                return direction === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }
}