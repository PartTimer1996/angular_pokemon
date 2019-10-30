import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../Models/user';
import { Router } from '@angular/router';

import { FirebaseauthService } from '../Services/firebaseauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor( private router: Router, private authService: FirebaseauthService) { }
   model: User = new User();
   success: boolean;
   isSubmitted  =  false;
   hide = true;
   @ViewChild('f', {static: false}) form: any;
  

    ngOnInit() {
      this.hide = true;
    }
    login(email, password) {
      this.authService.firebaseLogin(email, password);
    }
}
