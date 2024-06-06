import { TestBed } from '@angular/core/testing';

import { ToleranciaService } from './tolerancia.service';

describe('ToleranciaService', () => {
  let service: ToleranciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToleranciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
