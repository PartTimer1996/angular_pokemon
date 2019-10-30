import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { FirebaseauthService } from '../Services/firebaseauth.service';

@Injectable({
  providedIn: 'root'
})
export class NonauthGuard implements CanActivate {
  constructor(private authservice: FirebaseauthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authservice.user.pipe(
        take(1),
        map(user => !!user),
        tap(loggedin =>
          {
            if (loggedin) {
              console.log('Router Guard: Already logged in');
              this.router.navigate(['']);
            }
          })
      )
  }
  
}
