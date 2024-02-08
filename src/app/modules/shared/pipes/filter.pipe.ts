/**
 * filter : {dot_no: 111, name: "gaya"}
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any, filter: any, value: any): any {
    if (!value) return items;
    if (filter && Array.isArray(items)) {
      return (items || []).filter(item => filter.split(',').some(key => item.hasOwnProperty(key) && new RegExp(value.trim(), 'gi').test(item[key])));   
    }
  }
 /* transform(items: Array<any>, filter: { [key: string]: any }): Array<any> {
    if (Object.keys(filter).length == 0) return items;
    console.log(filter);

    let filterKeys = Object.keys(filter);

    return items.filter(item => {
      return filterKeys.every(keyName => {
        // console.log(keyName);
        return (
          new RegExp(filter[keyName], 'gi').test(item[keyName]) ||
          filter[keyName] === ''
        );
      });
    });
/*
  transform(items: Array<any>, filter: {[key: string]: any }): Array<any> {
    return items.filter(item => {
        const notMatchingField = Object.keys(filter)
                                     .find(key => item[key] !== filter[key]);

        return !notMatchingField; // true if matches all fields
    }); */

}
