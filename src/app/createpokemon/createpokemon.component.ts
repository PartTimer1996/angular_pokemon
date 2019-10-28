import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

import { Pokemon } from '../Models/pokemon';
import { PokemonService } from '../Services/pokemon.service';

import { PokeCreate } from '../Models/pokecreate';

@Component({
  selector: 'app-createpokemon',
  templateUrl: './createpokemon.component.html',
  styleUrls: ['./createpokemon.component.scss']
})
export class CreatepokemonComponent implements OnInit {
  /** Model Driven Form Creation Variables */
  // myform: FormGroup;
  // type: FormControl;
  // name: FormControl;
  // SpDefense: FormControl;
  // Defense: FormControl;
  // HP: FormControl;
  // Speed: FormControl;
  // SpAttack: FormControl;
  success: boolean;
  pokemons: Pokemon[];
  pokemon: Pokemon;
  pokeTypes: string[] = ['Grass', 'Fire', 'Water', 'Electric', 'Fighting'];

  /** Variables required for Template Driven Form Creation */
  model: PokeCreate = new PokeCreate();
  @ViewChild('f', {static: false}) form: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
    /** Model Driven Form Creation Functions */
    // this.createFormControls();
    // this.createForm();
  }

  getPokemon(): void {
    this.pokemonService.getPokemons()
    .subscribe((pokemons) => this.pokemons = pokemons);
    }

  onSubmit(name: string, type: string[], SpDefense: number,
           Defense: number, HP: number, Speed: number, SpAttack: number, Attack: number): void {
  const base = {
        HP,
        SpDefense,
        Defense,
        Speed,
        SpAttack,
        Attack
      };
  if (this.form.valid) {
        this.pokemonService.addPokemon(
          {name, type, base} as Pokemon)
          .subscribe(pokemon => this.pokemons.push(pokemon));
        this.form.reset();
        this.success = true;
        console.log(this.getPokemon);
      } else {
        this.success = false;
      }
    }

        /** Model Driven Form Creation Functions */
  //   createFormControls() {
  //     this.type = new FormControl('', Validators.required),
  //     this.name = new FormControl('', Validators.required),
  //     this.SpDefense = new FormControl('', [Validators.required, Validators.pattern("^(0?[1-9]|[1-9][0-9])$") ]),
  //     this.Defense = new FormControl('', [Validators.required, Validators.pattern("^(0?[1-9]|[1-9][0-9])$") ]),
  //     this.HP = new FormControl('', [Validators.required, Validators.pattern("^(0?[1-9]|[1-9][0-9])$")]),
  //     this.Speed = new FormControl('', [Validators.required, Validators.pattern("^(0?[1-9]|[1-9][0-9])$")]),
  //     this.SpAttack =  new FormControl('', [Validators.required, Validators.pattern("^(0?[1-9]|[1-9][0-9])$")])
  //   }
  //   createForm() {
  //     this.myform = new FormGroup({
  //       type: this.type,
  //       name: this.name,
  //       SpDefense: this.SpDefense,
  //       Defense: this.Defense,
  //       HP: this.HP,
  //       Speed: this.Speed,
  //       SpAttack: this.SpAttack
  //     });
  // }
}
