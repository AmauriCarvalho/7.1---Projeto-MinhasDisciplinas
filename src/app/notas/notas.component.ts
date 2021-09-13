import { Component, OnInit } from '@angular/core';
import { ListadiscService } from '../listadisc.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor(public discl: ListadiscService) { }

  ngOnInit() {
  }

}