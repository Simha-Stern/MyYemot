import { Component } from '@angular/core';
import { RoutePage } from '@yemot/yemot-design';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  protected title = 'yemot';
  routes: RoutePage[] = [
    {
      text: 'בית',
      icon: 'online',
      path: 'home',
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
      path: 'my-projects',
    },
    {
      text: 'תשלומים וחבילות',
      icon: 'online',
      path: 'payments-and-packages',
    },
    {
      text: 'הודעות',
      icon: 'online',
      path: 'messages',
    },
    {
      text: 'יצירת קשר',
      icon: 'online',
      path: 'contact',
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
