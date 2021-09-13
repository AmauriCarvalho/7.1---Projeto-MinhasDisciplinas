import { Injectable } from '@angular/core';
interface disc {
  disciplina: string;
  dia: string;
  horac: string;
  horaf: string;
  p1: number;
  p2: number;
}

@Injectable()
export class ListadiscService {
  list: Array<disc> = [];
  valor2: number;
  constructor() {
    this.carregar();
  }

  getList() {
    return this.list;
  }

  add(disciplina: string, dia: string, horac: string, horaf: string, p1: number, p2: number) {
    this.list.push({ disciplina, dia, horac, horaf, p1, p2});
    this.save();
  }

  remove(index: number) {
    this.list.splice(index, 1);
    this.save();
  }

  editarp1(index: number, valor1: string){
    this.valor2 = parseInt(valor1)
    this.list[index].p1 = this.valor2;
    this.save();
  }
  editarp2(index: number, valor1: string){
    this.valor2 = parseInt(valor1)
    this.list[index].p2 = this.valor2;
    this.save();
  }

  save() {
    const salvar = JSON.stringify(this.list);
    localStorage.setItem('lista', salvar);
  }

  carregar() {
    const salvar = localStorage.getItem('lista');
    this.list = JSON.parse(salvar);
  }
}
