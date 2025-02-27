import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../../../services/pensamento.service';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router) {}

  criarNovoPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamentos"]);
    });
  }

  cancelarNovoPensamento() {
    this.router.navigate(["/listarPensamentos"]);
  }

}
