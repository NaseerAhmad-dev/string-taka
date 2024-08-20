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
  
    
    if (inputs.startsWith('//')) { // Check if there's a custom delimiter
      const delimiterSection = inputs.split('\n')[0].substring(2); // Get the custom delimiter
      delimiter = new RegExp(`[${delimiterSection.replace(/[\[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\n]+`);  // Create a regex that includes the custom delimiter
      numbers = inputs.split('\n').slice(1).join('\n'); // Get the rest of the input after the delimiter
    }
  
    // Split the numbers by the delimiter(s) and convert to numbers
    const numbersArray = numbers.split(delimiter).map(num => parseInt(num, 10));
  
    // Check for negative numbers
    const negativeNumbers = numbersArray.filter(num => num < 0);
    if (negativeNumbers.length) { 
      throw new Error(`negative numbers not allowed: ${negativeNumbers}`);
    }
  
    // Sum the numbers in the array, ignoring NaN values
    return numbersArray.reduce((sum, current) => sum + (isNaN(current) ? 0 : current), 0);
  }
  
  
  
}
