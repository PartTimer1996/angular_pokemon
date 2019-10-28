import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {Pokemon} from '../Models/pokemon';


import { PokemonsearchService } from '../Services/pokemonsearch.service';
import {PokemonService} from '../Services/pokemon.service';


@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})


export class PokemonSearchComponent implements OnInit {
  Loading = false;
  pokemons$: Observable<Pokemon[]>;
  searchTerms = new Subject<string>();
  constructor(private pokemonService: PokemonService) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      tap((_) => this.Loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonService.pokeSearch(term)),
      tap((_) => this.Loading = false)
    );
  }
}

