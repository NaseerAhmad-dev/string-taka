import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });
  //empty test should return 0
  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  //should return the number itself when a single
  it('should return the number itself when a single number is passed', () => {
    expect(service.add('1')).toBe(1);
  });
  //should return the number itself when a single
  it('should return sum when two numbers are passed', () => {
    expect(service.add('1,4',)).toBe(5);
  });
  
  //should return the sum of multiple numbers in a string
  it('should return the sum of multiple numbers in a string', () => {
    expect(service.add('1,1,2,4,8')).toBe(16);
  });
  



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
