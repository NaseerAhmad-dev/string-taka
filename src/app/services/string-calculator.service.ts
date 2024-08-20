import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(inputs: string): number {
    if (!inputs) {
      return 0
    }
    let delimiters = /[,\n]+/; // Default delimiters: comma and newline
    if (inputs.startsWith('//')) {
      const delimiterSection = inputs.split('\n')[0]; // Get the first line for delimiters
      const customDelimiter = delimiterSection.slice(2); // Remove the "//"
      
      // Create a regex pattern for the custom delimiter
      delimiters = new RegExp(`[${customDelimiter.replace(/[\[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\n]+`);
      inputs = inputs.slice(delimiterSection.length + 1); // Remove the delimiter section from input
    }
  
    // Split the input string using the defined delimiters
    const numbers = inputs.split(delimiters).map(num => parseInt(num, 10));
  
    
    return numbers.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}
