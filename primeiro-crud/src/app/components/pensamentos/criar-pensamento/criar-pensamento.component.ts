import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentoService } from '../../../services/pensamento.service';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup

  constructor(private service: PensamentoService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        conteudo: ["Digite um pensamento..."],
        autoria: ["Autor do pensamento?"],
        modelo: ["modelo1"]
      });
  }

  criarNovoPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(["/listarPensamentos"]);
    });
  }

  cancelarNovoPensamento() {
    this.router.navigate(["/listarPensamentos"]);
  }

}
