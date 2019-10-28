import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../Services/pokemon.service';
import { Pokemon } from '../Models/pokemon';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {
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
