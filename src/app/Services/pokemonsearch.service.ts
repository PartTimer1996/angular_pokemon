import { Injectable } from '@angular/core';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClient
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokemonsearchService {
  constructor(private http: HttpClient) {}

}


