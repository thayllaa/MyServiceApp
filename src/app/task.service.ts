import { Injectable } from '@angular/core';

interface Tasks {
  title: String;
}

@Injectable()
export class TaskService {
  list: Array<Tasks> = [
    {title: 'Banco de Dados II'},
    {title: 'Desenvolvimento para Servidores I'},
    {title: 'Desenvolvimento para Servidores II'},
    {title: 'Desenvolvimento para Dispositivos Movéis I'},
    {title: 'Negócios, Marketing e Eletrônicos'},
    {title: 'Tópicos Especiais II'},
    {title: 'Prototipagem e Testes'},
    {title: 'Programa de Graduação'},
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string) {
    this.list.push({title});
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}