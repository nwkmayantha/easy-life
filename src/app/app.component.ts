import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'easy-life';

  cards = [
    { id: 1, name: 'Kasun', title: 'Cleaner' },
    { id: 2, name: 'Nadun', title: 'Painter' },
    { id: 3, name: 'Sahan', title: 'Carpenter' },
    { id: 4, name: 'Kavinda', title: 'Cleaner' },
    { id: 5, name: 'Sripala', title: 'Cleaner' },
  ];
}
