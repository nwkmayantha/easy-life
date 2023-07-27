import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, ProfileCardComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule {}
