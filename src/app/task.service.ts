import { Injectable } from '@angular/core';

interface Tasks {
  nome: string;
  dia: string;
  horaInicio: string;
  horaFim: string;
}

@Injectable()
export class TaskService {
  list: Array<Tasks> = [
    {
      nome: 'Projeto de Encontrabilidade',
      dia: 'Segunda-feira',
      horaInicio: '19h',
      horaFim: '22h30',
    },
  ];

  constructor() {}

  addTask(task: Tasks) {
    this.list.push(task);
  }

  removeTask(index: number) {
    this.list.splice(index, 1);
  }

  getList() {
    return this.list;
  }
}
