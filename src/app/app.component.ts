import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListaDeTarefas';
}
