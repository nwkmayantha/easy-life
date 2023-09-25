import { Component } from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'easy-life';
  public url: string | undefined;

  cards = [
    { id: 1, name: 'Kasun', title: 'Cleaner' },
    { id: 2, name: 'Nadun', title: 'Painter' },
    { id: 3, name: 'Sahan', title: 'Carpenter' },
    { id: 4, name: 'Kavinda', title: 'Cleaner' },
    { id: 5, name: 'Sripala', title: 'Cleaner' },
  ];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  isOnLandingPage(): boolean {
    return this.url == '/landingpage' || this.url == '/' ||  this.url=='/#!';
  }
}
