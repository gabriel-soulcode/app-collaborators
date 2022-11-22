import { Collaborator } from './../../models/collaborator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];
  dataSource: Collaborator[] = [
    {
      nome: "Gabriel Braga do Nascimento",
      email: "gabriel@gmail.com",
      cpf: "000.000.000-00",
      cargo: "Professor de Tecnologia",
      setor: "Acadêmico",
      estado: "Ceará",
      cidade: "Tianguá",
      remuneracao: 10000000,
      dataNascimento: new Date(),
      fotoUrl: "https://avatars.githubusercontent.com/u/118195805?v=4"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
