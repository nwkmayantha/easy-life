import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {

  @Input('card') card: any


  onBtnClick(): void {

  }

}

export interface Card {
  id: number;
  name: string;
  title:string;

  
}
