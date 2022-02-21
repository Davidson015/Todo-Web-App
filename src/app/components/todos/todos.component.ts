import { Component, OnInit } from '@angular/core';
import { Todo } from '../../modules/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe( todos => {
      this.todos = todos
    })
  }

  deleteTodo(todo: Todo) {
    // Delete From UI
    this.todos = this.todos.filter(t => t.id !== todo.id)
    // Remove From Server
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }

}
