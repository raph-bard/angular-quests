import { Component } from '@angular/core';

@Component({
  selector: 'app-command-form',
  templateUrl: './command-form.component.html',
  styleUrl: './command-form.component.css'
})
export class CommandFormComponent {

  onSubmit() {
    console.log("envoyé");
  }
}
