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
    
    const numbersArray = inputs.split(',').map(Number); // Split the input string by the comma delimiter
    return numbersArray.reduce((sum, current) => sum + current, 0);
  }
}
