import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public url: string | undefined;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      console.log('Router Event:', event);
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        console.log(this.url);
      }
    });
  }
  isLogin() {
    return this.url == '/home' || this.url == 'home';
  }
}
