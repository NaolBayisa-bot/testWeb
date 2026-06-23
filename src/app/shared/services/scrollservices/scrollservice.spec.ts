import { TestBed } from '@angular/core/testing';

import { Scrollservice } from './scrollservice';

describe('Scrollservice', () => {
  let service: Scrollservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scrollservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
