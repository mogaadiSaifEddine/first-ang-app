import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text:string;
  day : string;
  reminder: boolean =false;
  showAddTask : boolean =false
  subscribtion : Subscription
  @Output() AddTaskEmetter :EventEmitter<Task> = new EventEmitter() ; 

  constructor(private uiservice: UiService) { 
    this.subscribtion= this.uiservice.onToggleAddTask().subscribe((value)=>this.showAddTask=value)
  }

  ngOnInit(): void {
  }
  onSubmit(){
  if (!this.text) {
    alert("add a task plz")
  if (this.day){
    alert('add a day plz')
  }
    return;
  }
  const newTask ={
    text:this.text,
    day:this.day,
    reminder : this.reminder
  }
  this.AddTaskEmetter.emit(newTask)
  this.text=''
  this.day=''
  this.reminder=false
  }

}
