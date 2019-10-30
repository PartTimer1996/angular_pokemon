import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PokemondataService } from './Services/pokemondata.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { RegisterComponent } from './register/register.component';

import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { CreatepokemonComponent } from './createpokemon/createpokemon.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { ItemsComponent } from './items/items.component';
import { PokemonstatsComponent } from './pokemonstats/pokemonstats.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { CccardhoverDirective } from '../app/Directives/cccardhover.directive';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MaterialModule} from './material-module';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseauthService } from '../app/Services/firebaseauth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonSearchComponent,
    ItemSearchComponent,
    PokemonDetailsComponent,
    CreatepokemonComponent,
    ItemdetailsComponent,
    ItemsComponent,
    PokemonstatsComponent,
    PokemonlistComponent,
    CccardhoverDirective,
    LoginComponent,
    AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    AngularMultiSelectModule,
    HttpClientInMemoryWebApiModule.forRoot(
      PokemondataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    FirebaseauthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
