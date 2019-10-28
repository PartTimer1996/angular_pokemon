import { TestBed } from '@angular/core/testing';

import { PokemonsearchService } from './pokemonsearch.service';

describe('PokemonsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonsearchService = TestBed.get(PokemonsearchService);
    expect(service).toBeTruthy();
  });
});
