import { Pipe, PipeTransform } from '@angular/core';
import { EMPTY } from 'rxjs';

@Pipe({
  name: 'nullWithDefault'
})
export class NullWithDefaultPipe implements PipeTransform {

  transform(value: any, defaultText: string = 'None'): any {
    if (this.transform( value == 'undefined' || value == null)) {
      return defaultText;
    }

    return value;
  }

}
