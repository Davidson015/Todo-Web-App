import { TodoService } from '../../services/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/modules/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes
  }

  // Toggling the 'completed' property
  onToggle(todo: Todo) {
    // Toggle UI
    todo.completed = !todo.completed

    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {

    })
  }

  // Deleting the completed todos
  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo)
  }

}
