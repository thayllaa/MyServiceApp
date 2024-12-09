import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

interface Tasks {
  nome: string;
  dia: string;
  horaInicio: string;
  horaFim: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  tarefaForm = new FormGroup({
    dia: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    horaInicio: new FormControl('', Validators.required),
    horaFim: new FormControl('', Validators.required),
  });

  constructor(private taskService: TaskService) {}

  lista: Tasks[] = [];

  ngOnInit() {
    this.lista = this.taskService.getList();
  }

  removeTask(index: number) {
    this.taskService.removeTask(index);
    this.lista = this.taskService.getList();
  }

  onSubmit() {
    if (this.tarefaForm.valid) {
      const newTask: Tasks = {
        nome: this.tarefaForm.value.nome,
        dia: this.tarefaForm.value.dia,
        horaInicio: this.tarefaForm.value.horaInicio,
        horaFim: this.tarefaForm.value.horaFim,
      };
      // Validação adicional: verificar se o horário de término é posterior ao início
      if (newTask.horaFim <= newTask.horaInicio) {
        alert('O horário de término deve ser posterior ao horário de início.');
        return;
      }
      this.taskService.addTask(newTask);
      this.tarefaForm.reset();
    }
  }
}
