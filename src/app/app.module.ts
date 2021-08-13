import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskComponent } from './components/task/task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import {HttpClientJsonpModule, HttpClientModule} from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TaskComponent,
    TaskItemComponent,
    AddTaskComponent,
    
  ],
  imports: [
    BrowserModule,    FontAwesomeModule ,HttpClientModule ,FormsModule
  ],
  exports :[TaskItemComponent], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
