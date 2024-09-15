import { TestBed } from '@angular/core/testing';

import { MathEquationProviderService } from './math-equation-provider.service';

describe('MathEquationProviderService', () => {
  let service: MathEquationProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathEquationProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
