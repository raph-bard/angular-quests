import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})
export class CreateOnomatopiaComponent {

  newOnomatopia: string = "";

  @Output() onomatopia: EventEmitter<string> = new EventEmitter();
  
  sendOnomatopiaToParent() : void {
    this.onomatopia.emit(this.newOnomatopia);
    console.log(this.newOnomatopia);
  }

}
