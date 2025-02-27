import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento ={
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscar(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento() {
    this.service.excluir(this.pensamento.id!).subscribe(() => {
      this.router.navigate(["/listarPensamentos"]);
    })
  }

  cancelar() {
    this.router.navigate(["/listarPensamentos"]);
  }

}
