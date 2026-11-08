# Lume — livraria virtual 💗

Loja virtual de livros para atividade escolar. Desenvolvida com **HTML, CSS, JavaScript e Git**, com visual responsivo para **celular e computador** e identidade própria em rosa suave e vinho.

## Como acessar

- Repositório: https://github.com/sofiaciano/lume_site
- Versão de melhorias (antes da aprovação): https://github.com/sofiaciano/lume_site/tree/melhorias-lume-responsivo-checkout
- Depois de integrar à `main`, o site poderá ser aberto no GitHub Pages (se habilitado): https://sofiaciano.github.io/lume_site/

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra a pasta no **VS Code**.
3. Abra `index.html` no navegador ou utilize **Live Server**.
4. Redimensione a janela ou abra as ferramentas do navegador para verificar celular e computador.

Não é preciso instalar pacotes ou configurar backend. **Não utilize dados pessoais ou bancários reais.** Tudo é demonstrativo e fica armazenado apenas no navegador utilizado.

## Funcionalidades

- Página inicial e identidade visual próprias.
- Catálogo de livros com imagens, títulos, autores, descrições, preços e categorias.
- Pesquisa, filtros e detalhes de cada livro.
- Adicionar ao carrinho, ajustar quantidades, remover livros e limpar carrinho.
- Total calculado automaticamente, frete simulado e cupom demonstrativo (`BEMVINDO` ou `LIVRO10`).
- Checkout com preenchimento e validação de endereço fictício.
- **Pagamentos simulados:** Pix, débito, crédito e boleto.
- **Crédito:** seleção de **1 a 6 parcelas sem juros**. O valor de cada parcela é exibido apenas para demonstração.
- Revisão e confirmação de pedido, histórico local de pedidos.
- Favoritos, avaliações e páginas complementares.
- Tema claro/escuro, com escolha nas configurações e botão no cabeçalho.
- Layout adaptável a dispositivos móveis e computadores.
- Persistência local do carrinho e preferências com `localStorage`.

## Estrutura dos arquivos

- `index.html`, `catalogo.html`, `livro.html`, `carrinho.html`: páginas principais.
- `checkout.html`, `pagamento.html`, `revisao.html`, `confirmado.html`: etapas da compra demonstrativa.
- Outros `.html`: favoritos, perfil, configurações, pedidos, suporte etc.
- Cada página tem um arquivo JavaScript com mesmo nome, como `carrinho.js` e `pagamento.js`.
- `style.css`: estilos originais do Lume.
- `lume-melhorias.css`: ajustes responsivos, acabamento e paleta do tema escuro.
- `lume-extras.js`: seleção de aparência.
- `imagens/`: capas e ilustrações usadas no site.

## Roteiro para apresentar ao professor

1. Apresentar a loja e abrir a página inicial.
2. Demonstrar catálogo, categorias, busca e detalhes de um livro.
3. Adicionar **dois livros diferentes** ao carrinho.
4. Alterar a quantidade, remover um item e mostrar o cálculo do total.
5. Preencher o endereço com dados fictícios.
6. Demonstrar Pix, cartão de débito e cartão de crédito com parcelas.
7. Revisar o pedido e confirmar a compra simulada.
8. Exibir o histórico de pedidos e o tema escuro.
9. Mostrar os arquivos HTML, CSS e JavaScript, explicando como o `localStorage` guarda o carrinho, como o JavaScript recalcula o total e como `state.payment` e `state.installments` registram a simulação.
10. Mostrar o repositório e o histórico de commits.

## Segurança e limites

Este é um projeto **educacional**, sem cadastro real, gateway de pagamentos ou envio de pedidos para lojas. A simulação de compra **não cobra, não gera Pix verdadeiro, não processa cartões e não emite boleto**. Valores, frete, disponibilidade e avaliações exibidos são demonstrativos e não equivalem a uma oferta comercial.

## Git

As melhorias são preparadas em uma **branch separada** para proteger o projeto original. A integração na `main` pode ser feita após revisar os arquivos e testar a interface.

Histórico: abra a aba *Commits* do GitHub para visualizar as alterações e seus nomes descritivos.
