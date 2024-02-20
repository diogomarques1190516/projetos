import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy'
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], property: string, value: any): any[] {
        if (!items || !property || !value) {
            return items;
        }

        return items.filter(item => item[property].toString().includes(value));
    }
}