import { TestBed } from '@angular/core/testing';

import { DesafioTeiaService } from './desafio-teia.service';

describe('JavatechieCovid19Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesafioTeiaService = TestBed.get(DesafioTeiaService);
    expect(service).toBeTruthy();
  });
});
