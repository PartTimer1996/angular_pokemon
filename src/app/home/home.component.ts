import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../Services/pokemon.service';
import { Pokemon } from '../Models/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[];
  pokemon: Pokemon;
  constructor(private pokemonService: PokemonService) { }
  ngOnInit() {
    this.getPokemon();
  }
  getPokemon(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
  // removePokemon(pokemon: Pokemon): void{
  //   this.pokemons = this.pokemons.filter(p => p !== pokemon);
  //   this.pokemonService.deletePokemon(pokemon)
  //     .subscribe();
  // }
}
