import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Pokemon} from '../Models/pokemon';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemonUrl = 'api/pokemons';

  constructor(private http: HttpClient) {
  }
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl);
  }
  getPokemon(id: number): Observable<Pokemon> {
    const URL = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(URL);
  }
  deletePokemon(pokemon: Pokemon | number): Observable<Pokemon> {
    const id = typeof pokemon === 'number' ? pokemon : pokemon.id;
    const URL = `${this.pokemonUrl}/${id}`;
    return this.http.delete<Pokemon>(URL);
  }
  pokeSearch(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
     return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(
      tap(_ => console.log(`found Pokemon matching "${term}"`))
    );
  }
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.pokemonUrl, pokemon).pipe(
      tap((newPokemon: Pokemon) => console.log(`added pokemon w/ id =${newPokemon.id}`)),
      catchError(this.handleError<Pokemon>('addPokemon'))
    );
  }
  updatePokemon(pokemon: Pokemon): Observable<any> {
    return this.http.put(this.pokemonUrl, pokemon).pipe(
      tap(() => console.log(`updated hero ${pokemon.name}`))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
