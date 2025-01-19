import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  todos: any[] = []; // Todos los datos obtenidos de la API
  paginatedTodos: any[] = []; // Subconjunto de datos para mostrar en la página actual
  currentPage: number = 1; // Página actual
  itemsPerPage: number = 20; // Cantidad de resultados por página
  totalPages: number = 0; // Número total de páginas

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      this.totalPages = Math.ceil(this.todos.length / this.itemsPerPage); // Calcular total de páginas
      this.updatePaginatedTodos(); // Actualizar los datos para la página actual
    });
  }

  // Método para actualizar los datos mostrados en función de la página actual
  updatePaginatedTodos() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedTodos = this.todos.slice(startIndex, endIndex);
  }

  // Ir a la página siguiente
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedTodos();
    }
  }

  // Ir a la página anterior
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedTodos();
    }
  }
}

