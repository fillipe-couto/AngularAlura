## FLUXO DE DADOS

### @Input(): define um atributo HTML no componente que serve como entrada de dados para o componente

### Property bindind: vincula uma variável ou valor entre o template e o componente em sentido unidirecional (componente -> template)
- Uso de colchetes: para atributos de tags, como valores de input (ex: \[value\] = "objeto.variavel");
- Uso de chaves duplas (interpolação): para outros campos, como literais de parágrafos (ex: {{objeto.variavel}});

### Event bindind: vincula uma função entre o template e o componente em sentido unidirecional (template -> componente)
- Uso de parênteses, normalmente no nome do evento da tag HTML sem o "on" (ex.: onClick="funcao()" -> (click)="funcao()");

### Two-way binding: vincula uma variável ou valor entre o template e o componente em sentido bidirecional (componente <-> template)
- Utiliza a diretiva [\(ngModel\)] (ex: [\(ngModel\)]="objeto.variavel");
- Necessário importar o módulo FormsModule;


## NAVEGAÇÃO

- O componente _router-outlet_ servirá como placeholder para navegação das páginas;
- O arquivo _app-routing.module.ts_ contém a configuração das rotas da aplicação;
- Em um objeto HTML, o atributo _routerLink_ define a nova rota quando for clicado;
- Programaticamente, um objeto **Router** injetado no construtor pode navegar também com _this.router.navigate(\["/novo-endereço"\])_;
- Um objeto **ActivatedRoute** injetado no construtor pode fornecer dados adicionais da navegação, como Path ou Query Params;


## DIRETIVAS IMPORTANTES

### Tipos de diretivas:
- Diretivas de componentes: refere-se ao modelo de componente. Ex: \<app-meu-componente\>;
- Diretivas estruturais: adiciona/remove elementos do DOM. Normalmente começam com asterisco. Ex: *ngIf, *ngFor;
- Diretivas de atributos: altera a aparência ou comportamento de um componente. Normalmente estão entre colchetes. Ex: \[ngClass\];

### ngFor: estrutura de repetição de componentes
- Sintaxe: *ngFor="let _item_ in _lista_";

### ngIf: mostra um componente condicionalmente
- Sintaxe: *ngIf="_condicao-booleana_";
- Pode-se incluir uma condição _else_ e fornecer um _ng-template_: *ngIf="_condicao-booleana_, else _templateAlternativo_";

### ngClass: altera dinamicamente classes aplicadas a um componente
- Sintaxe padrão: \[ngClass\]="_string-com-uma-ou-mais-classes_";
- Alternativamente, é possível habilitar/desabilitar classes condicionalmente: \[ngClass\]="{classe: _valor-booleano_}";


## OBSERVABLES

- Similar às _Promises_ em Javascript;
- Contida na biblioteca RXJS;
- Para requisições de sucesso, é necessário utilizar o _subscribe()_, passando a _arrow-function_ a ser executada;


## FORMS REATIVOS

- Utilização do _FormBuilder_ para criação de _FormGroups_;
- Vinculação e validação automática/reativa em campos de formulários;
- Composição de verificações;
- Variáveis de verificação para manipulação dinâmica visual (pristine, dirty, touched...);
