import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { TaskService } from '../../services/task.service';
import { HeaderComponent } from "../header/header.component";
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTaskComponent } from './../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent, HeaderComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tarefas: Tarefa[] = [];
  totalTarefas: number = 0;
  totalConcluidas: number = 0;
  totalAbertas: number = 0;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.carregarTarefas();

  }

  AddTask(tarefa: Tarefa) {
    this.taskService.addTask(tarefa).subscribe((novaTarefa) => {
      this.tarefas = [...this.tarefas, novaTarefa]; // 🔹 Cria uma nova referência
      this.atualizarContadores();  // 🔹 Agora o contador é atualizado corretamente
    });
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() => {
      this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
      this.atualizarContadores();  // 🔹 Atualiza o contador após remover
    });
  }

  toggleConcluiido(tarefa: Tarefa) {
    // Atualiza o status da tarefa
    tarefa.concluido = !tarefa.concluido;

    // Atualiza a data de conclusão
    tarefa.dataConclusao = tarefa.concluido ? new Date() : null;

    // Envia para o backend e só atualiza os contadores após resposta da API
    this.taskService.updateTask(tarefa).subscribe(() => {
      this.atualizarContadores();
    });
  }

  carregarTarefas(): void {
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      this.atualizarContadores();  // 🔹 Chama o contador ao carregar
    });
  }
  atualizarContadores(): void {
    this.totalTarefas = this.tarefas.length;
    this.totalConcluidas = this.tarefas.filter(tarefa => tarefa.concluido).length;
    this.totalAbertas = this.totalTarefas - this.totalConcluidas;
  }
}
