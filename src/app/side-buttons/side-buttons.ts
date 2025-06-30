import { Component } from '@angular/core';

@Component({
  selector: 'app-side-buttons',
  standalone: false,
  templateUrl: './side-buttons.html',
  styleUrl: './side-buttons.css',
})
export class SideButtons {
  agentData = {
    firstName: 'שמואל',
    lastName: 'ווסרמן',
    userImage: '../assets/images/man_white.png',
  };
}
