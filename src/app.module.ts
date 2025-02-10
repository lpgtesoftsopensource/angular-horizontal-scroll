import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app/app.component';
import { HorizentalScrollingComponent } from './app/horizental-scrolling/horizental-scrolling.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    MatIconModule,
    AppComponent,
    HorizentalScrollingComponent,
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
