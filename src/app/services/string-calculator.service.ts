import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(inputs: string): number {
    if (!inputs) {
      return 0; // Return 0 for empty input
    }

    let delimiter = /[\n,]+/; // Default delimiters: comma and newline
    let numbers = inputs;


    //  let customDelimeter = this.getCustomDelimeter();


    if (this.isCustomDelimiter(inputs)) {  // Check if there's a custom delimiter
      const delimiterSection = this.getCustomDelimiter(inputs) // Get the custom delimiter
      delimiter = new RegExp(`[${delimiterSection.replace(/[\[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\n]+`);

      numbers = inputs.split('\n').slice(1).join('\n'); // Get the rest of the input after the delimiter
    }

    // Split the numbers by the delimiter(s) and convert to numbers
    const numbersArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    // Check for negative numbers

    const negative = this.filterNegative(numbersArray);

    if (negative.length > 0) {
      throw new Error(`negative numbers not allowed: ${negative.join(', ')}`);
    }

    if (delimiter)
      return this.addNumbers(numbersArray);
    else
      return this.multiplyNumbers(numbersArray)
  }

  addNumbers(numbersArray: number[]) {
    return numbersArray.reduce((sum, current) => sum + (isNaN(current) ? 0 : current), 0);
  }

  multiplyNumbers(numberArray: number[]): number {
    return numberArray.reduce((product, current) => product * (isNaN(current) ? 1 : current), 1);
  }


  getCustomDelimiter(inputs: string) {
    return inputs.split('\n')[0].substring(2);
  }

  private isCustomDelimiter(inputs: string) {
    return inputs.startsWith('//');
  }

  filterNegative(numberArray: number[]) {
    return numberArray.filter((number: number) => number < 0);
  }





}
