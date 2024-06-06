import { TestBed } from '@angular/core/testing';

import { ToleranciaStateService } from './tolerancia-state.service';

describe('ToleranciaStateService', () => {
  let service: ToleranciaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToleranciaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
