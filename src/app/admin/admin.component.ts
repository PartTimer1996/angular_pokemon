import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseauthService } from '../Services/firebaseauth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public authService: FirebaseauthService, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.authService.firebaseLogout();
    this.router.navigateByUrl('/login');
  }
}
