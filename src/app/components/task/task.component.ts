import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {Task } from '../../Task'
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks : Task[]=[] 
  @Output() addTask: EventEmitter<Task>= new EventEmitter()
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks =tasks)
    
  }
  adTask(){

  }

  reminderset(task: Task){
    console.log(task.reminder);
    task.reminder =! task.reminder
    this.taskService.updatetask(task).subscribe()
    console.log((task.reminder));
  
  }
  deleteTask(task:Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );  }


 

}
