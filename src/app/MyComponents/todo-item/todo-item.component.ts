import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {} as Todo;
  @Input() i: number = 0;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(todo: Todo){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}
