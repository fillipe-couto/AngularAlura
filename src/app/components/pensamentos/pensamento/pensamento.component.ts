import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento = {conteudo: "", autoria: "", modelo: ""};

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) return "pensamento-g";
    return "pensamento-p";
  }

}
