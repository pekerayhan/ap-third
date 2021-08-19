import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthanticationService {

  constructor() {}
  authanticate(uname :any, password :any){
     console.log(this.isUserLoggedIn());
    if(uname===''||password===''){
           sessionStorage.setItem('loggedinuser',uname);
             console.log(this.isUserLoggedIn());
          return true;
    }
    else return false;
  }
  isUserLoggedIn():boolean{
  let user=sessionStorage.getItem('loggedinuser');
    return !(user===null)
  }
  logout(){
  sessionStorage.removeItem('loggedinuser');
  }
}
