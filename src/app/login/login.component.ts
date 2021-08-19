import { HardcodedAuthanticationService } from './../service/hardcoded-authantication.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
uname=''
password=''
errorMessage='invalid Login'
invalidLogin=false

  constructor(private router: Router, private hardcodedAuthanticationService: HardcodedAuthanticationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
  if(this.hardcodedAuthanticationService.authanticate(this.uname, this.password)){

      this.invalidLogin=false;
       this.router.navigate(['welcome']);
      }else {
      this.invalidLogin=true;
      }
  }

}
