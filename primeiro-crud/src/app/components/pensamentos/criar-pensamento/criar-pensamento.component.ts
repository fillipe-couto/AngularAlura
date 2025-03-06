import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        conteudo: ["", Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
        autoria: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
        modelo: ["modelo1"]
      });
  }

  criarNovoPensamento() {
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(["/listarPensamentos"]);
      });
    }
  }

  cancelarNovoPensamento() {
    this.router.navigate(["/listarPensamentos"]);
  }

}
