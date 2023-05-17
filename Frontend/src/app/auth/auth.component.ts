import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { authservice } from "./auth.servises";
import { Router } from "@angular/router";



@Component(
    {
        selector: 'app-auth',
        templateUrl: './auth.component.html'
    }
)

export class authcomponent {

    isLoginMode = true
    isLoading = false
    error: string = null

    constructor(private authService: authservice, private router: Router) {

    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }

    onSubmit(form: NgForm) {
        // console.log(form.value)

        if (!form.valid) {
            return
        }

        const email = form.value.email
        const password = form.value.password

        // this.isLoading=true

        if (this.isLoginMode) {
            this.authService.login(email, password).subscribe(resData => {
                console.log(resData)
                this.isLoading = false
                this.authService.user = resData
                this.router.navigate(['recipes']);
            }, errorRes => {
                console.log(errorRes)

                switch (errorRes.error.message) {
                    case "Invalid email or password":
                        this.error = "Invalid email or password"
                        break;
                    default: this.error = 'An error occured'
                        break;
                }
                console.log(this.error);


            }
            )
        }
        else {
            this.authService.signup(email, password).subscribe(resData => {
                console.log(resData)
                // this.isLoading=false
            }, errorRes => {
                console.log(errorRes)

                switch (errorRes.error.message) {
                    case "Error creating user":
                        this.error = 'Email already regestered'
                        break;
                    default: this.error = 'An error occured'
                        break;
                }
                console.log(this.error);

                // this.isLoading=false
            }
            );
        }
        form.reset()
    }

    
    
}