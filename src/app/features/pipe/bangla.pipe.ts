import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bangla',
  standalone: true
})
export class BanglaPipe implements PipeTransform {

  transform(value: number): string {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const fixedValue = value;
    const numStr = fixedValue.toString();
    let banglaStr = '';
    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr.charAt(i));
      if (!isNaN(digit)) {
        banglaStr += banglaDigits[digit];
      } else {
        banglaStr += numStr.charAt(i); // If not a digit, keep as it is
      }
    }
    return banglaStr;
  }

}
