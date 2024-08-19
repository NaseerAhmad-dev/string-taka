import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(inputs:string):number{
    return inputs ? parseInt(inputs, 10) : 0;
  }
}
