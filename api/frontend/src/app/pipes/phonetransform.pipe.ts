import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonetransform'
})
export class PhonetransformPipe implements PipeTransform {
  transform(value: string): any {
    if (value) {
      if (value.length === 3) {
        return value.concat(' ');
      }
      if (value.length >= 4 && value.length <= 6) {
        return value;
      }

      if (value.length >= 6 && value.length <= 7) {
        return value + '-';
      }

      if (value.length > 7) {
        return value;
      }
    }
  }
}
