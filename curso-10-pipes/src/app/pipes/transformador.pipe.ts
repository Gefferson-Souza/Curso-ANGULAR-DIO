import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador'
})
export class TransformadorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value.toUpperCase();
    return `${value} QUE MASSA`;
  }

}
