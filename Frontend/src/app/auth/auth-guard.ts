import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { authservice } from "./auth.servises";

@Injectable(
    {
        providedIn: "root"
    }
)

export class authguard implements CanActivate {

    constructor(private authService: authservice) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.email ? true : false

    }
}