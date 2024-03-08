
# Projeto Login + Keep Alive - README

Este é o repositório do projeto "Login + Keep Alive" desenvolvido como parte do estágio na Compass UOL. Abaixo estão as informações importantes para o desenvolvimento, entrega e funcionalidades do projeto.

## Descrição do Projeto

O projeto consiste em criar um sistema de login e dashboard com funcionalidades específicas, utilizando HTML, CSS e JS. A interface deve seguir o layout fornecido no Figma, com atenção especial à fidelidade visual (Pixel Perfect).

## Desenvolvedor

O desenvolvedor deste projeto é:

+ Charles Eduardo Mello Guimarães: charles.eduardo.mello.guimaraes@hotmail.com

## Instrutores

- **Rafaela Janeczk:** [sagethirteen@gmail.com](mailto:sagethirteen@gmail.com)
- **Maithe Saldanha Ferrao:** [maithe.ferrao@compasso.com.br](mailto:maithe.ferrao@compasso.com.br)
- **Cassio Silva Takarada:** [cassio.takarada@compasso.com.br](mailto:cassio.takarada@compasso.com.br)
- **Anthoni Bortolotto Martinelli:** [anthoni.martinelli@compasso.com.br](mailto:anthoni.martinelli@compasso.com.br)
- **Leonardo Buhring Muller:** [l.muller.dev@gmail.com](mailto:l.muller.dev@gmail.com)
- **Gabriel Bezerra Rodrigues**: [gabriel.bezerra@compasso.com.br](mailto:gabriel.bezerra@compasso.com.br)

## Entrega

+ Último commit: até às 17h00 de 18/03/2024 (segunda-feira)
+ Cada microserviço deve ter seu próprio repositório no GitHub, configurado como "privado"
+ O repositório deve ter duas branches: 'main' e 'develop', com pelo menos 3 commits e 1 merge/pull request visível
+ Os instrutores devem ter acesso ao GitHub para revisão

## Prazo

O link do repositório deve ser enviado por e-mail até às 17h30 do dia 12/03/2024 (terça-feira).

## Funcionalidades Obrigatórias

+ Implementação de HTML, CSS e JS
+ Seguir o layout do Figma, respeitando cores e tamanhos (Pixel Perfect)
+ Não utilizar bibliotecas como Bootstrap, Material UI, Tailwind, entre outras

## Funcionalidades Adicionais (Não Obrigatórias)

+ Modal de sucesso ou erro ao registrar usuário, ao deletar e adicionar card
+ Criar uma API e salvar os usuários utilizando o JSON Server
+ Ao clicar em qualquer logo da Compass.UOL, levar o usuário à página inicial da empresa

## Telas e Funcionalidades

+ Tela Cadastro: Deve conter um botão que leve para a tela de Login. A validação pode ser feita em TypeScript. Os usuários cadastrados devem ser armazenados no local storage.
+ Tela Login: Deve conter um botão que leve para a tela de Cadastro. O nome de usuário para o login pode ser o email ou o primeiro nome + sobrenome inseridos. Os ícones ao lado do campo de input devem deslizar para dentro da input quando clicados.
+ Tela Dashboard: O usuário só pode acessar esta tela se estiver logado. É dividida em 3 partes: Header, Action Section e Board.

## Header

+ Data e hora em tempo real
+ Temperatura de acordo com a cidade cadastrada pelo usuário

## Footer

+ Botão de Logout que redireciona para a página de Login
+ Contador regressivo de 30 segundos que faz reload na página ao chegar a zero
+ Botão "Continuar Navegando" que redireciona para a página do Google