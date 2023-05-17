// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { authservice } from './auth.servises';

// @Injectable({
//     providedIn: 'root'
// })
// export class DisableIfAuthGuard implements CanActivate {

//     constructor(private authService: authservice, private router: Router) { }

//     canActivate(): boolean {
//         if (this.authService.signup) {
//             this.router.navigate(['/']);
//             return false;
//         }
//         return true;
//     }
// }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { authservice } from './auth.servises';

@Injectable({
    providedIn: 'root'
})
export class DisableIfAuthGuard implements CanActivate {

    constructor(private authService: authservice, private router: Router) { }

    canActivate(): boolean {

        return this.authService.user.email ? false : true;
    }
}
