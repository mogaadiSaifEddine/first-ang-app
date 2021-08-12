import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import{Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task : Task
  faTimes=faTimes;
  @Output() delteEventTask : EventEmitter<Task> = new EventEmitter() 
  @Output() reminderset : EventEmitter<Task> = new EventEmitter() 

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    console.log('delete button work '+task.text);
    this.delteEventTask.emit(task);

  }
  onToggle(task:Task){
    console.log('hello' +task.text);
    this.reminderset.emit(task  )

  }

}
