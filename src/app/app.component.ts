import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'first-angular-app';
  tggole(){
    alert ('app component button clicked')
    console.log('app component button clicked');
  }
}
