<p align="center">
<a href="https://dio.me/"><img src="https://img.shields.io/badge/DIO-Project-FED564?logo=codewars" alt="DIO - Project"></a>
<a href="https://www.gnu.org/software/bash/" title="Vá para a página inicial do Bash"><img src="https://img.shields.io/badge/Prompt-Project-FED564?logo=gnu-bash&amp;logoColor=white" alt="Feito com Bash"></a>
<a href="https://en.wikipedia.org/wiki/Artificial_intelligence"><img src="https://img.shields.io/badge/AI-Project-FED564?logo=openai" alt="AI - Project"></a>
<a href="https://www.microsoft.com/pt-br/microsoft-365/excel"><img src="https://custom-icon-badges.demolab.com/badge/Excel-478061?logo=windows11&logoColor=white" alt="AI - Project"></a>
<a href="https://markdownlivepreview.com/" title="Vá para a página inicial do Editor"><img src="https://img.shields.io/badge/Markdown-%23000000.svg?logo=markdown&logoColor=white"></a>
<a href="https://www.sublimetext.com/" title="Vá para a página inicial do Editor"><img src="https://img.shields.io/badge/Sublime%20Text-%23575757.svg?logo=sublime-text&logoColor=important)"></a>
<a href="https://claude.ai" title="Vá para a página inicial"><img src="https://img.shields.io/badge/Claude-D97757?logo=claude&logoColor=fff"></a>
<a href="https://claude.ai" title="Vá para a página inicial"><img src="https://img.shields.io/badge/Grok-%23000000.svg?logo=X&logoColor=white"></a>
<a href="https://www.typescriptlang.org/" title="typescript"><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff"></a>
<a href="https://www.python.org/" title="React"><img src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB"></a>


#  Utilizando Prompts para Gerar Insights de Relatórios de Vendas com Produtos com Pistache


Este repositório contém mais um  projeto de AI que faz a análise dos dados de vendas de produtos com pistache utilizando um prompt no Claude 4 e no Grok. O que foi usando:
- Uma planilha com dados de produtos com pistache.
- O prompt utilizado no Claude 4 e no Grok.
- Os insights obtidos, que se dividem em um Relatório e um Dashboard de Vendas.

## Processos Técnicos 
Todos os processos técnicos foram registrados de forma clara e estruturada:
- A pasta `data` contém a planilha `Relatório de vendas - Pistache.xlsx` com os dados utilizados.
- Em `prompts/prompt_claude.md` encontra-se a documentação do prompt utilizado no Claude 4, detalhando o comando enviado e um resumo da resposta obtida.
- Em `prompts/prompt_grok.md` o prompt utilizado no grok, o comando enviado e um resumo da resposta obtida.
- O código fonte do dashboard em TSX, localizado em `insights/pistache_sales_dashboard.tsx`, documenta a implementação do dashboard.

- Em `insights/Relatório de Vendas de Pistache - Estático.html`, o código fonte do Relatório de vendas gerado pelo Grok em uma página estática em Formato html.

## Ferramentas  Utilizadas
- Planilha do Excel para manipulação dos dados de produtos com pistache.
- Claude 4
- React com TypeScript para a criação do Dashboard (arquivo TSX).
- Grok


## Resultado do Dashboard de Vendas gerado pelo Claude 

Os Prints ilustra visualmente os resultados.

<img width="1425" alt="Dashboard" src="https://github.com/user-attachments/assets/87aaf84a-319f-4de4-9cfb-fa9705ba0135" />


<img width="1425" alt="Dashboard-tri" src="https://github.com/user-attachments/assets/5584a0a5-f831-4b2c-b007-27db3a53a5d9" />



## Resultado do Relatório de Vendas gerado pelo Grok


![relatorio_vendas_pistache](https://github.com/user-attachments/assets/56f23725-c5a7-4105-afdf-4f25efdc83f6)


## Conclusão

Uma planilha, um prompt, Duas ferramentas, Dois Resultados Diferentes.

- **Dashboard de Vendas** utilizando o React com TypeScript ficaria assim: 

<img width="596" alt="Dashboard" src="https://github.com/user-attachments/assets/822af675-706e-44c2-acc8-bff07f5460e0" />


Mas depois do **Relatório de Vendas** pecebi dados diferentes e depois de transformar o Dashboard em uma página estática, os dados mundaram e agora a página ficou interativa como uma opção sem precisar instalar depedencias.

- As principais diferenças do Dashboard e do Relatório de vendas  incluem:

- As vendas totais mais altas do Dashboard (R$ 17.380,80 vs. R$ 16.980,80) e unidades vendidas (952 vs. 932).

- Divergências de Dados sobre preferência de canal (física vs online).

- O foco do Dashboard no Sudeste vs. a ênfase do Relatório na contribuição de alto valor do Centro-Oeste.

A inclusão do Relatório de tendências mensais, porcentagens de produtos e recomendações estratégicas, ausentes no Dashboard.


