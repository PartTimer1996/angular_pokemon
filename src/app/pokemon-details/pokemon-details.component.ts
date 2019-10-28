import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

import { Observable, of } from 'rxjs';

import { PokemonService } from '../Services/pokemon.service';
import { Pokemon } from '../Models/pokemon';



@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  id: number;
  pokemon: Pokemon;
  place: string;
  placeDefinition: number;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private location: Location) {
  }
  ngOnInit(): void {
  this.getPokemon();
  this.getLocation();
  }
  getPokemon(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(this.id).subscribe((pokemon) => this.pokemon = pokemon);
  }
  getLocation(): void {
    this.place = this.route.snapshot.url.toString();
    console.log(`${this.place} this is the place` );
    this.placeDefinition = this.place.indexOf('Pokemon');
    console.log(this.placeDefinition);
  }

  updatePokemon(): void {
    this.pokemonService.updatePokemon(this.pokemon)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
