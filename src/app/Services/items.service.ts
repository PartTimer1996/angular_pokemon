import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Item} from '../Models/Items';
import {Pokemon} from '../Models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemUrl = 'api/items';

  constructor(private http: HttpClient) { }
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl);
  }

}
