import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney'
})
export class FormatMoneyPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000000) {

      const formattedRemainder = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return `$ ${formattedRemainder}`;
    } else {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }

}
