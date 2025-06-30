import { Component } from '@angular/core';
import { RoutePage } from '@yemot/yemot-design';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  standalone: false,
  styleUrl: './main.css'
})
export class Main {
routes: RoutePage[] = [

    {
      text: 'רכיבים',
      icon: 'additives',
      path: 'demo',
      subRoutes: [
        {
          text: 'כפתורים',
          icon: 'additives',
          path: 'buttons'
        },
        {
          text: 'שדות קלט',
          icon: 'additives',
          path: 'form-inputs'
        },
        {
          text: 'בחירה',
          icon: 'additives',
          path: 'selection'
        },
        {
          text: 'ניווט',
          icon: 'additives',
          path: 'navigation'
        },
        {
          text: 'כלים',
          icon: 'additives',
          path: 'utility'
        },
      ]
    },
    {
      text: 'אייקונים',
      icon: 'info-gray',
      path: 'icons'
    },
    {
      text: 'מדריך התקנה',
      icon: 'file',
      path: 'guide'
    }
  ];

  logoPath: string | undefined = '/assets/images/yemot-logo.png';
  topHeaderText: string = 'Yemot-design demo';
  userData = {
    firstName: 'משתמש',
    lastName: 'לדוגמה',
    // userImage: '/assets/images/man_white.jpg'
  }

  onLogoutClick() {
    console.log('Logout clicked');
  }
}
