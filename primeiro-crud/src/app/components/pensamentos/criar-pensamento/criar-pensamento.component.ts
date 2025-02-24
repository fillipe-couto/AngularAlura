import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../Pensamento';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  constructor(private router: Router) {}

  ngOnInit() {
    alert("Criando novo pensamento...");
  }

  criarNovoPensamento() {
    alert("Novo pensamento!")
  }

  cancelarNovoPensamento() {
    this.router.navigate(["/listarPensamentos"]);
  }

}
