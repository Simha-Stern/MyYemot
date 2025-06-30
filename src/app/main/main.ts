import { Component } from '@angular/core';
import { RoutePage } from '@yemot/yemot-design';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  standalone: false,
  styleUrl: './main.css',
})
export class Main {
  routes: RoutePage[] = [
    {
      text: 'בית',
      icon: 'online',
      path: 'demo',
      // subRoutes: [
      //   {
      //     text: 'כלים',
      //     icon: 'additives',
      //     path: 'utility',
      //   }
      // ],
    },
    {
      text: 'הפרוייקטים שלי',
      icon: 'online',
      path: 'icons',
    },
    {
      text: 'תשלומים וחבילות',
      icon: 'online',
      path: 'guide',
    },
    {
      text: 'הודעות',
      icon: 'online',
      path: 'icons',
    },
    {
      text: 'יצירת קשר',
      icon: 'online',
      path: 'guide',
    },
  ];

  logoPath: string | undefined = '../assets/images/yemot-logo.png';
  userData = {
    firstName: 'משתמש',
    lastName: 'לדוגמה',
    userImage: '../assets/images/man_white.png',
  };
  topHeaderText: string = `שלום ${this.userData.firstName} ${this.userData.lastName}`;

  onLogoutClick() {
    console.log('Logout clicked');
  }
}
