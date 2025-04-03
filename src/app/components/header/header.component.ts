import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faClock, faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() totalTarefas: number = 0;
  @Input() tarefasConcluidas: number = 0;
  @Input() tarefasEmAndamento: number = 0;
  title: string = 'Tarefas';
  faCheck = faCheck;
  faClock = faClock;
  faListCheck = faListCheck;
}
