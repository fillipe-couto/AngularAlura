import { Component } from '@angular/core';
import { Pensamento } from '../Pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {

  listaPensamentos: Pensamento[] = [];

}
