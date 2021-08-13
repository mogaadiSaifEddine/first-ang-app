import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title :string = "Task tracer"
  subscribtion : Subscription
  showaddTask : boolean = true

  constructor(private uiservice : UiService) { 
    this.subscribtion=this.uiservice.onToggleAddTask().subscribe(value=>this.showaddTask = value)
  }

  ngOnInit(): void {
  }
  toggle(){
   this.uiservice.toggleAddTask();
   console.log('toggle header')
  }

}
