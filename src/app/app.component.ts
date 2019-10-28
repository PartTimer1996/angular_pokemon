import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LoginService } from './Services/login.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {MediaMatcher} from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import {filter, map, tap, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {
  constructor(private authService: LoginService, private router: Router,
              private activatedRoute: ActivatedRoute, private titleService: Title,
              changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  this.mobileQuery = media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
               }
  opened: boolean;
  place: string;
  showFiller = false;
  loggedin: boolean;
  title: string;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.checkStatus();
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
  checkStatus() {
    if (this.authService.isloggedin()) {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/Login');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
