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
  //should handle new lines between numbers and return their sum
  it('should handle new lines between numbers and return their sum', () => {
    expect(service.add('9\n9,2')).toBe(20);
  });

  //should handle custom delimiters and return the sum of numbers
  it('should handle custom delimiters and return the sum of numbers', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  //should handle multiple custom delimiters and return the sum of numbers
  it('should handle different custom delimiters', () => {
    expect(service.add('//|\n1|3|3')).toBe(7);
    expect(service.add('//#\n2#3#4')).toBe(9);
  });

  it('should handle multiple numbers with default delimiters', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  // should throw an exception when one negative number are passed
  it('should throw an exception when negative number are passed', () => {
    expect(() => service.add('1,-2')).toThrowError('negative numbers not allowed: -2');
  });
  
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
