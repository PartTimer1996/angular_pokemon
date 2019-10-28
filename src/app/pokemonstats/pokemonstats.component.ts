import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

import { Observable, of } from 'rxjs';

import { PokemonService } from '../Services/pokemon.service';
import { Pokemon } from '../Models/pokemon';

@Component({
  selector: 'app-pokemonstats',
  templateUrl: './pokemonstats.component.html',
  styleUrls: ['./pokemonstats.component.scss']
})
export class PokemonstatsComponent implements OnInit {
  id: number;
  pokemon: Pokemon;
  place: string;
  placeDefinition: number;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {

  }
  ngOnInit(): void {
    this.getPokemon();
    this.getLocation();
    }
  getPokemon(): void {
      this.id = +this.route.parent.snapshot.paramMap.get('id');
      console.log(this.id);
      this.pokemonService.getPokemon(this.id).subscribe((pokemon) => this.pokemon = pokemon);
  }
  getLocation(): void {
    this.place = this.route.snapshot.url.toString();
    console.log(`"${this.place}": this is the place` );
    this.placeDefinition = this.place.indexOf('Pokemon');
    console.log(this.placeDefinition);
  }

}
