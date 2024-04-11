import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {
  content: string = 'A B C';
}
