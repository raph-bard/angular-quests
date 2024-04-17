import { Component } from '@angular/core';

@Component({
  selector: 'app-display-onomatopia',
  templateUrl: './display-onomatopia.component.html',
  styleUrl: './display-onomatopia.component.css'
})
export class DisplayOnomatopiaComponent {

  onomatopoeiaList: string[] = [];


  displayOnomatopia(newOnomatopia : string):void {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
