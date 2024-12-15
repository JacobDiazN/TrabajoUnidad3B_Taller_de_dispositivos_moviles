import { Component, OnInit } from '@angular/core';

export interface Clase {
  ramo: string;
  profesor: string;
  horario: string;
}


@Component({
  selector: 'app-horario-de-clases',
  templateUrl: './horario-de-clases.page.html',
  styleUrls: ['./horario-de-clases.page.scss'],
})
export class HorarioDeClasesPage implements OnInit {

  // Propiedad para manejar el estado del modal
  isModalOpen = false;

  // Estado para determinar si estamos en modo de edición
  isEditMode = false;

  // Objeto que contiene los datos del horario actual
  currentClase: Clase = {
    ramo: '',
    profesor: '',
    horario: ''
  };

  // Lista de horarios de clases
  clases: Clase[] = [
    { ramo: 'Taller de dispositivos móviles', profesor: 'José Pino', horario: 'Lunes 10:00 - 12:00' },
    { ramo: 'Seguridad de servidores', profesor: 'Diego Caceres', horario: 'Martes 14:00 - 16:00' }
  ];

  constructor() { }

  ngOnInit() {}

  // Método para abrir el modal y preparar el formulario para agregar un nuevo horario
  openAddModal() {
    this.isModalOpen = true;
    this.isEditMode = false;  // Modo de agregar
    this.currentClase = { ramo: '', profesor: '', horario: '' }; // Limpiar el formulario
  }

  // Método para abrir el modal y cargar los datos para editar un horario
  openEditModal(clase: Clase) {
    this.isModalOpen = true;
    this.isEditMode = true; // Modo de edición
    this.currentClase = { ...clase }; // Copiar los datos de la clase seleccionada
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Método para guardar o actualizar el horario
  saveClase() {
    if (this.isEditMode) {
      // Si estamos en modo edición, actualizamos el horario
      const index = this.clases.findIndex(c => c.ramo === this.currentClase.ramo);
      if (index !== -1) {
        this.clases[index] = this.currentClase;
      }
    } else {
      // Si estamos en modo agregar, añadimos el nuevo horario
      this.clases.push(this.currentClase);
    }
    this.closeModal();
  }

  // Método para eliminar un horario de la lista
  deleteClase(clase: Clase) {
    this.clases = this.clases.filter(c => c !== clase); // Filtramos la clase eliminada
  }
}

