import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../_interfaces/user';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   model: User = new User();
   success: boolean;
   isSubmitted  =  false;
   hide = true;
   @ViewChild('f', {static: false}) form: any;
  constructor(private authService: LoginService, private router: Router) { }

    ngOnInit() {
      this.hide = true;
    }
    onSubmit() {
      console.log(this.form.value);
      this.isSubmitted = true;
      this.authService.login(this.form.value);
      this.router.navigateByUrl('/Admin');
    }
}
