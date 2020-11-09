import { Injectable } from '@angular/core';
import { CanActive, ActivatedRouteSnapshot, RouterAtateSnapshot, Urltree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable }  from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardGuard implements CanActive{

     constructor(private auth: AuthService){

    CanActive(
        route: ActivatedRouteSnapshot,
        state: RouterAtateSnapshot): Observable<Boolean>{
        return this.auth.isAuthenticated$;
     }

}
