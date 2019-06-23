import { Pipe, PipeTransform } from '@angular/core';
import * as prettysize from 'prettysize';

@Pipe({
  name: 'sizeFormat'
})
export class SizeFormatPipe implements PipeTransform {
  private bytesInKb = 1024;
  transform(value: number): string {
    return prettysize(value * this.bytesInKb);
  }
}
