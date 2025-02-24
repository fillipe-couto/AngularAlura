import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {

  listaPensamentos = [
    { conteudo: "Teste A", autoria: "DevA", modelo: "modelo1"},
    { conteudo: "Teste B", autoria: "DevB", modelo: "modelo2"},
    { conteudo: `Teste de um pensamento enorme com mais de 256 caracteres para
                podermos ver a aplicação do ngClass para alterar a classe de um componente dinamicamente.
                Teste de um pensamento enorme com mais de 256 caracteres para
                podermos ver a aplicação do ngClass para alterar a classe de um componente dinamicamente.`,
      autoria: "DevC", modelo: "modelo3"}
  ];

}
