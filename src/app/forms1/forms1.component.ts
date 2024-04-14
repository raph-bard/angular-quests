import { Component } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrl: './forms1.component.css'
})
export class Forms1Component {

  newOrder: Order = {
    title: "",
    quantity: 0,
    date: new Date(),
    contact: ""
  };

    onSubmit(): void {
      console.log("Formulaire envoyé !", this.newOrder)
    }
}
