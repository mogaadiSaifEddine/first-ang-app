import { Component, OnInit , Input, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text  : string;
  @Input() color : String;
  @Input() bgcolor : String;
  @Output() btnclicked = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    console.log('hello');
     this.btnclicked.emit()
  }

}
