import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot  } from '@angular/router';
import { HardcodedAuthanticationService } from './../service/hardcoded-authantication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor( private hardcodedAuthanticationService: HardcodedAuthanticationService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  if(this.hardcodedAuthanticationService.isUserLoggedIn())
    return true;
    this.router.navigate(['login']);
     return false;
  }
}
