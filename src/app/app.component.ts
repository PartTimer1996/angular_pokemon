import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LoginService } from './Services/login.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {MediaMatcher} from '@angular/cdk/layout';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {filter, map, tap, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {
  items: Observable<any[]>;
  opened: boolean;
  place: string;
  showFiller = false;
  loggedin: boolean;
  title: string;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private authService: LoginService, private router: Router,
              private activatedRoute: ActivatedRoute, private titleService: Title,
              changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, db: AngularFirestore
              )
  {
  this.mobileQuery = media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
  // How to simply work with a firestore db and pull live data from it.
  // this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
          return route;
        }
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data))
      .subscribe(
        (event) => this.titleService.setTitle(event.title));

    this.router.events.pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) {
              route = route.firstChild;
              return route;
            }
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data))
          .subscribe(
            (event) => this.title = this.titleService.getTitle());

          }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
