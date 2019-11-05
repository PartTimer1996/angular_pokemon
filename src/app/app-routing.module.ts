import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/_guards/auth.guard';
import { NonauthGuard } from '../app/_guards/nonauth.guard';

import { HomeComponent } from './home/home.component';
import { PokemonSearchComponent} from '../app/pokemon-search/pokemon-search.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {CreatepokemonComponent} from './createpokemon/createpokemon.component';
import { PokemonstatsComponent } from './pokemonstats/pokemonstats.component';
import { PokemonlistComponent } from '../app/pokemonlist/pokemonlist.component';
import { AdminComponent } from '../app/admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from '../app/login/login.component';


const routes: Routes = [
  {path: 'Pokemon', component: HomeComponent, data: { title: 'Home' } },
  {path: '', redirectTo: '/Pokemon', pathMatch: 'full' },
  {path: 'PokemonSearch', component: PokemonSearchComponent , data: { title: 'Pokedex' }},
  {path: 'ItemSearch', component: ItemSearchComponent, data: { title: 'ItemSearch' }},
  {path: 'Pokemon/:id', component: PokemonDetailsComponent ,
  data: { title: 'Details' }, children: [{path: 'stats', component: PokemonstatsComponent}]},
  {path: 'Create', component: CreatepokemonComponent, canActivate: [AuthGuard], data: { title: 'Create' }},
  {path: 'stats', component: PokemonstatsComponent , data: { title: 'Stats' }},
  {path: 'FullList', component: PokemonlistComponent, data: { title: 'List' }},
  {path: 'Admin', component: AdminComponent, canActivate: [AuthGuard], data: { title: 'Admin' }},
  {path: 'Dashboard', component: HomeComponent, data: { title: 'Home' }},
  {path: 'Login', component: LoginComponent, canActivate: [NonauthGuard], data: { title: 'Login' }},
  {path: 'Register', component: RegisterComponent, canActivate: [NonauthGuard],  data: { title: 'Register' }},
  {path: '**', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
