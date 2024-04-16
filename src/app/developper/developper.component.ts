import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrl: './developper.component.css'
})
export class DevelopperComponent {

  @Input() developer!: Developer;


}
