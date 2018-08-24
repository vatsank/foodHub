import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
                 Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuardGuard implements CanActivate {

   constructor(private route: Router) {

   }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const status = sessionStorage.getItem('userLogged');

      const reqURL =  state.url;

       const reWriteURL =  reqURL.substr(1, reqURL.length));


      let allow = false;

       if (status === 'true') {
          allow = true;
       } else {
           this.route.navigate(['/login', reWriteURL]);
       }
       return allow;

  }
}
