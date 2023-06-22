import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    let phoneNumber = value.replace(/[^0-9]/g, '');

    // Formatieren der Nummer
    const countryCode = phoneNumber.slice(0, 2);
    const areaCode = phoneNumber.slice(2, 3);
    const mainNumberPart1 = phoneNumber.slice(3, 6);
    const mainNumberPart2 = phoneNumber.slice(6, 10);

    return `+${countryCode} (${areaCode}) ${mainNumberPart1}-${mainNumberPart2}`;
  }

}
