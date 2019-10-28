import { TestBed } from '@angular/core/testing';

import { PokemondataService } from './pokemondata.service';

describe('PokemondataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemondataService = TestBed.get(PokemondataService);
    expect(service).toBeTruthy();
  });
});
