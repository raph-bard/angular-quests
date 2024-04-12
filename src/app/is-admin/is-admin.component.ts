import { Component } from '@angular/core';

@Component({
  selector: 'app-is-admin',
  templateUrl: './is-admin.component.html',
  styleUrl: './is-admin.component.css'
})
export class IsAdminComponent {

    view : string = "view";
    isAdmin : boolean = false;

    toggleIsAdmin() {
      this.isAdmin = !this.isAdmin;
    }
}

