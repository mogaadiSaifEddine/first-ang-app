import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    alert('header button clicked')
    console.log('header buttton');
  }

}
