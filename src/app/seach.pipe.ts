import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seach'
})
export class SeachPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
