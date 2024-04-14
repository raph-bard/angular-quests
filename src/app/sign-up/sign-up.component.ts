import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {

  user: User = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  };

  formSubmitted: boolean = false;

  onSubmit(): void {
    this.formSubmitted = true;
    console.log('Envoyé !,', this.user);
    console.log("formSubmitted: ", this.formSubmitted);
  }
}