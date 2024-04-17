import { Component } from '@angular/core';
import { Skill } from './models/skill.model';
import { Developer } from './models/developer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  javascript: Skill = {
    name: "javascript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  }

  php : Skill = {
    name: "Php",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png"
  }
  
  victor: Developer = {
    lastName: "Paella",
    firstName: "Victor",
    age: 28,
    gender: "homme",
    bio: "Bouffeur de Paeya professionnel",
    skills:  [this.javascript, this.php] 
  }

  aurore: Developer = {
    lastName: "Grognasse",
    firstName: "Aurore",
    age: 23,
    gender: "femme",
    bio: "Aigrie de père en fille",
    skills: [this.javascript]  
  }

}
