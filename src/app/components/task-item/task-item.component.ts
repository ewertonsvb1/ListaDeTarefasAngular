import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})

export class TaskItemComponent {

  constructor(private taskService: TaskService) {}

  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>(); // tem que emitir um evento de enviar
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();
  faTimes = faTimes

  onDelete(tarefa:Tarefa){
    this.onDeleteTask.emit(tarefa);
  }

toggleConcluiido(tarefa: Tarefa) {
  this.onToggleConcluido.emit(tarefa);
}
}
