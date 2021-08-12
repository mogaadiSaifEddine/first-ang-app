import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable,of } from 'rxjs';
import {HttpClient ,HttpHeaders} from'@angular/common/http'


const httpOption ={
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private Uri = 'http://localhost:4000/tasks'

  constructor(private httpclient : HttpClient) { }
getTasks () : Observable <Task[]> {

  return this.httpclient.get<Task[]>(this.Uri) ;
}
deleteTask(task:Task) : Observable<Task>{
  
  const url = `${this.Uri}/${task.id}`

  return this.httpclient.delete<Task>(url) 


}

updatetask(task:Task): Observable<Task>{
  const url = `${this.Uri}/${task.id}`
  return this.httpclient.put<Task>(url , task , httpOption)

}

}
