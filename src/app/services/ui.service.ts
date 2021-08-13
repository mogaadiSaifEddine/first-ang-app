import { Injectable } from '@angular/core';
import { Observable ,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showaddTask : boolean = true ; 
 private subject  = new Subject<any>()

  constructor() { }
  toggleAddTask() : void{
    console.log('ui service');
    console.log(this.showaddTask);
    this.showaddTask=!this.showaddTask
    this.subject.next(this.showaddTask)
  }
  onToggleAddTask() : Observable<any> {
    return this.subject.asObservable() 
    ;
  }
}
