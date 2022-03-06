import { Component, OnInit } from '@angular/core';

import { todoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {

  newTask: string = ''; 

  text: string = '';

  tasks: todoItem[] = [
    {description: "Arrumar a cama", done: false},
    {description: "Estudar Angular", done: false},
    
  ];

  // addTask(description: string) {
  //   this.tasks.push({
  //     description: description,
  //     done: false
  //   })

  // }

  addTask() {
    this.tasks.push({
      description: this.newTask,
      done: false
    })

  }

  deleteTask(i: number){
    this.tasks.splice(i, 1);

  }
 

}
