import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    public loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: [''],
        });
    }

    ngOnInit(): void {}

    public sendForm(): void {
        console.log(this.loginForm);
    }
}
