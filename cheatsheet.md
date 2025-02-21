** Property bindind: vincula uma variável ou valor entre o template e o componente em sentido unidirecional (componente -> template)
- Uso de colchetes: para atributos de tags, como valores de input (ex: \[value\] = "objeto.variavel");
- Uso de chaves duplas (interpolação): para outros campos, como literais de parágrafos (ex: {{{{objeto.variavel}}}});

** Event bindind: vincula uma função entre o template e o componente em sentido unidirecional (template -> componente)
- Uso de parênteses, normalmente no nome do evento da tag HTML sem o "on" (ex.: onClick="funcao()" -> (click)="funcao()");

** Two-way binding: vincula uma variável ou valor entre o template e o componente em sentido bidirecional (componente <-> template)
- Utiliza a diretiva [\(ngModel\)];
- Necessário importar o módulo FormsModule;