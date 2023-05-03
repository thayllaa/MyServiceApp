import { Injectable } from '@angular/core';

interface Tasks {
  title: String;
  day: string;
  hour: string;
}

@Injectable()
export class TaskService {
  list: Array<Tasks> = [
    {
      title: "Projeto de Encontrabilidade",
      day: "Segunda-feira",
      hour: "19h - 22h30",
    },
    {
      title: "Banco de Dados II",
      day: "Quarta-feira",
      hour: "9h30 - 13h",
    },
    {
      title: "Tópicos Especiais II",
      day: "Sexta-feira",
      hour: "19h - 22h30",
    },
    {
      title: "Desenvolvimento para Servidores II",
      day: "Quinta-feira",
      hour: "19h - 22h30",
    },
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string, day: string, hour:string, ) {
    this.list.push({ title, day, hour});
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}