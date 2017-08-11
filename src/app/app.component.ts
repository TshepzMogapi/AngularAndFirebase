import { Component } from '@angular/core';
import { TodoStore, Todo } from "app/todo.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  public newTodoText : string;

  constructor(public store : TodoStore){

  }

    addTodo(){
    if (this.newTodoText.trim().length) {
      this.store.add(this.newTodoText);
      this.newTodoText = '';
    }
  }
  
}
