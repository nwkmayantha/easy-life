import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  cards = [
    { id: 1, name: 'Kasun', title: 'Cleaner' },
    { id: 2, name: 'Nadun', title: 'Painter' },
    { id: 3, name: 'Sahan', title: 'Carpenter' },
    { id: 4, name: 'Kavinda', title: 'Cleaner' },
    { id: 5, name: 'Sripala', title: 'Cleaner' },
    { id: 6, name: 'Sripala', title: 'Cleaner' },
    { id: 7, name: 'Sripala', title: 'Cleaner' },
    
  ];

}
