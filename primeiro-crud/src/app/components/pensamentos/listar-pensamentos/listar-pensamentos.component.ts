import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../../../services/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual = 1;
  haMaisPensamentos: boolean = true;
  filtro = "";
  somenteFavoritos = false;
  listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
      this.service.listar(this.paginaAtual, this.filtro, this.somenteFavoritos).subscribe((listaPensamentos => {
        this.listaPensamentos = listaPensamentos;
      }));
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.somenteFavoritos).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  pensquisarPensamentos() {
    if (this.filtro.trim().length <= 2) { return; }
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual, this.filtro, this.somenteFavoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  listarTodos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.somenteFavoritos = false;
    this.listar();
  }

  listarFavoritos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.somenteFavoritos = true;
    this.listar();
  }

  listar() {
    this.service.listar(this.paginaAtual, this.filtro, this.somenteFavoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
      if (this.somenteFavoritos) { this.listaFavoritos = listaPensamentos }
    });
  }

}
