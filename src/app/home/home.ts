import { Component } from '@angular/core';

type Projects = {
  id: string;
  type: string;
  name: string;
  fhoneNumber: string;
};

type NewProjects = {
  id: string;
  type: string;
  icon: string;
};

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor() {}

  myProjects: Projects[] = [
    {
      id: '1',
      type: 'מערכת תוכן',
      name: 'דרך תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '2',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '3',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '4',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '5',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '6',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '7',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '8',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '9',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
    {
      id: '10',
      type: 'מערכת תוכן',
      name: 'תבונה',
      fhoneNumber: '03-313-2222',
    },
  ];

  newProjects: NewProjects[] = [
    {
      id: '1',
      type: 'חדרי ועידה',
      icon: 'contact-circle',
    },
    {
      id: '2',
      type: 'קו וירטואלי',
      icon: 'my-list-arrow',
    },
    {
      id: '3',
      type: 'דיגי קול',
      icon: 'number-calls',
    },
    {
      id: '4',
      type: 'אסמס למייל',
      icon: 'email-icon',
    },
    {
      id: '5',
      type: 'פקסים',
      icon: 'label',
    },
    {
      id: '6',
      type: 'שידורים חיים',
      icon: 'label',
    },
    {
      id: '7',
      type: 'למידה מרחוק',
      icon: 'label',
    },
    {
      id: '8',
      type: 'חדרי ועידה',
      icon: 'label',
    },
    {
      id: '9',
      type: 'משתקי טריוויה',
      icon: 'label',
    },
    {
      id: '10',
      type: 'תזכורות במייל',
      icon: 'label',
    },
    {
      id: '11',
      type: 'הזמנות',
      icon: 'label',
    },
    {
      id: '12',
      type: 'ווצאפ פון',
      icon: 'label',
    },
    {
      id: '13',
      type: 'הודעות קוליות',
      icon: 'label',
    },
    {
      id: '14',
      type: 'שיחות נכנסות',
      icon: 'label',
    },
    {
      id: '15',
      type: 'שיחות יוצאות',
      icon: 'label',
    },
    {
      id: '16',
      type: 'שיחות נכנסות',
      icon: 'label',
    },
  ];
}
