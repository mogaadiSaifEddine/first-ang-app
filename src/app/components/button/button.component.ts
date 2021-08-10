import { Component, OnInit , Input } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text  : string;
  @Input() color : String;
  @Input() bgcolor : String;
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    // alert ('bonjour saif ')
    console.log(' button clicked');
  }

}
