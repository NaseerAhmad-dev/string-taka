import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(inputs:string):number{
    if (!inputs) {
      return 0;
    }
    const nums = inputs.split(',').map((num) => parseInt(num, 10));
    return nums.reduce((sum, num) => sum + num, 0);
  }
}
