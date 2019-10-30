import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Register} from '../Models/register';
import { FirebaseauthService } from '../Services/firebaseauth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: Register = new Register();
  @ViewChild('f', {static: false}) form: any;

  constructor(private authService: FirebaseauthService, private router: Router) { }
  ngOnInit() {
  }

  register(email, password, displayName , photoURL) {
    this.authService.firebaseSignup(email, password, displayName , photoURL);
    this.router.navigateByUrl('Dashboard');
  }

}
