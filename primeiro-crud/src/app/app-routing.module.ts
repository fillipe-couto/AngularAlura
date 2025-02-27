import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "listarPensamentos"
  },
  {
    path: "criarPensamento",
    component: CriarPensamentoComponent
  },
  {
    path: "listarPensamentos",
    component: ListarPensamentosComponent
  },
  {
    path: "pensamentos/editarPensamento/:id",
    component: EditarPensamentoComponent
  },
  {
    path: "pensamentos/excluirPensamento/:id",
    component: ExcluirPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
