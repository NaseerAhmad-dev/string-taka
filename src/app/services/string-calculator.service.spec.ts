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
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
