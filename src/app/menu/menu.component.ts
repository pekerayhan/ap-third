import { Component, OnInit } from '@angular/core';
import { HardcodedAuthanticationService } from './../service/hardcoded-authantication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn:boolean=false;
constructor( public hardcodedAuthanticationService: HardcodedAuthanticationService) { }

  ngOnInit(): void {
  this.isUserLoggedIn=this.hardcodedAuthanticationService.isUserLoggedIn();
  }

}
